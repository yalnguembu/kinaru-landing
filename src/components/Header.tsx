'use client'

import Navbar from "./Navigation/Navbar";
import useScrollDetection from "@/hooks/useScrollDetection";
import Image from "next/image";

export default function Header()
{
    const {scrolled} = useScrollDetection()

    return (
        <header className={`h-[110px] fixed top-0 z-10 w-full flex shadow shadow-gray-400 ${scrolled ? ' animate-up-down' : ''}`}>
            <div className="container flex justify-between items-center">
                <h1><Image src="/assets/images/logos/png/logo-long.png" alt="logo" width={250} height={50} /></h1>
                <Navbar />
            </div>
        </header>
    )
}