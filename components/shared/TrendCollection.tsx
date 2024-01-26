import { IPost } from "@/lib/database/models/post.model"
import MiniCard from "./MiniCard";

type TrendCollectionProps = {
    data : IPost[];
}

const TrendCollection = ({data} : TrendCollectionProps) => {
  return (
    <>
        {
            data.slice(0, 3).map((post) => {
                return (
                    <li key={post._id} className='flex justify-center'> 
                        <MiniCard post={post}/>
                    </li>
                );
            })
        }
    </>
  )
}

export default TrendCollection
