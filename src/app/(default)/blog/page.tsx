import BlogContent from "@/app/(default)/blog/blog";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Blog | Kinaru',
    description: 'Discover our latest articles'
}

export default function Blog()
{
    return (
        <BlogContent />
    )
}
