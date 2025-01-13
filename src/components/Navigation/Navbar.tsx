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
                <li><NavLink href="/">Accueil</NavLink></li>
                <li><NavLink href="/about-us">A Propos</NavLink></li>
                {/* <li><NavLink href="/pricing">Tarifs</NavLink></li> */}
                <li><NavLink href="/reviews">Revues</NavLink></li>
                {/* <li><NavLink href="/blog">Blog</NavLink></li> */}
                <li><NavLink href="/contact">Contact</NavLink></li>
                <li><NavLink href="/faq">Faq</NavLink></li>
            </ul>
            {/* <NavLink href="#" className="btn-action">Télécharger</NavLink> */}
        </nav>
    )
}