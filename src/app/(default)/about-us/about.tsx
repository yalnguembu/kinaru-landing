'use client'

import DownloadAppAds from "@/components/Ads/DownloadAppAds";
import RatingSection from "@/components/About/RatingSection";
import MainAboutSection from "@/components/About/MainAboutSection";
import AboutSliderSection from "@/components/About/AboutSliderSection";
import {firstCarouselImages} from "@/app/(default)/about-us/data";
import CompanyStatsSection from "@/components/About/CompanyStatsSection";
import OurValuesSection from "@/components/About/OurValuesSection";
import {motion} from "framer-motion";

import './about.scss'
import {makeToLeftVariant, makeToUpVariant} from "@/constants/variants.motion";

export default function AboutContent() {
    return (
        <div id="about" className="flex flex-col gap-10 my-10 overflow-hidden">
            {/* ABOUT */}
            <MainAboutSection />

            <AboutSliderSection images={firstCarouselImages} />

            {/*  */}
            <section>
                <div className="flex flex-col gap-5 text-center px-10">
                    <motion.h3 className="text-3xl" variants={makeToUpVariant()} initial='hidden' whileInView='visible'>
                        En savoir plus <span className="text-primary">sur nous</span>
                    </motion.h3>
                    <motion.p className="mx-auto max-w-[80%]" variants={makeToUpVariant({delay: 0.25})} initial='hidden' whileInView='visible'>
                        Kinaru est une application innovante dédiée à la gestion de locations immobilières. Elle permet aux utilisateurs
                        de rechercher des propriétés à louer et aux propriétaires de suivre la gestion de leurs bien en toute simplicité.
                    </motion.p>
                </div>
            </section>

            {/* COMPANY STATS */}
            <motion.div variants={makeToLeftVariant({delay: 0.2})} initial='hidden' whileInView='visible'>
                <CompanyStatsSection />
            </motion.div>


            {/* OUR VALUES */}
            <OurValuesSection />

            {/* RATING */}
            <motion.div variants={makeToUpVariant({delay: 0.2})} initial='hidden' whileInView='visible'>
                <RatingSection />
            </motion.div>


            <DownloadAppAds />
        </div>
    );
}