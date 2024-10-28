import PricingContent from "@/app/(default)/pricing/pricing";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Tarifs | Kinaru',
    description: 'How much cost our service ?'
}

export default function Pricing() {
    return (
        <PricingContent />
    )
}
