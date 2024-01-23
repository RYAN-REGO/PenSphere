import Collection from "@/components/shared/Collection";
import { Separator } from "@/components/ui/separator";
import { getAllPosts } from "@/lib/actions/post.actions";
import Image from "next/image";

export default async function Home() {

  const posts = await getAllPosts({
    query : '',
    category : '',
    page : 1,
    limit : 6,
  })

  console.log(posts);
  return (
    <main className="w-full min-h-screen flex max-sm:flex-col">
      <section className="w-[65%] min-h-[200vh] border-r flex-col">
        <div className="z-40 h-[65px] w-full flex-center sticky top-0">
          <div className="h-full w-[85%] flex underline underline-offset-[5px] items-center border-b bg-white">
            For you
          </div>
        </div>
        {/* <Separator className="sticky top-0"/> */}
        <div className="h-full w-full horizontal-center">
          <Collection
            data = {posts?.data}
            emptyTitle = "No Posts Found"
            emptyStateSubtext = "Come back later"
            collectionType = "All_Posts"
            limit = {6}
            page = {1}
            totalPages = {2}
          />
        </div>
      </section>
      <section className="w-[35%] min-h-screen bg-primary-20 border-l flex flex-col">
        <div className="w-full min-h-[55vh] border-b flex flex-col">
          <div className="h-[65px] w-full flex items-center pl-7 tracking-wider text-[15px] gap-1 font-semibold">
            Trending Posts
            <Image
              src="/assets/icons/fire.svg"
              alt="fire"
              width={24}
              height={23}
              className="pb-[2px]"
            />
          </div>

          {/* //the posts will be mapped here */}
        </div>
        <div className="w-full h-full flex flex-col">
          <div className="h-[65px] w-full flex items-center pl-7 tracking-wider text-[15px] gap-1 font-semibold">
            Recently Saved
            <Image
                src='/assets/icons/save.svg'
                alt="save"
                width={22}
                height={23}
            />
          </div>

            {/* //Map the recently saved items here */}
        </div>
      </section>
    </main>
  );
}
