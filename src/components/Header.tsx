'use client'

import Navbar from "./Navigation/Navbar";
import useScrollDetection from "@/hooks/useScrollDetection";
import Image from "next/image";
import logo from '@/assets/logo_long.png';

export default function Header()
{
    const {scrolled} = useScrollDetection()

    return (
        <header className={`h-[110px] fixed top-0 z-20 w-full flex shadow shadow-gray-400 ${scrolled ? ' animate-up-down' : ''}`}>
            <div className="container flex justify-between items-center">
                <h1><Image src={logo} alt="logo" width={250} height={50} /></h1>
                <Navbar />
            </div>
        </header>
    )
}