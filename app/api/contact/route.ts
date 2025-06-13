import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, message } = body;

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Les champs nom, email et message sont requis' },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <contact@xhaflaireaxel.com>', // Remplacez par votre domaine
      to: [process.env.CONTACT_EMAIL || 'xhaflaire.axel@gmail.com'],
      replyTo: email,
      subject: `Nouveau contact Portfolio - ${projectType || 'Projet'} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nouveau contact Portfolio</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; color: white; text-align: center; margin-bottom: 30px;">
              <h1 style="margin: 0; font-size: 28px;">📧 Nouveau Contact Portfolio</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Un nouveau message a été reçu depuis votre portfolio</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
              <h2 style="color: #667eea; margin-top: 0; border-bottom: 2px solid #e9ecef; padding-bottom: 10px;">👤 Informations du Contact</h2>
              
              <div style="display: grid; gap: 15px;">
                <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #667eea;">
                  <strong style="color: #667eea;">Nom complet :</strong><br>
                  <span style="font-size: 16px;">${name}</span>
                </div>
                
                <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745;">
                  <strong style="color: #28a745;">Email :</strong><br>
                  <a href="mailto:${email}" style="color: #28a745; text-decoration: none; font-size: 16px;">${email}</a>
                </div>
                
                ${company ? `
                <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107;">
                  <strong style="color: #ffc107;">Entreprise :</strong><br>
                  <span style="font-size: 16px;">${company}</span>
                </div>
                ` : ''}
                
                ${projectType ? `
                <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #17a2b8;">
                  <strong style="color: #17a2b8;">Type de projet :</strong><br>
                  <span style="font-size: 16px;">${projectType}</span>
                </div>
                ` : ''}
              </div>
            </div>
            
            <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
              <h2 style="color: #667eea; margin-top: 0; border-bottom: 2px solid #e9ecef; padding-bottom: 10px;">💬 Message</h2>
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
                <p style="margin: 0; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="background: #e9ecef; padding: 20px; border-radius: 10px; text-align: center;">
              <h3 style="color: #667eea; margin-top: 0;">🚀 Actions Recommandées</h3>
              <div style="margin: 15px 0;">
                <a href="mailto:${email}?subject=Re: ${projectType || 'Votre projet'} - Réponse de Xhaflaire Axel" 
                   style="display: inline-block; background: #667eea; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; margin: 5px; font-weight: bold;">
                  📧 Répondre par Email
                </a>
              </div>
              <p style="margin: 15px 0 0 0; font-size: 14px; color: #6c757d;">
                📅 Reçu le ${new Date().toLocaleDateString('fr-FR', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
              <p style="margin: 0; font-size: 12px; color: #6c757d;">
                Ce message a été envoyé depuis le formulaire de contact du portfolio
                <br>
                <a href="https://www.xhaflaireaxel.com" style="color: #667eea;">www.xhaflaireaxel.com</a>
              </p>
            </div>
          </body>
        </html>
      `,
      text: `
Nouveau contact depuis votre portfolio

Informations du contact :
- Nom : ${name}
- Email : ${email}
${company ? `- Entreprise : ${company}` : ''}
${projectType ? `- Type de projet : ${projectType}` : ''}

Message :
${message}

---
Reçu le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}
Portfolio : https://www.xhaflaireaxel.com
      `
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }

    console.log('Email envoyé avec succès:', data);
    return NextResponse.json(
      { 
        message: 'Email envoyé avec succès', 
        id: data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur API:', error);
    return NextResponse.json(
      { error: 'Erreur serveur interne' },
      { status: 500 }
    );
  }
}
