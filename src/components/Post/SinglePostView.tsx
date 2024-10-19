import {Post} from "@/types";
import Image from "next/image";
import {FaArrowRight} from "react-icons/fa6";
import UserAvatar from "@/components/Ui/UserAvatar";

export type SinglePostViewProps = {
    post: Post
}

export default function SinglePostView({post}: SinglePostViewProps)
{
    return (
        <article className="flex flex-col md:flex-row gap-10 justify-between bg-white p-7 rounded-xl">
            <Image
                src={post.image_url}
                alt={post.title}
                width={250}
                height={50}
                className="w-full md:w-fit"
            />
            <div className="flex flex-col items-start justify-between w-full">
                <span className="text-xs text-primary border border-primary rounded-xl px-3 py-0.5">{post.tag}</span>
                <a href="#" className="text-2xl font-bold hover:text-primary">{post.title}</a>
                <a href="#" className="text-primary font-bold">Read more <FaArrowRight className="inline"/></a>
            </div>
            <div className="flex flex-row-reverse md:flex-col w-full gap-3">
                <ul className="list-disc flex flex-col gap-1 ml-5">
                    <li>{(new Date(post.meta.created_at)).toLocaleString()}</li>
                    <li>{post.meta.comments} Comments</li>
                    <li>{post.meta.views} Views</li>
                </ul>
                <div className="flex-1">
                    <UserAvatar user={post.meta.author} />
                </div>
            </div>
        </article>
    )
}