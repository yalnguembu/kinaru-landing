import PostListView from "@/components/Post/PostListView";
import {Post} from "@/types";
import {useMemo, useState} from "react";
import {cn} from "@/libs/utils";
import {motion} from "framer-motion";
import {makeToUpVariant} from "@/constants/variants.motion";

export type RecentArticlesProps = {
    posts: Post[],
    tags: string[]
}

export default function RecentArticles({posts, tags}: RecentArticlesProps)
{
    const [currentTag, setCurrentTag] = useState(0)
    const filteredArticles = useMemo(() => {
        return currentTag === 0 ? posts : posts.filter((post) => post.tag === tags[currentTag])
    }, [currentTag, posts, tags])

    return (
        <motion.section variants={makeToUpVariant({delay: 0.2})} initial='hidden' whileInView='visible'>
            <div className="my-10">
                <h2 className="text-3xl">Recent <span className="text-primary">articles</span></h2>
                <hr className="my-2" />
                <div>
                    {tags.map((tag, index) => {
                        return (
                            <button key={index} className={cn(
                                'rounded-lg px-5 py-3 mr-5 hover:bg-primary hover:text-white transition duration-300',
                                currentTag === index ? 'bg-primary text-white' : 'bg-white text-gray-600')}
                                    onClick={() => setCurrentTag(index)}
                            >{tag}</button>
                        )
                    })}
                </div>
            </div>
            <PostListView posts={filteredArticles} />
        </motion.section>
    )
}