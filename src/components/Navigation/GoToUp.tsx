"use client"

import useScrollDetection from "@/hooks/useScrollDetection"
import { FaAngleUp } from "react-icons/fa6"

export default function GoToUp()
{
    const {scrolled} = useScrollDetection()

    return (
        <div className={` ${scrolled ? 'fixed' : 'hidden'} z-10 right-5 bottom-5 shadow shadow-gray-500 rounded-full bg-primary text-white p-2 animate-bounce`}>
            <a href="#" className=""><FaAngleUp size={26} /></a>
        </div>
    )
}