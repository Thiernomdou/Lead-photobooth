/**
 * Script de réinitialisation du mot de passe admin.
 * Usage : node scripts/reset-admin-password.mjs
 */
import { pbkdf2Sync, randomBytes } from 'crypto'
import { readFileSync, writeFileSync } from 'fs'
import { createInterface } from 'readline'

const rl = createInterface({ input: process.stdin, output: process.stdout })

function question(prompt) {
  return new Promise(resolve => rl.question(prompt, resolve))
}

const password = await question('Nouveau mot de passe admin : ')
rl.close()

if (!password || password.length < 8) {
  console.error('Mot de passe trop court (minimum 8 caractères).')
  process.exit(1)
}

const salt = randomBytes(32).toString('hex')
const hash = pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex')

// Mise à jour de .env.local
let env = readFileSync('.env.local', 'utf8')

env = env.replace(/^ADMIN_SALT=.*$/m, `ADMIN_SALT=${salt}`)
env = env.replace(/^ADMIN_PASSWORD_HASH=.*$/m, `ADMIN_PASSWORD_HASH=${hash}`)

writeFileSync('.env.local', env, 'utf8')

console.log('\n✓ Mot de passe mis à jour dans .env.local')
console.log('  Redémarre le serveur : npm run dev')
