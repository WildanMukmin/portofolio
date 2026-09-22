import { NextResponse } from "next/server";
import { site } from "@/lib/site";

const RESEND_API_URL = "https://api.resend.com/emails";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  /** Honeypot: real visitors never fill this field. */
  company?: string;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email sending is not configured yet." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, subject, message, company } = payload;

  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Please fill in every field." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || site.email;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  const resendResponse = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: toEmail,
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  });

  if (!resendResponse.ok) {
    return NextResponse.json(
      { error: "Could not send your message. Try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
