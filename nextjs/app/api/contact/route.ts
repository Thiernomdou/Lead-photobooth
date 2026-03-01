import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Instanciation lazy — évite le crash au build si RESEND_API_KEY n'est pas définie
function getResend() {
  return new Resend(process.env.RESEND_API_KEY ?? 'placeholder')
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nom, email, telephone, typeEvenement, date, message } = body

    // Validation basique
    if (!nom?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Champs obligatoires manquants.' }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 })
    }

    const { error } = await getResend().emails.send({
      from:    'Contact Photobooth <noreply@photobooth-evenement.fr>',
      to:      process.env.CONTACT_EMAIL ?? 'contact@photobooth-evenement.fr',
      reply_to: email,
      subject: `[Photobooth Lyon] Devis — ${nom} · ${typeEvenement ?? 'Événement'}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#fff;">
          <div style="border-bottom:3px solid #C9A84C;padding-bottom:16px;margin-bottom:24px;">
            <h2 style="margin:0;color:#0A0A0A;font-size:22px;">Nouvelle demande de devis</h2>
            <p style="margin:4px 0 0;color:#888;font-size:13px;">Via photobooth-evenement.fr</p>
          </div>

          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 0;color:#666;width:130px;vertical-align:top;">Nom</td>
                <td style="padding:8px 0;font-weight:600;color:#111;">${nom}</td></tr>
            <tr><td style="padding:8px 0;color:#666;vertical-align:top;">Email</td>
                <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#C9A84C;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666;vertical-align:top;">Téléphone</td>
                <td style="padding:8px 0;">${telephone || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#666;vertical-align:top;">Événement</td>
                <td style="padding:8px 0;">${typeEvenement || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#666;vertical-align:top;">Date</td>
                <td style="padding:8px 0;">${date || '—'}</td></tr>
          </table>

          <div style="margin-top:20px;padding:16px 20px;background:#FAFAF8;border-left:4px solid #C9A84C;">
            <p style="margin:0 0 8px;color:#666;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Message</p>
            <p style="margin:0;color:#333;line-height:1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>

          <p style="margin-top:32px;font-size:12px;color:#aaa;">
            Répondez directement à cet email pour contacter ${nom}.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('[Resend error]', error)
      return NextResponse.json({ error: "Erreur d'envoi. Réessayez dans quelques instants." }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact API error]', err)
    return NextResponse.json({ error: 'Erreur serveur inattendue.' }, { status: 500 })
  }
}
