import { getPostById } from "@/lib/actions/post.actions";
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import Image from "next/image";

const postDetails = async ({ params: { id } }: SearchParamProps) => {
  const post = await getPostById(id);

  function calculateReadingTime(para: string) {
    const wordCount = para.split(/\s+/).length;
    const readingTimeMinutes = Math.ceil(wordCount / 200);

    return readingTimeMinutes;
  }

  const readTime = calculateReadingTime(post.description);

  console.log(post);
  return (
    <main className="w-full min-h-screen flex-center">
      <section className="w-[60%] min-h-screen mt-[40px] flex flex-col gap-2 max-sm:w-[90%]">
        <div className="text-[42px] font-bold w-full horizontal-center font-lora max-sm:text-[32px]">
          {post.title}
        </div>
        <div className="h-[90px] w-full flex vertical-center gap-3 border-b">
          <div className="p-0">
            <Image
              src="/assets/icons/user.svg"
              alt="user"
              width={35}
              height={35}
            />
          </div>
          <div className="flex-col">
            <div className="text-[16px] tracking-wide font-medium">
              {post.creator.firstName} {post.creator.lastName}
            </div>
            <div className="flex">
              <div className="text-[14px] text-grey-600">{`${readTime} min read`}</div>
              <div className="text-[14px] text-grey-600">&nbsp; | &nbsp;</div>
              <div className="text-[14px] text-grey-600">
                {formatDateTime(post.createdAt).dateOnly}
              </div>
            </div>
          </div>
        </div>
        <div className="h-[50px] w-full border-b"></div>

        {/* //headings all done */}
        {/* image and desciption to be folowed */}
        <div className="w-full min-h-[20vh] mt-10">
          <Image
            src={post.imageUrl}
            alt="hero image"
            width={1000}
            height={1000}
            className="h-full min-h-[300px] object-cover object-center"
          />
        </div>
        <div className="w-full min-h-[30vh] font-lora text-justify mt-7">
        
          {post.description}
        </div>
        <div className="w-full h-[15vh] flex gap-2 mt-5">
          <div className="bg-gray-100 min-w-[100px] h-[40px] flex-center line-clamp-1 rounded-2xl font-lora tracking-wider px-2">
            {post.category.name}
          </div>
        </div>
      </section>
    </main>
  );
};

export default postDetails;
