import Link from "next/link";
import GooglePlayButton from "@/components/Buttons/GooglePlayButton";
import AppleStoreButton from "@/components/Buttons/AppleStoreButton";
import Image from "next/image";
import {motion} from 'framer-motion'
import {makeToLeftVariant, makeToUpVariant} from "@/constants/variants.motion";

export default function DownloadAppAds()
{
    return (
        <section className="mt-16 ads-container-rounded overflow-hidden">
            <div className="flex flex-col gap-10 md:flex-row justify-between md:justify-around items-center md:items-start pt-20 px-10">
                <div className="items-center md:items-start md:text-left text-center flex flex-col gap-5 text-white w-full md:max-w-[50%]">
                    {/* <Link href="#" className="btn-primary-rounded">Télécharger</Link> */}
                    <motion.h2 className="text-5xl md:text-3xl" variants={makeToUpVariant({delay: 0.2})} initial='hidden' whileInView='visible' >
                        Disponible sur Android & iOS
                    </motion.h2>
                    <motion.p variants={makeToUpVariant({delay: 0.4})} initial='hidden' whileInView='visible'>
                        Vous pouvez télécharger sur Playstore et l&apos;Appstore
                    </motion.p>
                    <div className="flex flex-row w-fit items-center gap-5">
                        <GooglePlayButton/>
                        <AppleStoreButton/>
                    </div>
                </div>
                <motion.div className="self-end mx-auto" variants={makeToLeftVariant()} initial='hidden' whileInView='visible'>
                    <div className="ads-phone">
                        <Image
                            src="/assets/images/app/iPhone-ads-cropped.png"
                            alt="app-preview"
                            width={350}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}