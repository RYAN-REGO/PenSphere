import { getPostById } from "@/lib/actions/post.actions"
import { SearchParamProps } from "@/types"

const postDetails = async ({params : {id}} : SearchParamProps) => {
    const post = await getPostById(id);

    console.log(post);
  return (
    <main className="w-full min-h-screen flex-center">
        <section className="w-[60%] min-h-screen mt-[40px] flex flex-col">
            <div className="text-[42px] font-bold w-full horizontal-center px-5 font-notoSans">{post.title}</div>
            
        </section>
    </main>
  )
}

export default postDetails;
