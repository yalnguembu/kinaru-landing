'use client'

import DownloadAppAds from "@/components/Ads/DownloadAppAds";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCoverflow, Pagination} from "swiper/modules";
import {sponsors} from "@/app/(default)/about-us/data";
import {avatars, services, steps} from "@/app/(default)/home/data";
import SomeComponent from "@/components/SomeComponent";
import {ReactTyped} from "react-typed";
import GooglePlayButton from "@/components/Buttons/GooglePlayButton";
import AppleStoreButton from "@/components/Buttons/AppleStoreButton";
import {cn} from "@/libs/utils";
import Image from "next/image";
import ActiveUserBar from "@/components/ActiveUserBar";
import {motion} from 'framer-motion'

import './home.scss'
import {makeToUpVariant} from "@/constants/variants.motion";
// import ProcessSection from "@/components/About/ProcessSection";
// import InformationSection from "@/components/About/InformationSection";

export default function HomeContent()
{
    return (
        <div id="home" className="flex flex-col gap-10">
            {/* MAIN SECTION */}
            <section className="text-center w-fit mx-auto flex flex-col lg:flex-row justify-evenly gap-10">
                <div className=" flex flex-col flex-1 gap-5 items-center">
                    <ReactTyped
                        className="text-primary font-bold"
                        strings={[
                            "Revolutionnez votre experience immonbiliere",
                            "En rejoignant Kinaru"
                        ]}
                        typeSpeed={40}
                        backSpeed={40}
                        loop={true}
                    />
                    <h2><span className="text-primary">Kinaru </span> - La cle de votre <br />futur chez vous.</h2>
                    <p>Que vous soyez à la recherche d&apos;un apartement moderne, d&apos;un studio, <br /> d&apos;une chambre ou autre, Kinaru simplifie chaque étapes de votre parcours.</p>
                    <div className='avatars'>
                        {avatars.map((image, index) => {
                            return (
                                <Image
                                    src={image}
                                    alt={'avatar-' + index}
                                    width={64}
                                    height={64}
                                    key={index}
                                />
                            )
                        })}
                        <Image src="/assets/images/icons/play.svg" alt='icon-play' width={64} height={64} />
                    </div>
                    <span className="font-bold text-xl">12M+ Active users</span>
                    <span>La meilleure plateforme de gestion <br/> immobilière</span>
                    <div className="flex gap-10 mt-3">
                        <GooglePlayButton/>
                        <AppleStoreButton/>
                    </div>
                </div>
                <div className={cn(
                    "ads-phone flex flex-col gap-5 items-center",
                    "flex-1 mx-auto before:max-w-[300px] before:top-[8%]"
                )}>
                    <Swiper
                        loop
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        autoplay={{waitForTransition: true}}
                        pagination={{clickable: true, el: '.home-swiper-pagination'}}
                        centeredSlides={true}
                        className="w-[300px] relative overflow-hidden rounded-3xl bg-black py-3 px-1"
                    >
                        {[7, 8, 5].map((n, index) => {
                            return (
                                <SwiperSlide key={index} className="w-full h-auto flex items-center justify-center">
                                    <Image
                                        src={`/assets/images/designs/${n}.png`}
                                        alt={'design-' + n}
                                        width={280}
                                        height={100}
                                        className="rounded-3xl"
                                    />
                                </SwiperSlide>
                            )
                        })}
                        <div className="absolute z-10 flex items-center justify-center">
                            <Image
                                src="/assets/images/iphonescreen.png"
                                alt="phone"
                                width={310}
                                height={110}
                            />
                        </div>
                    </Swiper>
                    <div className="home-swiper-pagination"/>
                </div>

            </section>

            <motion.div variants={makeToUpVariant()} initial='hidden' whileInView='visible' >
                <ActiveUserBar />
            </motion.div>

            {/* SERVICES */}
            <section className="flex flex-col gap-3 items-center text-center">
                <motion.div variants={makeToUpVariant({delay: 0.2})} initial='hidden' whileInView='visible'>
                    <span className="btn-primary-rounded">Services</span>
                    <h2 className="text-3xl">Nos differents <span className="text-primary">services</span><br/></h2>
                </motion.div>
                <div className="flex flex-col gap-10">
                    {/* TASK MANAGE */}
                    {services.map((service, index) => {
                        return (
                            <motion.div key={index} variants={makeToUpVariant({delay: 0.1 * index})} initial='hidden' whileInView='visible'>
                                <SomeComponent
                                    image={service.image}
                                    tag={service.tag}
                                    description={service.description}
                                    actionText={service.actionText}
                                    data={service.data}
                                    title={service.title}
                                    className={service.className}
                                />
                            </motion.div>
                        )
                    })}

                    {/*/!* PROCESS *!/*/}
                    {/*<ProcessSection />*/}
                    {/*/!* INFORMATION *!/*/}
                    {/*<InformationSection />*/}
                </div>
            </section>

            {/* STEPS */}
            <section className="ads-container-rounded p-10 flex flex-col gap-3 items-center text-white">
                <span className="btn-primary-rounded">Rapide et Facile</span>
                <h2>Tout en seulement 03 étapes</h2>
                <div className="flex flex-col md:flex-row gap-10 mt-5 items-start mb-10 text-center">
                    {steps.map((item, index) => {
                        const {icon, title, description} = item
                        return (
                            <div key={index} className={cn(
                                "flex flex-col md:flex-col-reverse items-center gap-3 mx-auto"
                            )}>
                                <span className="py-2 px-3 border-gray-400 text-gray-400 border-2 border-dotted rounded-full">0{index + 1}</span>
                                <div className="flex flex-col items-center gap-3">
                                    <span className="w-fit flex flex-col p-5 bg-white rounded-xl">
                                        <span className="bg-primary p-2 rounded-xl">{icon}</span>
                                    </span>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <a href="#" className="btn-action">Commencez maintenant</a>
            </section>

            {/* OUR CLIENTS */}
            <section className="flex flex-col gap-3 items-center text-center">
                <span className="btn-primary-rounded">Nos clients</span>
                <motion.h2 variants={makeToUpVariant({delay: 0.2})} initial='hidden' whileInView='visible' className="text-3xl" >
                    <span className="text-primary block">3500+ companies</span>
                    utilisent notre application
                </motion.h2>
                <motion.div variants={makeToUpVariant({delay: 0.4})} initial='hidden' whileInView='visible' className="mt-10 flex flex-wrap gap-5 items-center justify-center">
                    {sponsors.map((image, index) => {
                        return (
                            <div key={index} className="p-5 bg-white rounded-xl">
                                <Image
                                    src={image}
                                    alt={'client-' + index}
                                    width={150}
                                    height={50}
                                />
                            </div>
                        )
                    })}
                </motion.div>
            </section>

            {/* */}
            <section></section>

            {/* APP SCREENS */}
            <section id="apps-creens" className="flex flex-col gap-3 text-center items-center">
                <span className="btn-primary-rounded">Interfaces</span>
                <h2 className="text-3xl">Des <span className="text-primary">interfaces</span> intuitives</h2>
                <Swiper
                    loop
                    modules={[Autoplay, Pagination, EffectCoverflow]}
                    centeredSlides={true}
                    pagination={{clickable: true, el: '.design-swiper-pagination'}}
                    slidesPerView={'auto'}
                    effect={'coverflow'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        scale: 0.9,
                    }}
                    slideActiveClass='swiper-slide-active'
                    autoplay={{delay: 2000, waitForTransition: true}}
                    className="mt-5"
                >
                    {(new Array(9).fill(0)).map((_, index) => {
                        const n = index + 1
                        const image = `/assets/images/designs/${n}.png`
                        return (
                            <SwiperSlide key={index} className="border-2 rounded-3xl w-fit mr-5">
                                <Image
                                    src={image}
                                    alt={'design-' + n}
                                    width={270}
                                    height={100}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className="design-swiper-pagination flex gap-1 mt-3 items-center justify-center"/>
            </section>

            {/* */}
            <DownloadAppAds/>

            {/* */}
            <section></section>
        </div>
    )
}