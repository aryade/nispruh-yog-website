import { NextRequest, NextResponse } from "next/server";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields (name, email, message) are required." }, { status: 400 });
  }

  if (!validateEmail(email)) {
    return NextResponse.json({ error: "Email looks invalid." }, { status: 400 });
  }

  // Place for real backend processing (email, db, external service)
  await new Promise((resolve) => setTimeout(resolve, 400));

  return NextResponse.json({ status: "ok", message: "We received your note." }, { status: 200 });
}
