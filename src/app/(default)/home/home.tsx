"use client";

import DownloadAppAds from "@/components/Ads/DownloadAppAds";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { sponsors } from "@/app/(default)/about-us/data";
import { avatars, services, steps } from "@/app/(default)/home/data";
import SomeComponent from "@/components/SomeComponent";
import { ReactTyped } from "react-typed";
import GooglePlayButton from "@/components/Buttons/GooglePlayButton";
import AppleStoreButton from "@/components/Buttons/AppleStoreButton";
import { cn } from "@/libs/utils";
import Image from "next/image";
import ActiveUserBar from "@/components/ActiveUserBar";
import { motion } from "framer-motion";
import { APPLINK_ANDROID, APPLINK_IOS } from "@/constants";

import "./home.scss";
import { makeToUpVariant } from "@/constants/variants.motion";

export default function HomeContent() {
  return (
    <div id="home" className="flex flex-col gap-16">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="text-center w-full mx-auto flex flex-col lg:flex-row justify-evenly gap-10 py-16">
        <div className="flex flex-col flex-1 gap-5 items-center">
          <ReactTyped
            className="text-primary font-bold text-xl"
            strings={[
              "Révolutionnez votre expérience immobilière",
              "Simplifiez vos recherches de logement",
              "Gérez vos biens en toute simplicité",
            ]}
            typeSpeed={40}
            backSpeed={40}
            loop={true}
          />
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="highlight-text">Kinaru</span> - Trouver un logement n'a jamais été aussi simple{" "}
          </h1>
          <p className="text-lg max-w-2xl">
            Que vous soyez à la recherche d&apos;un appartement moderne,
            d&apos;un studio, d&apos;une chambre ou autre, Kinaru simplifie
            chaque étape de votre parcours immobilier grâce à notre application
            mobile.
          </p>
          <div className="avatars mt-4">
            {avatars.map((image, index) => (
              <Image
                src={image}
                alt="Utilisateur Kinaru satisfait"
                width={64}
                height={64}
                key={index}
              />
            ))}
            <Image
              src="/assets/images/icons/play.svg"
              alt="Démarrer avec Kinaru"
              width={64}
              height={64}
            />
          </div>
          <span className="font-bold text-xl">12M+ Utilisateurs actifs</span>
          <span className="text-lg">
            La meilleure plateforme mobile de gestion <br /> immobilière en Afrique
          </span>

          {/*
           * Hero CTAs — pointent vers Kinaru (l'app visiteurs/locataires).
           * Les liens Kinaru Pro sont gérés dans <DownloadAppAds> en bas de page.
           */}
          <motion.div
            variants={makeToUpVariant({ delay: 0.3 })}
            initial="hidden"
            whileInView="visible"
            className="flex gap-6 mt-5"
          >
            {/* href omis → prend APPLINK_ANDROID (Kinaru) par défaut */}
            <GooglePlayButton />
            {/* href omis → prend APPLINK_IOS (Kinaru) par défaut */}
            {/* <AppleStoreButton /> */}
          </motion.div>

          {/*
           * Bloc secondaire discret pour inviter les pros à télécharger Kinaru Pro.
           * À décommenter si vous voulez un accès rapide depuis le hero.
           */}
          {/* <p className="text-sm text-muted-foreground mt-2">
            Vous êtes bailleur ou agent ?{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.bmd.kinarupro"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary font-medium"
            >
              Télécharger Kinaru Pro
            </a>
          </p> */}
        </div>

        <motion.div
          variants={makeToUpVariant({ delay: 0.5 })}
          initial="hidden"
          whileInView="visible"
          className={cn(
            "ads-phone flex flex-col gap-5 items-center",
            "flex-1 mx-auto before:max-w-[300px] before:top-[8%]"
          )}
        >
          <Swiper
            loop
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            autoplay={{ waitForTransition: true, delay: 3000 }}
            pagination={{ clickable: true, el: ".home-swiper-pagination" }}
            centeredSlides={true}
            className="w-[300px] relative overflow-hidden rounded-3xl bg-black py-3 px-1 shadow-2xl"
          >
            {[7, 8, 5].map((n, index) => (
              <SwiperSlide
                key={index}
                className="w-full h-auto flex items-center justify-center"
              >
                <Image
                  src={`/assets/images/designs/${n}.png`}
                  alt="Interface Kinaru - Recherche et gestion immobilière simplifiées"
                  width={280}
                  height={100}
                  className="rounded-3xl"
                />
              </SwiperSlide>
            ))}
            <div className="absolute z-10 flex items-center justify-center">
              <Image
                src="/assets/images/iphonescreen.png"
                alt="Application mobile Kinaru"
                width={310}
                height={110}
              />
            </div>
          </Swiper>
          <div className="home-swiper-pagination" />
        </motion.div>
      </section>

      {/* ── ACTIVE USER BAR ───────────────────────────────────────────────── */}
      <motion.div variants={makeToUpVariant()} initial="hidden" whileInView="visible">
        <ActiveUserBar />
      </motion.div>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section className="flex flex-col gap-10 items-center text-center" id="services">
        <motion.div
          variants={makeToUpVariant({ delay: 0.2 })}
          initial="hidden"
          whileInView="visible"
        >
          <span className="btn-primary-rounded">Services Mobiles</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Découvrez nos <span className="highlight-text">services</span> immobiliers
          </h2>
          <p className="text-lg max-w-3xl mx-auto mt-4">
            Notre application mobile vous offre une gamme complète de services
            pour faciliter toutes vos démarches immobilières en quelques clics.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={makeToUpVariant({ delay: 0.1 * index })}
              initial="hidden"
              whileInView="visible"
              className="service-card"
            >
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
          ))}
        </div>
      </section>

      {/* ── STEPS ─────────────────────────────────────────────────────────── */}
      <section
        className="ads-container-rounded p-10 flex flex-col gap-6 items-center text-white"
        id="getting-started"
      >
        <span className="btn-primary-rounded">Installation Rapide</span>
        <h2 className="text-3xl md:text-4xl font-bold">
          Commencez en seulement 3 étapes
        </h2>

        <div className="flex flex-col md:flex-row gap-10 mt-8 items-stretch mb-10 text-center w-full max-w-5xl">
          {steps.map((item, index) => {
            const { icon, title, description } = item;
            return (
              <motion.div
                key={index}
                variants={makeToUpVariant({ delay: 0.2 * index })}
                initial="hidden"
                whileInView="visible"
                className={cn(
                  "flex flex-col md:flex-col-reverse items-center gap-5 mx-auto bg-white/10 p-6 rounded-xl backdrop-blur-sm",
                  "flex-1 hover:transform hover:scale-105 transition-all duration-300"
                )}
              >
                <span className="py-2 px-4 border-gray-400 text-gray-200 border-2 border-dotted rounded-full font-bold">
                  0{index + 1}
                </span>
                <div className="flex flex-col items-center gap-4">
                  <span className="w-fit flex flex-col p-5 bg-white rounded-xl shadow-lg">
                    <span className="bg-primary p-3 rounded-xl">{icon}</span>
                  </span>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p>{description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/*
         * CTA "Télécharger maintenant" → page /download qui elle-même
         * affiche le switcher Kinaru / Kinaru Pro (voir DownloadAppAds).
         */}
        <a href="/download" className="btn-action">
          Télécharger maintenant
        </a>
      </section>

      {/* ── APP SCREENS ───────────────────────────────────────────────────── */}
      <section
        id="app-screens"
        className="flex flex-col gap-8 text-center items-center py-16"
      >
        <span className="btn-primary-rounded">Application Mobile</span>
        <h2 className="text-3xl md:text-4xl font-bold">
          Des <span className="highlight-text">interfaces</span> intuitives pour tous vos besoins
        </h2>
        <p className="text-lg max-w-3xl">
          Notre application mobile Kinaru est conçue pour offrir une expérience
          utilisateur exceptionnelle, que vous soyez propriétaire, locataire ou
          à la recherche d'un nouveau logement.
        </p>
        <Swiper
          loop
          modules={[Autoplay, Pagination, EffectCoverflow]}
          centeredSlides={true}
          pagination={{ clickable: true, el: ".design-swiper-pagination" }}
          slidesPerView={"auto"}
          effect={"coverflow"}
          coverflowEffect={{ rotate: 0, stretch: 0, scale: 0.9 }}
          slideActiveClass="swiper-slide-active"
          autoplay={{ delay: 2000, waitForTransition: true }}
          className="mt-10 w-full"
        >
          {new Array(9).fill(0).map((_, index) => {
            const n = index + 1;
            return (
              <SwiperSlide
                key={index}
                className="border-2 rounded-3xl w-fit mr-5 shadow-lg"
              >
                <Image
                  src={`/assets/images/designs/${n}.png`}
                  alt={"Interface Kinaru - Fonctionnalité " + n}
                  width={270}
                  height={100}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="design-swiper-pagination flex gap-1 mt-6 items-center justify-center" />
      </section>

      {/* ── DOWNLOAD APP ADS (Kinaru + Kinaru Pro) ────────────────────────── */}
      {/*
       * Ce composant gère le switcher entre les deux apps.
       * C'est ici que l'utilisateur choisit de télécharger
       * Kinaru (visiteurs) ou Kinaru Pro (bailleurs/agents).
       */}
      <DownloadAppAds />
    </div>
  );
}