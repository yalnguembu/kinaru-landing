
import {Metadata} from "next";
import './about.scss'
import AboutContent from "@/app/(default)/about-us/about";

export const metadata: Metadata = {
    title: 'A propos | Kinaru',
    description: 'Decouvrez plus a propos de nous'
}

export default function About() {
  return (
      <AboutContent />
  );
}