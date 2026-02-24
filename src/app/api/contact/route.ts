import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please provide a valid email address.' },
                { status: 400 }
            );
        }

        // Check that SMTP credentials are configured
        if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
            console.error('SMTP credentials not configured. Set SMTP_EMAIL and SMTP_PASSWORD in .env.local');
            return NextResponse.json(
                { error: 'Email service is not configured. Please try again later.' },
                { status: 500 }
            );
        }

        // Create Nodemailer transporter with Google Workspace SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // STARTTLS
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Compose the email
        const mailOptions = {
            from: `"Trixtern Website" <${process.env.SMTP_EMAIL}>`,
            to: 'contact@trixtern.com',
            replyTo: `"${name}" <${email}>`,
            subject: subject ? `[Website Contact] ${subject}` : `[Website Contact] Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
            html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #ec1313; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h2>
          </div>
          <div style="background: #f9f9f9; padding: 32px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333; width: 100px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;"><a href="mailto:${email}" style="color: #ec1313;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">Subject</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">${subject || 'N/A'}</td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <h3 style="font-size: 14px; color: #333; margin-bottom: 8px;">Message</h3>
              <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #eee; color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>
          </div>
        </div>
      `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Your message has been sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
}
