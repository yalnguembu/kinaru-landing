'use client'

import Navbar from "./Navigation/Navbar";
import useScrollDetection from "@/hooks/useScrollDetection";
import Image from "next/image";
import logo from '@/assets/logo_long.png';
import {useCallback, useEffect, useState} from "react";
import {FaBars} from "react-icons/fa6";
import {FaTimes} from "react-icons/fa";
import Link from "next/link";
import {cn} from "@/libs/utils";

export default function Header()
{
    const {scrolled} = useScrollDetection()
    const [collapsed, setCollapsed] = useState(true)

    const onCollapseBtnClicked = useCallback(() => {
        setCollapsed(prev => !prev)
    }, [])

    useEffect(() => {
        const onClick = () => setCollapsed(true)
        const links = document.querySelectorAll('a')
        links.forEach((link) => link.addEventListener('click', onClick))
        return () => {
            links.forEach((link) => link.removeEventListener('click', onClick))
        }
    }, []);

    return (
        <header className={` fixed top-0 z-20 w-full flex shadow shadow-gray-400 ${scrolled ? ' animate-up-down' : ''}`}>
            <div className={cn(
                "min-h-[80px] container grid grid-cols-2 justify-between items-center",
                "lg:min-h-[110px] lg:flex",
                collapsed ? '' : 'pt-3'
            )}>
                <h1 className="w-fit flex items-start">
                    <Link href="/"><Image src={logo} alt="logo" width={250} height={50} className="" /></Link>
                </h1>
                <button onClick={onCollapseBtnClicked} className="flex lg:hidden">
                    <span className="flex-1" />
                    {!collapsed ? <FaTimes size={32}/> : <FaBars size={32}/> }
                </button>
                <div className={cn(
                    "transition duration-200 lg:bg-transparent lg:h-auto lg:overflow-visible lg:block",
                    "lg:shadow-none lg:p-0 lg:mb-0",
                    collapsed ? "hidden h-0 overflow-hidden" : "bg-white col-span-2 rounded-xl px-5 py-2 mb-5 shadow",
                )}>
                    <Navbar collapsed={collapsed} />
                </div>
            </div>
        </header>
    )
}