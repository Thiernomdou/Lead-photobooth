import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getSupabase } from '@/lib/supabase'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY ?? 'placeholder')
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      eventType, date, venue, guestCount, duration,
      model, options, budget,
      prenom, nom, email, telephone, source, message,
    } = body

    if (!prenom || !nom || !email || !telephone) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants.' },
        { status: 400 },
      )
    }

    const optionsStr = Array.isArray(options) ? options.join(', ') : (options ?? '—')

    // ── 1. Enregistrement Supabase ──────────────────────────────────────────
    const { error: dbError } = await getSupabase().from('leads').insert({
      event_type:  eventType  ?? null,
      date:        date       ?? null,
      venue:       venue      ?? null,
      guest_count: guestCount ?? null,
      duration:    duration   ?? null,
      model:       model      ?? null,
      options:     optionsStr,
      budget:      budget     ?? null,
      prenom,
      nom,
      email,
      telephone,
      source:      source  ?? null,
      message:     message ?? null,
    })

    if (dbError) {
      console.error('[Supabase] insert error:', dbError)
      return NextResponse.json({ error: dbError.message }, { status: 500 })
    }

    const resend  = getResend()
    const adminTo = process.env.CONTACT_EMAIL ?? 'contact.kivio@gmail.com'
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://photobooth-evenement.fr'

    // ── 2. Emails envoyés en parallèle ──────────────────────────────────────
    await Promise.all([

      // 2a. Notification interne (admin)
      resend.emails.send({
        from:     'Devis Photobooth <noreply@photobooth-evenement.fr>',
        to:       adminTo,
        reply_to: email,
        subject:  `[Devis] ${eventType ?? 'Événement'} — ${prenom} ${nom}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#fff;">
            <div style="border-bottom:3px solid #C9A84C;padding-bottom:16px;margin-bottom:24px;">
              <h2 style="margin:0;color:#0A0A0A;font-size:22px;">Nouvelle demande de devis</h2>
              <p style="margin:4px 0 0;color:#888;font-size:13px;">Via photobooth-evenement.fr — formulaire multi-step</p>
            </div>

            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr><td style="padding:8px 0;color:#666;width:140px;vertical-align:top;">Prénom / Nom</td>
                  <td style="padding:8px 0;font-weight:600;color:#111;">${prenom} ${nom}</td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top;">Email</td>
                  <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#C9A84C;">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top;">Téléphone</td>
                  <td style="padding:8px 0;">${telephone}</td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top;">Événement</td>
                  <td style="padding:8px 0;">${eventType || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top;">Date</td>
                  <td style="padding:8px 0;">${date || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top;">Lieu</td>
                  <td style="padding:8px 0;">${venue || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top;">Invités</td>
                  <td style="padding:8px 0;">${guestCount || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top;">Durée</td>
                  <td style="padding:8px 0;">${duration || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top;">Modèle</td>
                  <td style="padding:8px 0;">${model || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top;">Options</td>
                  <td style="padding:8px 0;">${optionsStr}</td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top;">Budget</td>
                  <td style="padding:8px 0;">${budget || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top;">Source</td>
                  <td style="padding:8px 0;">${source || '—'}</td></tr>
            </table>

            ${message ? `
            <div style="margin-top:20px;padding:16px 20px;background:#FAFAF8;border-left:4px solid #C9A84C;">
              <p style="margin:0 0 8px;color:#666;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Message</p>
              <p style="margin:0;color:#333;line-height:1.6;">${message.replace(/\n/g, '<br>')}</p>
            </div>` : ''}

            <p style="margin-top:32px;font-size:12px;color:#aaa;">
              Répondez directement à cet email pour contacter ${prenom} ${nom}.
            </p>
          </div>
        `,
      }),

      // 2b. Confirmation automatique au prospect
      resend.emails.send({
        from:     'PhotoBooth Lyon <noreply@photobooth-evenement.fr>',
        to:       email,
        reply_to: adminTo,
        subject: 'Votre demande de devis photobooth Lyon ✓',
        html: `
          <!DOCTYPE html>
          <html lang="fr">
          <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
          <body style="margin:0;padding:0;background:#F5F5F3;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F5F3;padding:40px 16px;">
              <tr><td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;">

                  <!-- En-tête -->
                  <tr>
                    <td style="background:#0A0A0A;padding:32px 40px;text-align:center;border-bottom:3px solid #C9A84C;">
                      <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:0.05em;">
                        PHOTO<span style="color:#C9A84C;">BOOTH</span> LYON
                      </p>
                      <p style="margin:6px 0 0;font-size:12px;color:#999;letter-spacing:0.15em;text-transform:uppercase;">
                        photobooth-evenement.fr
                      </p>
                    </td>
                  </tr>

                  <!-- Corps -->
                  <tr>
                    <td style="padding:48px 40px 32px;">
                      <p style="margin:0 0 24px;font-size:16px;color:#333;">Bonjour <strong>${prenom}</strong>,</p>

                      <p style="margin:0 0 20px;font-size:15px;color:#333;line-height:1.7;">
                        Nous avons bien reçu votre demande de devis pour votre
                        <strong style="color:#0A0A0A;">${eventType || 'événement'}</strong>
                        ${date ? `du <strong style="color:#0A0A0A;">${date}</strong>` : ''}.
                      </p>

                      <p style="margin:0 0 20px;font-size:15px;color:#333;line-height:1.7;">
                        Votre devis personnalisé vous sera envoyé dans les
                        <strong style="color:#0A0A0A;">24h</strong>
                        à cette adresse email.
                      </p>

                      <!-- Encadré -->
                      <div style="background:#FAFAF8;border-left:4px solid #C9A84C;padding:20px 24px;margin:28px 0;">
                        <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:0.1em;">
                          En attendant, une question ?
                        </p>
                        <p style="margin:0;font-size:15px;color:#333;line-height:1.6;">
                          Appelez-nous directement au
                          <a href="tel:+33665420793" style="color:#C9A84C;font-weight:700;text-decoration:none;">
                            06 65 42 07 93
                          </a>
                          — nous répondons 7j/7.
                        </p>
                      </div>

                      <!-- Bouton -->
                      <table cellpadding="0" cellspacing="0" style="margin:32px auto 0;display:block;text-align:center;">
                        <tr>
                          <td style="background:#C9A84C;padding:0;">
                            <a href="${siteUrl}/lyon/"
                               style="display:inline-block;padding:16px 36px;font-size:14px;font-weight:700;color:#0A0A0A;text-decoration:none;letter-spacing:0.08em;text-transform:uppercase;">
                              Voir nos formules →
                            </a>
                          </td>
                        </tr>
                      </table>

                      <p style="margin:40px 0 0;font-size:15px;color:#333;line-height:1.7;">
                        À très bientôt,<br>
                        <strong>L'équipe PhotoBooth Lyon</strong>
                      </p>
                    </td>
                  </tr>

                  <!-- Pied de page -->
                  <tr>
                    <td style="background:#F0EFE9;padding:24px 40px;border-top:1px solid #E5E4DE;">
                      <p style="margin:0;font-size:12px;color:#999;text-align:center;line-height:1.6;">
                        PhotoBooth Lyon · <a href="${siteUrl}" style="color:#C9A84C;text-decoration:none;">photobooth-evenement.fr</a><br>
                        Vous recevez cet email car vous avez soumis un formulaire de devis sur notre site.
                      </p>
                    </td>
                  </tr>

                </table>
              </td></tr>
            </table>
          </body>
          </html>
        `,
      }),

    ])

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[devis] unexpected error:', err)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
