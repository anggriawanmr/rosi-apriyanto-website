import { NextResponse } from "next/server";

type ContactPayload = {
  subject?: string;
  from?: string;
  body?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const subject = payload.subject?.trim();
  const from = payload.from?.trim();
  const body = payload.body?.trim();

  if (!subject || !from || !body) {
    return NextResponse.json(
      { ok: false, message: "Please fill in subject, from, and body." },
      { status: 400 }
    );
  }

  // Replace this with an email provider such as Resend, SendGrid, or Nodemailer.
  // For now, this confirms form submission and logs the message in the server terminal.
  console.log("New project inquiry", { subject, from, body });

  return NextResponse.json({
    ok: true,
    message: "Thank you. Your project inquiry has been submitted.",
  });
}
