'use client'

import PricingTable from "./pricing-table";
import Link from "next/link";
import DownloadAppAds from "@/components/Ads/DownloadAppAds";
import {motion} from "framer-motion";
import {makeToUpVariant} from "@/constants/variants.motion";
import { BsCurrencyExchange, BsShieldCheck, BsGear } from "react-icons/bs";

export default function PricingContent() {
    return (
        <div className="container flex flex-col gap-10">
            <section className="flex flex-col text-center items-center gap-5">
                <motion.span className="btn-primary-rounded" variants={makeToUpVariant({delay: 0.2})} initial='hidden' whileInView='visible'>
                    Tarifs adaptés à vos besoins
                </motion.span>
                <motion.h2 className="text-4xl md:text-5xl font-bold" variants={makeToUpVariant({delay: 0.4})} initial='hidden' whileInView='visible'>
                    Solutions <span className="text-primary">d&apos;abonnement</span> pour tous
                </motion.h2>
                <motion.p className="max-w-[700px] text-lg" variants={makeToUpVariant({delay: 0.5})} initial='hidden' whileInView='visible'>
                    Kinaru propose des forfaits adaptés à chaque profil : locataires, propriétaires et agences immobilières. 
                    De l&apos;offre gratuite aux fonctionnalités premium, trouvez la solution qui correspond à vos besoins immobiliers.
                </motion.p>
            </section>
            
            <motion.section 
                className="bg-white rounded-xl overflow-hidden shadow-md" 
                variants={makeToUpVariant({delay: 0.7})} 
                initial='hidden' 
                whileInView='visible'
            >
                <div className="px-4 py-10 md:px-8 overflow-x-auto">
                    <PricingTable />
                </div>
                
                <div className="text-center bg-gray-50 py-6 px-4 border-t">
                    <div className="max-w-3xl mx-auto">
                        <p className="mb-4 flex items-center justify-center gap-2">
                            <BsCurrencyExchange className="text-primary" />
                            <span>Les paiements peuvent être effectués via MTN Mobile Money, Orange Money ou carte bancaire.</span>
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                            <p className="flex items-center gap-2">
                                <BsShieldCheck className="text-primary" />
                                <span>Vous avez une question? <Link href="/faq" className="text-primary font-bold hover:underline">Consultez notre FAQ</Link></span>
                            </p>
                            <p className="flex items-center gap-2">
                                <BsGear className="text-primary" />
                                <span>Besoin d&apos;une solution sur mesure? <Link href="/contact" className="text-primary font-bold hover:underline">Contactez-nous</Link></span>
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>
            
            <motion.section 
                className="bg-white rounded-xl p-8 shadow-md" 
                variants={makeToUpVariant({delay: 0.8})} 
                initial='hidden' 
                whileInView='visible'
            >
                <h3 className="text-2xl font-bold mb-6 text-center">Pourquoi choisir Kinaru?</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow">
                        <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                            <span className="text-primary text-xl">👨‍👩‍👧</span>
                        </div>
                        <h4 className="font-bold text-xl mb-3">Pour les locataires</h4>
                        <p className="text-gray-700">Trouvez facilement votre logement idéal grâce à des filtres avancés, réservez des visites virtuelles et signez vos contrats directement depuis l&apos;application.</p>
                    </div>
                    <div className="p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow">
                        <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                            <span className="text-primary text-xl">🏘️</span>
                        </div>
                        <h4 className="font-bold text-xl mb-3">Pour les propriétaires</h4>
                        <p className="text-gray-700">Gérez vos biens simplement, créez des contrats personnalisés, suivez vos revenus et communiquez efficacement avec vos locataires.</p>
                    </div>
                    <div className="p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow">
                        <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                            <span className="text-primary text-xl">🏢</span>
                        </div>
                        <h4 className="font-bold text-xl mb-3">Pour les agences</h4>
                        <p className="text-gray-700">Optimisez la gestion de votre portefeuille avec des outils multi-agents, des statistiques avancées et des campagnes marketing automatisées.</p>
                    </div>
                </div>
            </motion.section>
            
            <DownloadAppAds />
        </div>
    );
}
