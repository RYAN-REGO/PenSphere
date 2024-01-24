import { IPost } from '@/lib/database/models/post.model'
import Image from 'next/image'
import React from 'react'
import Card from './Card'

type CollectionProps = {
    data : IPost[],
    emptyTitle : string,
    emptyStateSubtext : string,
    limit : number,
    page : number | string,
    totalPages ?: number,
    urlParamName ?: string
    collectionType : 'All_Posts' | 'My_Posts'
}

const Collection = ({data, emptyTitle, emptyStateSubtext, collectionType, limit, page, totalPages} : CollectionProps) => {
  return (
    <>{
        data.length > 0 ? (
            <div className="flex flex-col gap-10 w-full">
                <ul className='grid grid-cols-1 gap-3 w-full justify-center'>
                    {data.map((post) => {
                        return(
                            <li key={post._id} className='flex justify-center'> 
                                <Card post={post}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        ) : (
            <div className="flex flex-col gap-5 w-full h-[50vh] flex-center">
                <div className="flex gap-2 flex-row">
                <h1 className='h5-bold tracking-wide'>{emptyTitle} </h1>
                <Image
                    src='/assets/icons/warning.svg'
                    alt="warning"
                    width={36}
                    height={36}
                />
                </div>
                <p>{emptyStateSubtext}</p>
            </div>
        )
    }</>
  )
}

export default Collection
