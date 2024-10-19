import FaqContent from "@/app/(default)/faq/faq";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Faq | Kinaru'
}

export default function Faq()
{
    return (
        <FaqContent />
    )
}