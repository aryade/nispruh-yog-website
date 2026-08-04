import { Resend } from "resend";

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return Response.json({ error: "Email is required." }, { status: 400 });
    }

    const trimmedEmail = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
      return Response.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json({ error: "Email service is not configured." }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const safeEmail = escapeHtml(trimmedEmail);

    const adminEmailResponse = await resend.emails.send({
      from: fromEmail,
      to: "info@nispruhyog.com",
      subject: "Books Notify Signup",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333;">
          <h2>New Books Notification Signup</h2>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p style="font-size: 12px; color: #666; margin-top: 20px;">
            Submitted from the /books page "More books coming soon" form.
          </p>
        </div>
      `,
    });

    if (adminEmailResponse.error) {
      console.error("Failed to send books notify email:", adminEmailResponse.error);
      return Response.json({ error: "Failed to submit your request." }, { status: 500 });
    }

    return Response.json({ success: true, message: "Signup received." }, { status: 200 });
  } catch (error) {
    console.error("Books notify error:", error);
    return Response.json({ error: "An error occurred while processing your request." }, { status: 500 });
  }
}
