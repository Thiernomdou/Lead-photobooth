import { createClient } from '@supabase/supabase-js'

// Utilise la service_role key si disponible (bypasse RLS),
// sinon fallback sur la clé anon (nécessite des policies RLS permissives)
export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY!,
)
