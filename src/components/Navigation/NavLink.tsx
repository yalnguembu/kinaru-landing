'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLProps, forwardRef } from "react";
import { cn } from "@/libs/utils";
import { motion } from "framer-motion";

interface NavLinkProps extends HTMLProps<HTMLAnchorElement> {
    href: string;
    exact?: boolean;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
    ({ href, exact = false, className, children, ...props }, ref) => {
        const pathname = usePathname();
        const isActive = exact 
            ? pathname === href 
            : href !== '/' 
                ? pathname.startsWith(href) 
                : pathname === '/';
                
        const isButton = className?.includes('btn-action');

        return (
            <Link
                href={href}
                ref={ref}
                className={cn(
                    "relative font-medium group",
                    isActive ? "text-primary" : "text-gray-700",
                    className
                )}
                {...props}
            >
                {children}
                
                {!isButton && (
                    <motion.span 
                        className="absolute left-0 bottom-0 h-[2px] bg-primary"
                        initial={{ width: isActive ? "100%" : "0%" }}
                        animate={{ width: isActive ? "100%" : "0%" }}
                        whileHover={{ width: "100%" }}
                        transition={{ 
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                    />
                )}
            </Link>
        );
    }
);

NavLink.displayName = "NavLink";

export default NavLink;