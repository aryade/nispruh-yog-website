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
    const { name, email, message, subject } = await request.json();
    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedMessage = escapeHtml(message);
    const escapedSubject = subject ? escapeHtml(subject) : "";

    // Send email to info@nispruhyog.com with the inquiry
    const adminEmailResponse = await resend.emails.send({
      from: fromEmail,
      to: "info@nispruhyog.com",
      subject: `New Contact Form Inquiry from ${escapedName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333;">
          <h2>New Contact Form Inquiry</h2>
          <p><strong>Name:</strong> ${escapedName}</p>
          <p><strong>Email:</strong> ${escapedEmail}</p>
          ${escapedSubject ? `<p><strong>Interest/Program:</strong> ${escapedSubject}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f5f5f5; padding: 12px; border-radius: 4px;">
            ${escapedMessage}
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 12px; color: #666;">
            This is an automated email from your Kriya Yoga website contact form.
          </p>
        </div>
      `,
    });

    if (adminEmailResponse.error) {
      console.error("Failed to send admin email:", adminEmailResponse.error);
      return Response.json(
        { error: "Failed to send message to admin" },
        { status: 500 }
      );
    }

    // Send confirmation email to the user
    const userEmailResponse = await resend.emails.send({
      from: fromEmail,
      to: escapedEmail,
      subject: "Thank you for reaching out to Nispruh Yog",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333;">
          <p>Dear ${escapedName},</p>
          <p>Thank you for reaching out to us. We have received your message and appreciate you taking the time to contact Nispruh Yog.</p>
          ${escapedSubject ? `<p><strong>Interest:</strong> ${escapedSubject}</p>` : ""}
          <p>We will review your inquiry carefully and respond within 2-3 working days from a calm place.</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 12px; color: #666;">
            <strong>Your message:</strong><br/>
            <span style="white-space: pre-wrap; background: #f5f5f5; padding: 12px; border-radius: 4px; display: block;">
              ${escapedMessage}
            </span>
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 14px; color: #666;">
            Warm regards,<br/>
            <strong>Nispruh Yog Team</strong>
          </p>
        </div>
      `,
    });

    if (userEmailResponse.error) {
      console.error("Failed to send user confirmation email:", userEmailResponse.error);
      return Response.json(
        { error: "Failed to send confirmation email" },
        { status: 500 }
      );
    }

    return Response.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}
