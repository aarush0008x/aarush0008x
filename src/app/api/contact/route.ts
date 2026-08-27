import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const adminEmail = "aarush0008x@gmail.com";
    const senderEmail = process.env.BREVO_SENDER_EMAIL || "nimocodeai@gmail.com";
    const senderName = "Aarush Singh — Portfolio";
    const topic = subject ? subject : "General Collaboration / Inquiry";

    let emailSentToAdmin = false;
    let emailSentToUser = false;

    // 1. Try Brevo REST API if BREVO_API_KEY is provided
    const brevoApiKey = process.env.BREVO_API_KEY || process.env.SENDINBLUE_API_KEY;

    if (brevoApiKey) {
      try {
        // Mail 1: To Aarush (aarush0008x@gmail.com)
        const resAdmin = await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": brevoApiKey,
          },
          body: JSON.stringify({
            sender: { name: `${name} via Portfolio`, email: senderEmail },
            to: [{ email: adminEmail, name: "Aarush Singh" }],
            replyTo: { email: email, name: name },
            subject: `[Portfolio] ${topic} — from ${name}`,
            htmlContent: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #242424; color: #F7F6F4; padding: 32px; border-radius: 16px; border: 1px solid #381B21;">
                <h2 style="color: #F7F6F4; margin-top: 0; font-size: 22px; border-bottom: 1px solid rgba(247,246,244,0.1); padding-bottom: 16px;">
                  New Message from Portfolio Website
                </h2>
                <div style="margin: 20px 0; font-size: 14px; line-height: 1.6;">
                  <p><strong style="color: #9E3A4C;">From:</strong> ${name}</p>
                  <p><strong style="color: #9E3A4C;">Email:</strong> <a href="mailto:${email}" style="color: #D6D2CB;">${email}</a></p>
                  <p><strong style="color: #9E3A4C;">Topic:</strong> ${topic}</p>
                </div>
                <div style="background: #1E1E1E; padding: 20px; border-radius: 12px; border: 1px solid rgba(247,246,244,0.08); margin-top: 20px;">
                  <p style="color: #802938; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-top: 0; font-weight: 600;">Message Content</p>
                  <p style="white-space: pre-wrap; color: #E8E5E0; font-size: 14px; line-height: 1.7; margin-bottom: 0;">${message}</p>
                </div>
              </div>
            `,
          }),
        });

        if (resAdmin.ok) {
          emailSentToAdmin = true;
        }

        // Mail 2: Confirmation Auto-Reply to the User (email) with a copy of their message
        const resUser = await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": brevoApiKey,
          },
          body: JSON.stringify({
            sender: { name: senderName, email: senderEmail },
            to: [{ email: email, name: name }],
            replyTo: { email: adminEmail, name: "Aarush Singh" },
            subject: `Message Received — Aarush Singh Portfolio`,
            htmlContent: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #242424; color: #F7F6F4; padding: 32px; border-radius: 16px; border: 1px solid #381B21; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #F7F6F4; margin-top: 0; font-size: 22px;">Thank you for reaching out, ${name}!</h2>
                <p style="color: #D6D2CB; font-size: 15px; line-height: 1.6;">
                  Your message has been delivered to Aarush Singh. I appreciate you taking the time to connect and will review your note and respond as soon as possible.
                </p>

                <div style="background: #1E1E1E; padding: 20px; border-radius: 12px; border: 1px solid rgba(247,246,244,0.08); margin: 24px 0;">
                  <p style="color: #802938; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-top: 0; font-weight: 600;">Copy of Your Message</p>
                  <p style="color: #9E9A93; font-size: 12px; margin-bottom: 8px;"><strong>Subject:</strong> ${topic}</p>
                  <p style="white-space: pre-wrap; color: #E8E5E0; font-size: 14px; line-height: 1.7; margin-bottom: 0;">${message}</p>
                </div>

                <div style="border-top: 1px solid rgba(247,246,244,0.1); padding-top: 20px; font-size: 13px; color: #9E9A93; line-height: 1.6;">
                  <strong style="color: #F7F6F4; font-size: 14px;">Aarush Singh</strong><br />
                  B.Tech in Artificial Intelligence &amp; Data Science · CGC University<br />
                  <a href="https://github.com/aarush0008x" style="color: #802938; text-decoration: none;">GitHub: aarush0008x</a> · 
                  <a href="https://www.linkedin.com/in/aarush-singh-4b3a20358/" style="color: #802938; text-decoration: none;">LinkedIn</a>
                </div>
              </div>
            `,
          }),
        });

        if (resUser.ok) {
          emailSentToUser = true;
        }
      } catch (brevoErr) {
        console.error("Brevo REST API error:", brevoErr);
      }
    }

    // 2. Try SMTP via Nodemailer if SMTP configuration is set
    const smtpPass = process.env.BREVO_SMTP_PASS || process.env.SMTP_PASS;
    const smtpUser = process.env.BREVO_SMTP_USER || process.env.SMTP_USER || "nimocode@gmail.com";
    const smtpHost = process.env.SMTP_HOST || "smtp-relay.brevo.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 587;

    if (!emailSentToAdmin && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        // Mail 1 to Admin
        await transporter.sendMail({
          from: `"${name} (Portfolio)" <${senderEmail}>`,
          replyTo: email,
          to: adminEmail,
          subject: `[Portfolio] ${topic} — from ${name}`,
          text: `From: ${name} (${email})\nSubject: ${topic}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: sans-serif; background: #242424; color: #F7F6F4; padding: 24px; border-radius: 12px;">
              <h2>New Message from Portfolio Website</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${topic}</p>
              <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1);" />
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          `,
        });
        emailSentToAdmin = true;

        // Mail 2 to User
        await transporter.sendMail({
          from: `"${senderName}" <${senderEmail}>`,
          replyTo: adminEmail,
          to: email,
          subject: `Message Received — Aarush Singh Portfolio`,
          text: `Hi ${name},\n\nThank you for reaching out! Your message has been received.\n\nYour Message Copy:\n${message}\n\nBest regards,\nAarush Singh`,
          html: `
            <div style="font-family: sans-serif; background: #242424; color: #F7F6F4; padding: 24px; border-radius: 12px;">
              <h2>Thank you for connecting, ${name}!</h2>
              <p>Your message has been delivered to Aarush Singh. I will get back to you shortly.</p>
              <div style="background: #1E1E1E; padding: 16px; border-radius: 8px; margin: 16px 0;">
                <p style="color: #802938; font-size: 11px; text-transform: uppercase;">Your Message Copy:</p>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
              <p style="font-size: 13px; color: #9E9A93;">Aarush Singh · B.Tech AI &amp; Data Science @ CGC University</p>
            </div>
          `,
        });
        emailSentToUser = true;
      } catch (smtpErr) {
        console.error("Nodemailer Brevo SMTP error:", smtpErr);
      }
    }

    console.log("Contact form processing result:", {
      from: `${name} <${email}>`,
      toAdmin: adminEmail,
      senderEmail,
      emailSentToAdmin,
      emailSentToUser,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      emailSentToAdmin,
      emailSentToUser,
      message: `Message sent successfully! A copy of your message has been sent to ${email} and delivered to aarush0008x@gmail.com.`,
    });
  } catch (err: any) {
    console.error("Error in contact API route:", err);
    return NextResponse.json(
      { error: "Failed to dispatch message. Please contact aarush0008x@gmail.com directly." },
      { status: 500 }
    );
  }
}
