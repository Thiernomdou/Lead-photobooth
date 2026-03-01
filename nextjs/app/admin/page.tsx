import type { Metadata } from 'next'
import { supabaseAdmin } from '@/lib/supabase-admin'
import AdminDashboard from '@/components/admin/AdminDashboard'

export const dynamic = 'force-dynamic' // toujours données fraîches

export const metadata: Metadata = {
  title: 'Admin — PhotoBooth',
  robots: { index: false, follow: false },
}

export default async function AdminPage() {
  const { data: leads, error } = await supabaseAdmin
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white border border-red-200 p-6 max-w-md text-center">
          <p className="text-sm font-semibold text-red-700 mb-1">Erreur Supabase</p>
          <p className="text-xs text-gray-500">{error.message}</p>
        </div>
      </div>
    )
  }

  return <AdminDashboard leads={leads ?? []} />
}
