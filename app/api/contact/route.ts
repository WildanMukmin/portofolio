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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(name: string, email: string, subject: string, message: string) {
  return `
<div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #0f172a;">
  <h2 style="margin: 0 0 20px; font-size: 18px;">New message from your portfolio</h2>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <tr>
      <td style="padding: 6px 12px 6px 0; color: #64748b; white-space: nowrap;">Name</td>
      <td style="padding: 6px 0;">${escapeHtml(name)}</td>
    </tr>
    <tr>
      <td style="padding: 6px 12px 6px 0; color: #64748b; white-space: nowrap;">Email</td>
      <td style="padding: 6px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #2563eb;">${escapeHtml(email)}</a></td>
    </tr>
    <tr>
      <td style="padding: 6px 12px 6px 0; color: #64748b; white-space: nowrap;">Subject</td>
      <td style="padding: 6px 0;">${escapeHtml(subject)}</td>
    </tr>
  </table>
  <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; white-space: pre-wrap; line-height: 1.6; font-size: 14px;">${escapeHtml(message)}</div>
</div>`;
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
    process.env.CONTACT_FROM_EMAIL ||
    `${site.name} Portfolio <contact@wildanmukmin.my.id>`;

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
      subject: `New message from ${name}: ${subject}`,
      text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
      html: buildEmailHtml(name, email, subject, message),
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
