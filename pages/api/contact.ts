import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // ✅ Ensure environment variables are correctly set
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("Missing email environment variables.");
    return res.status(500).json({ message: "Email configuration error" });
  }

  // ✅ Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // ✅ Your Gmail address
      pass: process.env.EMAIL_PASS, // ✅ Your App Password from Google
    },
  });

  try {
    // ✅ Send Email
    await transporter.sendMail({
      from: `"Fluffy Pet Wash Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // ✅ Send email to yourself
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email Error:', error);
    return res.status(500).json({ message: 'Error sending email' });
  }
}
