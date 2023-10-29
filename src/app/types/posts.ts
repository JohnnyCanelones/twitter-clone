import { type Database } from '@/app/types/database'

type PostsEntity = Database['public']['Tables']['post']['Row']
type UsersEntity = Database['public']['Tables']['users']['Row']

export type Post = PostsEntity & {
  users: UsersEntity
}
