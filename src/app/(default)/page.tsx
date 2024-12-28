import HomeContent from "@/app/(default)/home/home";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Accueil | Kinaru',
  description: 'Votre application pour vendre et acheter les habitations.'
}

export default function Home() {
  return (
      <HomeContent />
  )
}
