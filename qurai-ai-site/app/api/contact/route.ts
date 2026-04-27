import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "QURAI Contact <noreply@qurai.ai>",
      to: ["tom@qurai.ai"],
      replyTo: email,
      subject: `[QURAI] New inquiry from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family:'Malgun Gothic',Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
          <h2 style="color:#2F6BFF;border-bottom:2px solid #2F6BFF;padding-bottom:10px;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;margin:20px 0;">
            <tr><td style="padding:8px 0;color:#666;width:120px;"><strong>Name</strong></td><td style="padding:8px 0;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666;"><strong>Email</strong></td><td style="padding:8px 0;">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#666;"><strong>Company</strong></td><td style="padding:8px 0;">${company || "N/A"}</td></tr>
          </table>
          <h3 style="color:#333;">Message</h3>
          <div style="background:#f5f5f5;padding:15px;border-radius:8px;white-space:pre-wrap;">${message}</div>
          <p style="color:#999;font-size:12px;margin-top:20px;">Sent from qurai.ai contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error("[QURAI Contact Resend Error]", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("[QURAI Contact Error]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
