import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();

    // Configuration du transporteur nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: true
      }
    });

    // Configuration de l'email
    const mailOptions = {
      from: {
        name: 'Site internet',
        address: process.env.SMTP_USER
      },
      to: 'ampr@orange.fr',
      replyTo: process.env.SMTP_USER,
      subject: `Nouveau message sur votre site internet : ${data.nom}`,
      html: `
        <p><strong>Nom:</strong> ${data.nom}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.telephone ? `<p><strong>Téléphone:</strong> ${data.telephone}</p>` : ''}
        ${data.sujet ? `<p><strong>Sujet:</strong> ${data.sujet}</p>` : ''}
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    return NextResponse.json(
      { message: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
} 