import { getPostById } from "@/lib/actions/post.actions"
import { SearchParamProps } from "@/types"

const postDetails = async ({params : {id}} : SearchParamProps) => {
    const post = await getPostById(id);

    console.log(post);
  return (
    <div>
        details
    </div>
  )
}

export default postDetails;
