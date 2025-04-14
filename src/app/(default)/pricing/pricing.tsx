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
                    Tarifs adaptés à vos besoins
                </motion.span>
                <motion.h2 className="text-4xl" variants={makeToUpVariant({delay: 0.4})} initial='hidden' whileInView='visible'>
                    Solutions <span className="text-primary">d&apos;abonnement</span> pour tous
                </motion.h2>
                <motion.p className="max-w-[700px]" variants={makeToUpVariant({delay: 0.5})} initial='hidden' whileInView='visible'>
                    Kinaru propose des forfaits adaptés à chaque profil : locataires, propriétaires et agences immobilières. 
                    De l&apos;offre gratuite aux fonctionnalités premium, trouvez la solution qui correspond à vos besoins immobiliers.
                </motion.p>
            </section>
            <motion.section className="bg-white rounded-xl px-5 py-10 overflow-x-scroll" variants={makeToUpVariant({delay: 0.7})} initial='hidden' whileInView='visible'>
                <PricingTable prices={prices} />
                <div className="text-center mt-8">
                    <p className="mb-2">Les paiements peuvent être effectués via MTN Mobile Money, Orange Money ou carte bancaire.</p>
                    <p className="mb-2">Vous avez une question? <Link href="/faq" className="text-primary underline font-bold">Consultez notre FAQ</Link></p>
                    <p>Besoin d&apos;une solution sur mesure? <Link href="/contact" className="text-primary underline font-bold">Contactez-nous</Link> pour un forfait personnalisé</p>
                </div>
            </motion.section>
            <motion.section className="bg-white rounded-xl p-5" variants={makeToUpVariant({delay: 0.8})} initial='hidden' whileInView='visible'>
                <h3 className="text-xl font-bold mb-4">Pourquoi choisir Kinaru?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 border rounded-lg">
                        <h4 className="font-bold mb-2">Pour les locataires</h4>
                        <p>Trouvez facilement votre logement idéal grâce à des filtres avancés, réservez des visites virtuelles et signez vos contrats directement depuis l&apos;application.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <h4 className="font-bold mb-2">Pour les propriétaires</h4>
                        <p>Gérez vos biens simplement, créez des contrats personnalisés, suivez vos revenus et communiquez efficacement avec vos locataires.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <h4 className="font-bold mb-2">Pour les agences</h4>
                        <p>Optimisez la gestion de votre portefeuille avec des outils multi-agents, des statistiques avancées et des campagnes marketing automatisées.</p>
                    </div>
                </div>
            </motion.section>
            <DownloadAppAds />
        </div>
    );
}
