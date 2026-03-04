import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'

function safeCompare(a: string, b: string): boolean {
  try {
    const ba = Buffer.from(a, 'utf8')
    const bb = Buffer.from(b, 'utf8')
    if (ba.length !== bb.length) return false
    return timingSafeEqual(ba, bb)
  } catch {
    return false
  }
}

export async function POST(req: NextRequest) {
  const { login, password } = await req.json()

  const validLogin    = process.env.ADMIN_LOGIN    ?? ''
  const validPassword = process.env.ADMIN_PASSWORD ?? ''

  if (
    !login || !password || !validLogin || !validPassword ||
    !safeCompare(login.trim(), validLogin.trim()) ||
    !safeCompare(password, validPassword)
  ) {
    await new Promise(r => setTimeout(r, 500))
    return NextResponse.json({ error: 'Identifiants incorrects.' }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set('admin_token', process.env.ADMIN_SESSION_SECRET!, {
    httpOnly: true,                                  // inaccessible depuis JS client
    secure:   process.env.NODE_ENV === 'production', // HTTPS uniquement en prod
    sameSite: 'lax',                                 // protection CSRF
    maxAge:   60 * 60 * 24 * 7,                     // 7 jours
    path:     '/',
  })
  return res
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true })
  res.cookies.delete('admin_token')
  return res
}
