import PostForm from "@/components/shared/PostForm";
import { auth } from "@clerk/nextjs";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  console.log(userId);
  return (
    <main className="min-h-screen">
      <>
        <section className="bg-primary-20 flex-center  tracking-wide bg-dotted-pattern bg-cover bg-center h-[100px] w-full">
          <h3 className="h3-semibold text-center">
            Create a post..<span className="animate-blink w-[1px]">|</span>
          </h3>
        </section>

        <div className="wrapper my-8">
          <PostForm userId={userId} type="Create"/>
        </div>
      </>
    </main>
  );
};

export default CreateEvent;
