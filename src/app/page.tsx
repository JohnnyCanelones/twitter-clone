import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { AuthButtonServer } from './components/auth-button-server'
import { redirect } from 'next/navigation'
import PostList from './components/post-list'
import { type Database } from './types/database'
import { ComposePost } from './components/compose-post'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: posts } = await supabase
    .from('post')
    .select('*, users(*)')
    .order('created_at', { ascending: false })

  const { data: { session } } = await supabase.auth.getSession()
  if (session === null) {
    redirect('/login')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section className='w-full max-w-[800px] mx-auto h-full border-l border-r border-white/20 min-h-screen'>
        <ComposePost userAvatarUrl={ session.user?.user_metadata?.avatar_url } userName={ session.user?.user_metadata?.username } />
        <PostList posts={posts} />
      </section>
        <AuthButtonServer />
    </main>
  )
}
