import { NextRequest, NextResponse } from 'next/server'
import { pbkdf2Sync, timingSafeEqual } from 'crypto'

function verifyPassword(entered: string): boolean {
  const salt           = process.env.ADMIN_SALT           ?? ''
  const storedHashHex  = process.env.ADMIN_PASSWORD_HASH  ?? ''

  if (!salt || !storedHashHex) return false

  const enteredHash = pbkdf2Sync(entered, salt, 100000, 64, 'sha512')
  const storedHash  = Buffer.from(storedHashHex, 'hex')

  if (enteredHash.length !== storedHash.length) return false

  // Comparaison en temps constant — protège contre les timing attacks
  return timingSafeEqual(enteredHash, storedHash)
}

export async function POST(req: NextRequest) {
  const { login, password } = await req.json()

  const validLogin = process.env.ADMIN_LOGIN ?? ''

  console.log('[auth] login reçu:', JSON.stringify(login))
  console.log('[auth] login attendu:', JSON.stringify(validLogin))
  console.log('[auth] SALT défini:', !!process.env.ADMIN_SALT)
  console.log('[auth] HASH défini:', !!process.env.ADMIN_PASSWORD_HASH)
  console.log('[auth] login match:', login?.trim().toLowerCase() === validLogin.trim().toLowerCase())
  console.log('[auth] password match:', verifyPassword(password))

  if (
    !login || !password ||
    login.trim().toLowerCase() !== validLogin.trim().toLowerCase() ||
    !verifyPassword(password)
  ) {
    // Délai fixe pour éviter l'énumération par timing
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
