import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log("[QURAI Contact]", JSON.stringify({ name, email, company, message, timestamp: new Date().toISOString() }));

    const smtpHost = process.env.SMTP_HOST;

    if (smtpHost) {
      const nodemailer = require("nodemailer");
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL || "youngjoo.cho@get-it.co.kr",
        replyTo: email,
        subject: `[QURAI.AI] New inquiry from ${name}${company ? ` (${company})` : ""}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
            <h2 style="color:#2F6BFF;border-bottom:2px solid #2F6BFF;padding-bottom:10px;">New Contact Form Submission</h2>
            <table style="width:100%;border-collapse:collapse;margin:20px 0;">
              <tr><td style="padding:8px 0;color:#666;width:120px;"><strong>Name</strong></td><td style="padding:8px 0;">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#666;"><strong>Email</strong></td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#666;"><strong>Company</strong></td><td style="padding:8px 0;">${company || "N/A"}</td></tr>
            </table>
            <h3 style="color:#333;">Message</h3>
            <div style="background:#f5f5f5;padding:15px;border-radius:8px;white-space:pre-wrap;">${message}</div>
            <p style="color:#999;font-size:12px;margin-top:20px;">Sent from qurai.ai contact form</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[QURAI Contact Error]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
