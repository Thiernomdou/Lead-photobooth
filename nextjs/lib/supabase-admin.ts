import { createClient, SupabaseClient } from '@supabase/supabase-js'

let _client: SupabaseClient | null = null

export function getSupabaseAdmin(): SupabaseClient {
  if (!_client) {
    const url = process.env.SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY

    if (!url?.startsWith('https://') || !key) {
      throw new Error(
        `[Supabase] Variables manquantes — SUPABASE_URL="${url}" key=${!!key}. ` +
        'Ajoute SUPABASE_URL et SUPABASE_ANON_KEY dans Vercel → Settings → Environment Variables.'
      )
    }

    _client = createClient(url, key)
  }
  return _client
}
