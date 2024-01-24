import { IPost } from '@/lib/database/models/post.model';
import Link from 'next/link';

type CardProps = {
    post: IPost;  // Use colon instead of equals sign // caused an error
};

const Card = ({ post }: CardProps) => {
    return (
        <div className=' min-h-[280px] max-sm:min-h-[250px] w-[85%] overflow-hidden border-b transition-all hover:shadow-ld mt-[40px] flex-col max-sm:w-[92%]'>
            <div className="bg-primary-500 w-full h-[15%] flex justify-between"></div>
            
            <div className="w-full h-[70%] flex flex-row">
                {/* title and description */}
                <Link href={`/posts/${post._id}`}>
                <div className="w-[96%] h-full flex flex-col gap-2 max-sm:w-[93%]">
                    <div className="text-[20px] font-bold min-h-[24px] mt-3 font-notoSans tracking-wide line-clamp-2">
                        {post.title}
                    </div>
                    <p className='text-[16px] font-mulish font-medium max-h-[100px] line-clamp-4 max-sm:line-clamp-3'>
                        {post.description}
                    </p>
                </div>
                </Link>
                {/* IMAGE */}
                <div className="min-w-[30%] h-full horizontal-center">
                    <Link
                        href={`/posts/${post._id}`}
                        style={{backgroundImage : `url(${post.imageUrl})`}}
                        className='flex-center flex-grow bg-cover bg-center w-[90%] h-[75%] transition-all duration-300 mt-6'
                    />
                </div>
            </div>
            
            <div className="bg-primary-500 w-full h-[15%]"></div>
        </div>
        
    );
};

export default Card;
