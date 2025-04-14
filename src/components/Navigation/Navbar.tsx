'use client'

import NavLink from "./NavLink";
import {cn} from "@/libs/utils";
import { motion } from "framer-motion";

export type NavbarProps = {
    collapsed?: boolean;
}

export default function Navbar({collapsed = true}: NavbarProps)
{
    const links = [
        { href: "/", label: "Accueil" },
        { href: "/about-us", label: "A Propos" },
        { href: "/reviews", label: "Revues" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
        { href: "/faq", label: "Faq" }
    ];
    
    // Variants pour les animations des liens
    const itemVariants = {
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        },
        closed: {
            opacity: 0,
            x: -20,
            transition: {
                duration: 0.2
            }
        }
    };
    
    // Variants pour le bouton de téléchargement
    const buttonVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        },
        closed: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.2
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                type: "spring",
                stiffness: 400
            }
        },
        tap: {
            scale: 0.95
        }
    };

    return (
        <nav className={cn(
            "navbar flex gap-3 lg:flex-row lg:items-center",
            collapsed ? '' : 'flex-col items-start'
        )}>
            <ul className={cn(
                "flex gap-5 lg:items-center text-black lg:flex-row",
                collapsed ? '' : 'flex-col items-start w-full'
            )}>
                {links.map((link, index) => (
                    <motion.li 
                        key={link.href} 
                        variants={!collapsed ? itemVariants : {}}
                        custom={index}
                        className={cn(
                            collapsed ? "" : "w-full"
                        )}
                    >
                        <NavLink href={link.href} className={cn(
                            collapsed ? "" : "block w-full py-2"
                        )}>
                            {link.label}
                        </NavLink>
                    </motion.li>
                ))}
            </ul>
            
            <motion.div
                variants={!collapsed ? buttonVariants : {}}
                whileHover={!collapsed ? "hover" : {}}
                whileTap={!collapsed ? "tap" : {}}
                className={collapsed ? "" : "w-full"}
            >
                <NavLink 
                    href="#" 
                    className={cn(
                        "btn-action",
                        !collapsed ? "block w-full text-center mt-2 mb-2" : ""
                    )}
                >
                    Télécharger
                </NavLink>
            </motion.div>
        </nav>
    )
}