
import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, phone, service, details } = req.body;

    if (!name || !phone) {
        return res.status(400).json({ message: 'Name and Phone are required.' });
    }

    // Use environment variables for security
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER, // Send to self
        subject: `New Quote Request from ${name}`,
        text: `
      New Handyman Quote Request:
      ---------------------------
      Name: ${name}
      Phone: ${phone}
      Service: ${service}
      Details: ${details}
      ---------------------------
    `,
        html: `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Details:</strong><br/>${details}</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Quote sent successfully!' });
    } catch (error) {
        console.error('Email send error:', error);
        return res.status(500).json({ message: 'Failed to send email.', error: String(error) });
    }
}
