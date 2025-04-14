import { FaEnvelope, FaFacebookF, FaInstagram, FaMap, FaPhone, FaPinterest, FaTwitter } from "react-icons/fa6";
import { CONTACT_MAIL, LOCATION, PHONE } from "@/constants";

export default function AboutColumn() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-bold mb-2">À propos de Kinaru</h2>
      <p className="text-gray-300 mb-4">
        Kinaru est une application de gestion de propriétés immobilières
        moderne et sécurisée.
      </p>

      <div className="flex flex-col gap-3 text-gray-300">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <FaMap className="text-primary" />
          <span>{LOCATION}</span>
        </div>
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <FaPhone className="text-primary" />
          <span>{PHONE}</span>
        </div>
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <FaEnvelope className="text-primary" />
          <span>{CONTACT_MAIL}</span>
        </div>
      </div>

      <div className="links flex justify-center sm:justify-start gap-4 mt-2">
        <SocialLink href="#" icon={<FaFacebookF size={22} />} />
        <SocialLink href="#" icon={<FaTwitter size={22} />} />
        <SocialLink href="#" icon={<FaInstagram size={22} />} />
        <SocialLink href="#" icon={<FaPinterest size={22} />} />
      </div>
    </div>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="hover:text-primary transition-colors"
    >
      {icon}
    </a>
  );
}
