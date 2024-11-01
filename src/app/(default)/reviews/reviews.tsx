'use client'

import Stars from "@/components/Ui/Stars";
import SingleReview from "@/components/Ui/SingleReview";
import DownloadAppAds from "@/components/Ads/DownloadAppAds";
import {useEffect, useState} from "react";
import {Review} from "@/types";
import {fetchReviews} from "@/app/(default)/reviews/actions";
import {motion} from "framer-motion";
import {makeToUpVariant} from "@/constants/variants.motion";

export default function ReviewsPage()
{
    const [reviews, setReviews] = useState<Review[]>([])

    useEffect(() => {
        fetchReviews().then(data => setReviews(data))
    }, [])

    return (
        <div className="container">
            <section className="text-center flex flex-col gap-3 items-center justify-center">
                <motion.span className="btn-primary-rounded" variants={makeToUpVariant({delay: 0.1})} initial='hidden' whileInView='visible'>
                    Revues
                </motion.span>
                <motion.h2 className="text-4xl" variants={makeToUpVariant({delay: 0.25})} initial='hidden' whileInView='visible'>
                    Les avis <span className="text-primary">d&apos;autres personnes</span>
                </motion.h2>
                <motion.p className="max-w-[500px]" variants={makeToUpVariant({delay: 0.4})} initial='hidden' whileInView='visible'>
                    Vous trouverez ici, les avis de différentes personnes à propos de notre service.
                </motion.p>
                <div className="mt-5">
                    <Stars stars={5}/>
                    <p className="font-bold mt-2">4.9 / 5.0 Note sur les Stores | <span className="text-primary">1399 avis utilisateurs</span>
                    </p>
                </div>
            </section>
            <motion.section className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 " variants={makeToUpVariant({delay: 0.6})} initial='hidden' whileInView='visible'>
                {reviews.map((review, index) => {
                    return (
                        <motion.div key={index} variants={makeToUpVariant()} initial='hidden' whileInView='visible'>
                            <SingleReview review={review}/>
                        </motion.div>
                    )
                })}
            </motion.section>

            <DownloadAppAds/>
        </div>
    )
}