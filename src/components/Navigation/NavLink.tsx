"use client"

import { cn } from "@/libs/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";


export type NavLinkProps = LinkProps & PropsWithChildren<{
    className?: string;
}>;

export default function NavLink({children, href, className, ...props}: NavLinkProps)
{
    const pathname = usePathname()
    const isActive = pathname.toLocaleLowerCase() === href.toString().toLocaleLowerCase()

    return (
        <Link href={href} className={cn(className, isActive ? 'active' : '')} {...props} >{children}</Link>
    )
}