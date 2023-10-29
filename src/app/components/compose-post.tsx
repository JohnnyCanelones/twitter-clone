'use client'
import Link from 'next/link'
import { Avatar } from '@nextui-org/react'
import { addPost } from '@/app/actions/add-post-action'
import { useRef } from 'react'

export function ComposePost ({
  userName,
  userAvatarUrl
}: {
  userName: string
  userAvatarUrl: string
}) {
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <form ref={ formRef }
      action={async (formData: FormData) => {
        await addPost(formData)
        formRef.current?.reset()
      }} className='flex flex-row p-3 border-b  border-white/20'>
      <Link href={`/${userName}`} className='mr-4'>
        <Avatar radius='full' size='md' src={ userAvatarUrl } />
      </Link>
      <div className="flex flex-1 flex-col gap-y-4">
      <textarea
          name="content"
          rows={4}
          className=' w-full text-2xl bg-black placeholder-gray-500'
          placeholder='¡¿Qué está pasando!?'
        ></textarea>
        <button className='bg-sky-500 font-bold rounded-full px-5 py-2 self-end'>
          Postear
        </button>
      </div>
    </form>
  )
}
