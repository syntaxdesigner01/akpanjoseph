import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email and message are required" },
                { status: 400 }
            );
        }

        // Create a transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        // 1. Email to YOU (the owner)
        const adminMailOptions = {
            from: `"${name}" <${process.env.GMAIL_USER}>`, // Displays User's Name
            to: "akpanjoseph2021@gmail.com",
            replyTo: email, // So you can click reply directly
            subject: `New Portfolio Message from ${name}`,
            text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        // 2. Thank You Email to THE USER
        const userMailOptions = {
            from: `"Akpan Joseph" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: `Thanks for reaching out, ${name.split(" ")[0]}!`,
            html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #f97316;">Hello ${name},</h2>
          <p>Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible!</p>
          <p>Best regards,<br /><strong>Akpan Joseph</strong></p>
          <hr style="border: none; border-top: 1px solid #eee; margin-top: 30px;" />
          <p style="font-size: 11px; color: #999; text-align: center;">This is an automated confirmation of your inquiry.</p>
        </div>
      `,
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions),
        ]);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Nodemailer Error:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
