'use client'

import Stars from "@/components/Ui/Stars";
import SingleReview from "@/components/Ui/SingleReview";
import DownloadAppAds from "@/components/Ads/DownloadAppAds";
import {useEffect, useState} from "react";
import {Review} from "@/types";
import {fetchReviews} from "@/app/(default)/reviews/actions";

export default function ReviewsPage()
{
    const [reviews, setReviews] = useState<Review[]>([])

    useEffect(() => {
        fetchReviews().then(data => setReviews(data))
    }, [])

    return (
        <div className="container">
            <section className="text-center flex flex-col gap-3 items-center justify-center">
                <span className="btn-primary-rounded">Reviews</span>
                <h2 className="text-4xl">Words from <span className="text-primary">trusted peoples</span></h2>
                <p className="max-w-[500px]">Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been
                    the industry&apos;s standard dummy text ever since.</p>
                <div className="mt-5">
                    <Stars stars={5}/>
                    <p className="font-bold mt-2">4.9 / 5.0 Rated on App store | <span className="text-primary">1399 Total user reviews</span>
                    </p>
                </div>
            </section>
            <section className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 ">
                {reviews.map((review, index) => {
                    return <SingleReview review={review} key={index}/>
                })}
            </section>

            <DownloadAppAds/>
        </div>
    )
}