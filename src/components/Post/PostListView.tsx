import {Post} from "@/types";
import SinglePostView from "@/components/Post/SinglePostView";
import {makeToUpVariant} from "@/constants/variants.motion";
import {motion} from "framer-motion";

export type PostListViewProps = {
    posts: Post[],
}

export default function PostListView({posts}: PostListViewProps)
{
    return (
        <div className="flex flex-col gap-10">
            {posts.map((post, index) => {
                return (
                    <motion.div key={index} variants={makeToUpVariant({delay: 0.3})} initial='hidden' whileInView='visible'>
                        <SinglePostView post={post}/>
                    </motion.div>
                )
            })}
            {posts.length === 0 && (
                <p className="text-2xl font-bold ">There is no posts for this category.</p>
            )}
        </div>
    )
}