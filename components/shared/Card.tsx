import { IPost } from '@/lib/database/models/post.model';
import Link from 'next/link';

type CardProps = {
    post: IPost;  // Use colon instead of equals sign // caused an error
};

const Card = ({ post }: CardProps) => {
    return (
        <div className=' min-h-[280px]  w-[85%] overflow-hidden border-b transition-all hover:shadow-ld mt-[40px] flex-col max-sm:w-[92%]'>
            <div className="bg-primary-500 w-full h-[15%] flex justify-between"></div>
            <Link href={`/posts/${post._id}`}>
            <div className="w-full h-[70%] flex flex-row">
                {/* title and description */}
                <div className="w-[69%] h-full flex flex-col gap-2">
                    <div className="text-[20px] font-bold min-h-[24px] mt-3 font-notoSans tracking-wide line-clamp-2">
                        {post.title}
                    </div>
                    <p className='text-[16px] font-mulish font-medium max-h-[100px] line-clamp-4 max-sm:line-clamp-3'>
                        {post.description}
                    </p>
                </div>

                {/* IMAGE */}
                <div className="w-[30%] h-full"></div>
            </div>
            </Link>
            <div className="bg-primary-500 w-full h-[15%]"></div>
        </div>
        
    );
};

export default Card;
