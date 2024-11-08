'use client'

import PricingTable from "@/components/Pricing/PricingTable";
import {useEffect, useState} from "react";
import type {Pricing} from "@/types";
import {fetchPricings} from "@/app/(default)/pricing/actions";
import Link from "next/link";
import DownloadAppAds from "@/components/Ads/DownloadAppAds";
import {motion} from "framer-motion";
import {makeToUpVariant} from "@/constants/variants.motion";

export default function PricingContent() {
    const [prices, setPrices] = useState<Pricing[]>([])

    useEffect(() => {
        fetchPricings().then(data => setPrices(data))
    }, [])

    return (
        <div className="container flex flex-col gap-10">
            <section className="flex flex-col text-center items-center gap-3">
                <motion.span className="btn-primary-rounded" variants={makeToUpVariant({delay: 0.2})} initial='hidden' whileInView='visible'>
                    Tarifs
                </motion.span>
                <motion.h2 className="text-4xl" variants={makeToUpVariant({delay: 0.4})} initial='hidden' whileInView='visible'>
                    Le meilleur <span className="text-primary">forfait d&apos;abonnement</span>
                </motion.h2>
                <motion.p className="hidden max-w-[500px]" variants={makeToUpVariant({delay: 0.5})} initial='hidden' whileInView='visible'>
                    Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industry&apos;s standard dummy text ever since.
                </motion.p>
            </section>
            <motion.section className="bg-white rounded-xl px-5 py-10 overflow-x-scroll" variants={makeToUpVariant({delay: 0.7})} initial='hidden' whileInView='visible'>
                <PricingTable prices={prices} />
                <div className="text-center mt-5">
                    <p>Vous avez une question? <Link href="/faq" className="text-primary underline font-bold">Lisez le FAQ</Link></p>
                    <p>Vous ne savez pas quoi choisir ? <Link href="/contact" className="text-primary underline font-bold">Contactez nous</Link> pour un forfait personnaliser</p>
                </div>
            </motion.section>
            <DownloadAppAds />
        </div>
    );
}
