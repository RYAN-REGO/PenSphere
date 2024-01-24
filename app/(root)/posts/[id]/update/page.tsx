import PostForm from "@/components/shared/PostForm";
import { getPostById } from "@/lib/actions/post.actions";
import { auth } from "@clerk/nextjs";

type UpdatePostParams = {
  params : {
    id : string
  }
}

const UpdatePost = async ({params : {id}} : UpdatePostParams) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const post = await getPostById(id);

  //we have the userId and the post that has to be updated

  return (
    <main className="min-h-screen">
      <>
        <section className="bg-primary-20 flex-center  tracking-wide bg-dotted-pattern bg-cover bg-center h-[100px] w-full">
          <h3 className="h3-semibold text-center">
            Update a post..<span className="animate-blink w-[1px]">|</span>
          </h3>
        </section>

        <div className="wrapper my-8">
          <PostForm 
          userId={userId} 
          type="Update"
          post={post}
          postId={post._id}/>
        </div>
      </>
    </main>
  );
};

export default UpdatePost;
