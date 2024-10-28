
import {Metadata} from "next";
import ContactContent from "@/app/(default)/contact/contact";

export const metadata: Metadata = {
    title: 'Contact | Kinaru',
    description: 'Comment nous contacter ?'
}

export default function Contact() {
  return (
      <ContactContent />
  )
}
