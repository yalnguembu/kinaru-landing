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
import { motion, AnimatePresence } from "framer-motion";

export default function Header()
{
    const {scrolled} = useScrollDetection()
    const [collapsed, setCollapsed] = useState(true)

    const onCollapseBtnClicked = useCallback(() => {
        setCollapsed(prev => !prev);
    }, [])

    useEffect(() => {
        const onClick = () => {
            if (!collapsed) {
                setCollapsed(true);
            }
        }
        const links = document.querySelectorAll('a')
        links.forEach((link) => link.addEventListener('click', onClick))
        return () => {
            links.forEach((link) => link.removeEventListener('click', onClick))
        }
    }, [collapsed]);

    // Variants pour les animations du bouton
    const buttonVariants = {
        bars: { rotate: 0, opacity: 1 },
        times: { rotate: 90, opacity: 0 }
    };

    // Variants pour les animations du menu mobile
    const menuVariants = {
        open: { 
            height: "auto", 
            opacity: 1,
            y: 0,
            transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 24,
                staggerChildren: 0.07,
                delayChildren: 0.1
            }
        },
        closed: { 
            height: 0, 
            opacity: 0,
            y: -20,
            transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 24,
                staggerChildren: 0.05,
                staggerDirection: -1,
                when: "afterChildren"
            }
        }
    };

    return (
        <header className={`fixed top-0 z-20 w-full flex shadow shadow-gray-400 bg-white ${scrolled ? 'animate-up-down' : ''}`}>
            <div className={cn(
                "min-h-[80px] container grid grid-cols-2 justify-between items-center",
                "lg:min-h-[110px] lg:flex",
                collapsed ? '' : 'pt-3'
            )}>
                <h1 className="w-fit flex items-start">
                    <Link href="/"><Image src={logo} alt="logo" width={250} height={50} className="" priority /></Link>
                </h1>
                
                <motion.button 
                    onClick={onCollapseBtnClicked} 
                    className="flex lg:hidden justify-end items-center"
                    aria-label={collapsed ? "Ouvrir le menu" : "Fermer le menu"}
                    whileTap={{ scale: 0.9 }}
                >
                    <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden">
                        <motion.div
                            animate={collapsed ? "bars" : "times"}
                            variants={buttonVariants}
                            transition={{ duration: 0.3 }}
                        >
                            <FaBars size={28} />
                        </motion.div>
                        
                        <motion.div
                            animate={collapsed ? "times" : "bars"}
                            variants={buttonVariants}
                            transition={{ duration: 0.3 }}
                            className="absolute"
                        >
                            <FaTimes size={28} />
                        </motion.div>
                    </div>
                </motion.button>
                
                <AnimatePresence>
                    {!collapsed && (
                        <motion.div 
                            className={cn(
                                "mobile-nav-container col-span-2 bg-white rounded-xl px-5 py-4 mb-5 shadow",
                                "overflow-hidden lg:bg-transparent lg:h-auto lg:overflow-visible lg:block lg:opacity-100",
                                "lg:shadow-none lg:p-0 lg:mb-0 lg:transform-none"
                            )}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                        >
                            <Navbar collapsed={collapsed} />
                        </motion.div>
                    )}
                </AnimatePresence>
                
                <div className="hidden lg:block">
                    <Navbar collapsed={true} />
                </div>
            </div>
        </header>
    )
}