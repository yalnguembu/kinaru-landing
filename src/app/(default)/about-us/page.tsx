
import DownloadAppAds from "@/components/Ads/DownloadAppAds";
import MeetTeamSection from "@/components/About/MeetTeamSection";
import RatingSection from "@/components/About/RatingSection";
import MainAboutSection from "@/components/About/MainAboutSection";
import AboutSliderSection from "@/components/About/AboutSliderSection";
import {firstCarouselImages} from "@/app/(default)/about-us/data";
import CompanyStatsSection from "@/components/About/CompanyStatsSection";
import OurValuesSection from "@/components/About/OurValuesSection";

import {Metadata} from "next";
import './about.scss'

export const metadata: Metadata = {
    title: 'A propos | Kinaru',
    description: 'Decouvrez plus a propos de nous'
}

export default function About() {
  return (
      <div id="about" className="flex flex-col gap-10 my-10">
          {/* ABOUT */}
            <MainAboutSection />

          <AboutSliderSection images={firstCarouselImages} />

          {/*  */}
          <section>
            <div className="flex flex-col gap-5 text-center px-10">
                <h3 className="text-3xl">En savoir plus <span className="text-primary">sur nous</span></h3>
                <p className="mx-auto max-w-[80%]">
                    Kinaru est une application innovante dédiée à la gestion de locations immobilières. Elle permet aux utilisateurs
                    de rechercher des propriétés à louer et aux propriétaires de suivre la gestion de leurs bien en toute simplicité.
                </p>
            </div>
        </section>

          {/* COMPANY STATS */}
            <CompanyStatsSection />

          {/* OUR VALUES */}
            <OurValuesSection />

          {/* RATING */}
          <RatingSection />

          {/* MEET OUR TEAM */}
          <MeetTeamSection />

          <DownloadAppAds />
      </div>
  );
}