import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { AuthButtonServer } from './components/auth-button-server'
import { redirect } from 'next/navigation'
import { PostCard } from '@/app/components/post-card'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies })
  const { data: post } = await supabase
    .from('post')
    .select('*, users(*)')

  const { data: { session } } = await supabase.auth.getSession()
  console.log(session)
  if (session === null) {
    redirect('/login')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <AuthButtonServer />
      <span className="mt-24 w-1/2">
        {
          post?.map(post => {
            const {
              id,
              content,
              users
            } = post
            const {
              user_name: userName,
              name: userFullName,
              avatar_url: avaterUrl
            } = users
            return (
              <PostCard
                key={ id }
                userName={ userName }
                avaterUrl={ avaterUrl }
                userFullName={ userFullName }
                content={ content }
              />
            )
          })
        }
      </span>
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
    </main>
  )
}
