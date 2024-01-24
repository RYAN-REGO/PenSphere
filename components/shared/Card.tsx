import { IPost } from "@/lib/database/models/post.model";
import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { DeleteConfirmation } from "./DeleteConfirmation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type CardProps = {
  post: IPost; // Use colon instead of equals sign // caused an error
};

const Card = ({ post }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isPostCreator = userId === post.creator._id.toString();

  function calculateReadingTime(para: string) {
    const wordCount = para.split(/\s+/).length;
    const readingTimeMinutes = Math.ceil(wordCount / 200);

    return readingTimeMinutes;
  }

  const readTime = calculateReadingTime(post.description);
  return (
    <div className=" min-h-[280px] max-sm:min-h-[250px] w-[85%] overflow-hidden border-b transition-all hover:shadow-ld mt-[40px] flex-col max-sm:w-[92%]">
      {/* header */}
      <div className="w-full h-[10%] flex justify-between">
        {/* profile photo, name, description in small*/}
        <div className="flex gap-2 vertical-center">
          <Image
            src="/assets/icons/user.svg"
            alt="user"
            width={17}
            height={17}
          />
          <p className="text-[14px] tracking-wide font-lora">
            {post.creator.firstName} {post.creator.lastName}
          </p>
        </div>

        {/* date display */}
        <div className="vertical-center text-[14px] font-lora">
          {formatDateTime(post.createdAt).dateOnly}
        </div>
      </div>

      <div className="w-full h-[70%] flex flex-row">
        {/* title and description */}
        <Link href={`/posts/${post._id}`}>
          <div className="w-[96%] h-full flex flex-col gap-2 max-sm:w-[93%]">
            <div className="text-[20px] font-bold min-h-[24px] mt-3 font-lora tracking-wide line-clamp-2">
              {post.title}
            </div>
            <p className="text-[16px] font-lora font-normal max-h-[100px] line-clamp-4 max-sm:line-clamp-3">
              {post.description}
            </p>
          </div>
        </Link>
        {/* IMAGE */}
        <div className="min-w-[30%] h-full horizontal-center">
          <Link
            href={`/posts/${post._id}`}
            style={{ backgroundImage: `url(${post.imageUrl})` }}
            className="flex-center flex-grow bg-cover bg-center w-[90%] h-[75%] transition-all duration-300 mt-6"
          />
        </div>
      </div>

      <div className="w-full h-[15%] flex justify-between">
        <div className="flex gap-5">
          <div className="bg-grey-25 rounded-lg text-[13px] text-center min-h-[20px] px-2 py-1 h-[40px] vertical-center">
            {post.category.name}
          </div>
          <div className="text-[14px] h-full vertical-center">{`${readTime} min read`}</div>
        </div>
        <div className="flex gap-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src="/assets/icons/like.svg"
                  alt="user"
                  width={17}
                  height={17}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Like this post</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src="/assets/icons/savePost.svg"
                  alt="user"
                  width={17}
                  height={17}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Save this post</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="flex gap-4 max-sm:hidden">
            {isPostCreator && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href={`/posts/${post._id}/update`}
                      className="vertical-center max-sm:hidden"
                    >
                      <Image
                        src="/assets/icons/edit.svg"
                        alt="edit"
                        width={19}
                        height={20}
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Update this post</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {isPostCreator && <DeleteConfirmation postId={post._id} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
