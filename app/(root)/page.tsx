import Collection from "@/components/shared/Collection";
import TrendCollection from "@/components/shared/TrendCollection";
import { Separator } from "@/components/ui/separator";
import { getAllCategories } from "@/lib/actions/category.actions";
import { getAllPosts } from "@/lib/actions/post.actions";
import { ICategory } from "@/lib/database/models/category.model";
import Image from "next/image";

export default async function Home() {
  const posts = await getAllPosts({
    query: "",
    category: "",
    page: 1,
    limit: 6,
  });

  const categories = await getAllCategories();
  console.log(categories);
  //console.log(posts);
  return (
    <main className="w-full min-h-screen flex max-sm:flex-col">
      <section className="w-[65%] min-h-[200vh] border-r flex-col max-sm:w-full">
        <div className="z-40 h-[65px] w-full flex-center sticky top-0">
          {/* <div className="font-lora h-full w-[85%] text-[15px] flex underline underline-offset-[5px] items-center border-b bg-white gap-10 overflow-x-auto line-clamp-1">
              <p>For you</p>
              {categories.length > 0 && categories.map((category : ICategory) => (
                <p key={category._id} className="flex">{category.name}</p>
              ))}
          </div> */}
          <div className="font-lora h-full w-[730px] text-[15px] flex underline underline-offset-[5px] items-center border-b bg-white">
            <p>For you</p>
            {/* <div className="flex flex-row gap-10 flex-nowrap overflow-hidden w-[750px] h-full">
              {categories.length > 0 &&
                categories.map((category: ICategory) => (
                  <p key={category._id} className="flex min-w-[20%] flex-row">
                    {category.name}
                  </p>
                ))}
            </div> */}
          </div>
        </div>
        {/* <Separator className="sticky top-0"/> */}
        <div className="h-full w-full horizontal-center">
          <Collection
            data={posts?.data}
            emptyTitle="No Posts Found"
            emptyStateSubtext="Come back later"
            collectionType="All_Posts"
            limit={6}
            page={1}
            totalPages={2}
          />
        </div>
      </section>
      <section className="w-[35%] min-h-screen bg-primary-10 border-l flex flex-col max-sm:w-0">
        <div className="w-full min-h-[55vh] border-b flex flex-col horizontal-center">
          <div className="h-[65px] w-full flex items-center pl-[47px] tracking-wider text-[15px] gap-1 font-semibold">
            Trending Posts
            <Image
              src="/assets/icons/fire.svg"
              alt="fire"
              width={24}
              height={23}
              className="pb-[2px]"
            />
          </div>
          <div className="h-full w-[100%]">
            <TrendCollection data={posts?.data} />
          </div>
          {/* //the posts will be mapped here */}
        </div>
        <div className="w-full h-full flex flex-col">
          <div className="h-[65px] w-full flex items-center pl-7 tracking-wider text-[15px] gap-1 font-semibold">
            Recently Saved
            <Image
              src="/assets/icons/save.svg"
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
