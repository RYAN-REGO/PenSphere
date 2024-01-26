import { IPost } from '@/lib/database/models/post.model'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type miniCardProps= { 
    post : IPost,
}

const MiniCard = ({post} : miniCardProps) => {
    console.log(post);
  return (
    <div className='h-[75px] bg-grey-25 w-[80%] mt-4 mb-4 flex-col border-b'>
        {/* heading section includes user photo and username */}
        <div className="flex gap-2">
          <Image
            src="/assets/icons/user.svg"
            alt="user"
            width={17}
            height={17}
          />
          <p className="text-[14px] tracking-wider font-lora font-semibold">
            {post.creator.firstName} {post.creator.lastName}
          </p>
        </div>
        {/* title of the post */}
        <Link href={`/posts/${post._id}`}>
        <div className="font-lora line-clamp-2 font-bold text-[16px]">{post.title}</div>
        </Link>
    </div>
  )
}

export default MiniCard
