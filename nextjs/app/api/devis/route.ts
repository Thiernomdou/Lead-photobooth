import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabase } from '@/lib/supabase'

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
    const { error: dbError } = await supabase.from('leads').insert({
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

    // ── 2. Notification email ───────────────────────────────────────────────
    const to = process.env.CONTACT_EMAIL ?? 'contact.kivio@gmail.com'
    await getResend().emails.send({
      from:     'Devis Photobooth <noreply@location-photobooth.fr>',
      to,
      reply_to: email,
      subject:  `[Devis] ${eventType ?? 'Événement'} — ${prenom} ${nom}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#fff;">
          <div style="border-bottom:3px solid #C9A84C;padding-bottom:16px;margin-bottom:24px;">
            <h2 style="margin:0;color:#0A0A0A;font-size:22px;">Nouvelle demande de devis</h2>
            <p style="margin:4px 0 0;color:#888;font-size:13px;">Via location-photobooth.fr — formulaire multi-step</p>
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
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[devis] unexpected error:', err)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
