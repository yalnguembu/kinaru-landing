"use client"

import { useEffect, useState } from "react"

export default function useScrollDetection()
{
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 0);
        }
        document.addEventListener('scroll', onScroll);

        return () => {
            document.removeEventListener('scroll', onScroll);
        }
    }, [])

    return {
        scrolled
    }
}