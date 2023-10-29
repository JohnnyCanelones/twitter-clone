import { PostCard } from '@/app/components/post-card'
import { type Post } from '../types/posts'

export default async function PostList ({ posts }: { posts: Post[] | null }) {
  return (
    <span className="mt-24 w-1/2">
      {
        posts?.map(post => {
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
  )
}
