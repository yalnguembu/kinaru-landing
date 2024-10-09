import {Post} from "@/types";
import SinglePostView from "@/components/Post/SinglePostView";

export type PostListViewProps = {
    posts: Post[],
}

export default function PostListView({posts}: PostListViewProps)
{
    return (
        <div className="flex flex-col gap-10">
            {posts.map((post, index) => {
                return (
                    <SinglePostView post={post} key={index} />
                )
            })}
            {posts.length === 0 && (
                <p className="text-2xl font-bold ">There is no posts for this category.</p>
            )}
        </div>
    )
}