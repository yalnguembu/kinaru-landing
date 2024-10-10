
import DownloadAppAds from "@/components/Ads/DownloadAppAds";
import MeetTeamSection from "@/components/About/MeetTeamSection";
import RatingSection from "@/components/About/RatingSection";
import InformationSection from "@/components/About/InformationSection";
import MainAboutSection from "@/components/About/MainAboutSection";
import AboutSliderSection from "@/components/About/AboutSliderSection";
import {firstCarouselImages} from "@/app/(default)/about-us/data";
import CompanyStatsSection from "@/components/About/CompanyStatsSection";
import OurValuesSection from "@/components/About/OurValuesSection";
import ProcessSection from "@/components/About/ProcessSection";

import {Metadata} from "next";
import './about.scss'

export const metadata: Metadata = {
    title: 'About Us | Kinaru',
    description: 'Learn more about us'
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
                <h3 className="text-3xl"><span className="text-primary block">Our story</span> behind our success & achievement</h3>
                <p className="mx-auto max-w-[80%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry&apos;s standard dummy text ever since the when an unknown print er took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining esse ntially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing soft ware like Aldus PageMaker including versions of lorem Ipsum.</p>
            </div>
        </section>

          {/* COMPANY STATS */}
            <CompanyStatsSection />

          {/* OUR VALUES */}
            <OurValuesSection />
          {/* PROCESS */}
            <ProcessSection />
          {/* INFORMATION */}
            <InformationSection />

          {/* RATING */}
          <RatingSection />

          {/* MEET OUR TEAM */}
          <MeetTeamSection />

          <DownloadAppAds />
      </div>
  );
}