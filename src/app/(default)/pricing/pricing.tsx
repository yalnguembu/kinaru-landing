'use client'

import PricingTable from "@/components/Pricing/PricingTable";
import {useEffect, useState} from "react";
import type {Pricing} from "@/types";
import {fetchPricings} from "@/app/(default)/pricing/actions";
import Link from "next/link";
import DownloadAppAds from "@/components/Ads/DownloadAppAds";

export default function PricingContent() {
    const [prices, setPrices] = useState<Pricing[]>([])

    useEffect(() => {
        fetchPricings().then(data => setPrices(data))
    }, [])

    return (
        <div className="container flex flex-col gap-10">
            <section className="flex flex-col text-center items-center gap-3">
                <span className="btn-primary-rounded">Pricing</span>
                <h2 className="text-4xl">Best <span className="text-primary">pricing plans</span></h2>
                <p className="max-w-[500px]">Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industry&apos;s standard dummy text ever since.</p>
            </section>
            <section className="bg-white rounded-xl px-5 py-10 overflow-x-scroll">
                <PricingTable prices={prices} />
                <div className="text-center mt-5">
                    <p>Have question? <Link href="/faq" className="text-primary underline font-bold">Read FAQ</Link></p>
                    <p>Not sure what to choose? <Link href="/contact" className="text-primary underline font-bold">Contact Us</Link> for custom packages</p>
                </div>
            </section>
            <DownloadAppAds />
        </div>
    );
}
