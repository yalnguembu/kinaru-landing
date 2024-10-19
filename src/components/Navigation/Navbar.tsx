'use client'

import NavLink from "./NavLink";
import {cn} from "@/libs/utils";

export type NavbarProps = {
    collapsed?: boolean
}

export default function Navbar({collapsed = true}: NavbarProps)
{
    return (
        <nav className={cn(
            "navbar flex gap-3 lg:flex-row lg:items-center",
            collapsed ? '' : 'flex-col items-start'
        )}>
            <ul className={cn(
                "flex gap-5 lg:items-center text-black lg:flex-row",
                collapsed ? '' : 'flex-col items-start'
            )}>
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about-us">About Us</NavLink></li>
                <li><NavLink href="/pricing">Pricing</NavLink></li>
                <li><NavLink href="/reviews">Reviews</NavLink></li>
                <li><NavLink href="/blog">Blog</NavLink></li>
                <li><NavLink href="/contact">Contact</NavLink></li>
                <li><NavLink href="/faq">Faq</NavLink></li>
            </ul>
            <NavLink href="#" className="btn-action">Download</NavLink>
        </nav>
    )
}