import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { AuthButton } from './components/auth-button'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies })
  const { data: post } = await supabase.from('post').select('*')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Hola Twitter
        <AuthButton />
        <pre>
          { JSON.stringify(post, null, 2)}
        </pre>
    </main>
  )
}
