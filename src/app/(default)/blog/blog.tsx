'use client'

import {FaMailBulk} from "react-icons/fa";
import {FaPaperPlane} from "react-icons/fa6";
import {useEffect, useState} from "react";
import {Post} from "@/types";
import {fetchPosts, tags} from "@/app/(default)/blog/actions";
import RecentArticles from "@/components/Post/RecentArticles";

export default function BlogContent() {

    const [posts, setPosts] = useState<Post[]>([])
    useEffect(() => {
        fetchPosts().then(data => setPosts(data))
    }, [])

    return (
        <div className="container">
            <section className="flex flex-col lg:flex-row text-center lg:text-left gap-5 justify-between items-start">
                <div className="lg:max-w-[50%] flex flex-col items-center lg:items-start gap-3 mx-auto">
                    <span className="btn-primary-rounded">Nos Resources</span>
                    <h2 className="text-4xl">Nos Posts <span className="text-primary">Recents</span></h2>
                    <p>Si dessous, vous trouverez les meilleurs posts les plus recents que nous avons.</p>
                </div>
                <div className="text-white flex flex-col items-center gap-3 ads-container w-full lg:w-[45%] px-10 py-20 before:rounded-2xl rounded-2xl">
                    <FaMailBulk size={64} />
                    <h3>Rejoindre notre carnet d&apos;adresse</h3>
                    <p>Soyez le premier a recevoir nos posts en inbox</p>
                    <form action="#" method="GET" className="w-full">
                        <div className="flex gap-3 p-1 w-full bg-white rounded-lg">
                            <input type="email" name="email" placeholder="Adresse Email"
                                   className="w-full bg-transparent border-0 outline-none text-gray-600"/>
                            <button type="submit" className="bg-primary rounded-lg px-4"><FaPaperPlane/></button>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">Cliquez sur Envoyez nous autorisera à vous envoyer des messages.</p>
                    </form>
                </div>
            </section>
            <RecentArticles posts={posts} tags={['Tout', ...tags]}/>
        </div>
    );
}
