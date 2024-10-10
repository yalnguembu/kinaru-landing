import HomeContent from "@/app/(default)/home";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Home | Kinaru',
  description: 'Your app for buy & sell houses'
}

export default function Home() {
  return (
      <HomeContent />
  )
}
