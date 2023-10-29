'use client'

import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from '@nextui-org/react'
import Link from 'next/link'
import { useState } from 'react'
import { IconMessageCircle, IconHeartFilled, IconHeart, IconRepeat } from '@tabler/icons-react'
export function PostCard ({
  userName,
  avaterUrl,
  userFullName,
  content
}: {
  userName: string
  avaterUrl: string
  userFullName: string
  content: string
}) {
  const [isFollowed, setIsFollowed] = useState(false)

  return (
    <Card className='bg-transparent shadow-none hover:bg-slate-800 rounded-none cursor-pointer transition border-b border-white/20'>
      <CardHeader className='justify-between'>
        <div className='flex gap-2'>
          <Link href={`/${userName}`}>
            <Avatar radius='full' size='md' src={ avaterUrl } />
          </Link>
          <div className='flex flex-col gap-1 items-start justify-center'>
            <h4 className='text-small font-semibold leading-none text-default-600'>{ userFullName }</h4>
            <h5 className='text-small tracking-tight text-default-400'>@{ userName }</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? 'bg-transparent text-foreground border-default-200' : ''}
          color='primary'
          radius='full'
          size='sm'
          variant={isFollowed ? 'bordered' : 'solid'}
          onPress={() => { setIsFollowed(!isFollowed) }}
        >
          {isFollowed ? 'Unfollow' : 'Follow'}
        </Button>
      </CardHeader>
      <CardBody className='px-3 py-0 text-xs text-white'>
        <p>
          { content }
        </p>
      </CardBody>
      <CardFooter className='gap-3'>
        <button type="button">
          <IconMessageCircle className='w-5 h-5'/>
        </button>
        <button type="button">
          <IconRepeat className='w-5 h-5'/>
        </button>
        <button type="button">
          <IconHeart className='w-5 h-5'/>
        </button>
      </CardFooter>
    </Card>
  )
}
