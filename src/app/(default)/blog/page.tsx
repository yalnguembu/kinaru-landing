'use client'

import {FaMailBulk} from "react-icons/fa";
import {FaPaperPlane} from "react-icons/fa6";
import {useEffect, useState} from "react";
import {Post} from "@/types";
import {fetchPosts, tags} from "@/app/(default)/blog/actions";
import RecentArticles from "@/components/Post/RecentArticles";

export default function Blog() {

    const [posts, setPosts] = useState<Post[]>([])
    useEffect(() => {
        fetchPosts().then(data => setPosts(data))
    }, [])

    return (
      <div className="container">
        <section className="flex gap-5 justify-between items-start">
            <div className="max-w-[50%] flex flex-col gap-3">
                <span className="btn-primary-rounded">Our Resources</span>
                <h2 className="text-4xl">Latest <span className="text-primary">blog posts</span></h2>
                <p>Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industry&apos;s standard text ever since.</p>
            </div>
            <div className="text-white flex flex-col items-center gap-3 ads-container w-[45%] px-10 py-20 before:rounded-2xl rounded-2xl">
                <FaMailBulk size={64} />
                <h3>Join our mailing list</h3>
                <p>Be the first to receive all latest posts in your inbox</p>
                <form action="#" method="GET" className="w-full">
                    <div className="flex gap-3 p-1 w-full bg-white rounded-lg">
                        <input type="email" name="email" placeholder="Enter your email"
                               className="w-full bg-transparent border-0 outline-none text-gray-600"/>
                        <button type="submit" className="bg-primary rounded-lg px-4"><FaPaperPlane/></button>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">By clicking send link you agree to receive message.</p>
                </form>
            </div>
        </section>
          <RecentArticles posts={posts} tags={['All', ...tags]}/>
      </div>
  );
}
