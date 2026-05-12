import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMap,
  FaPhone,
  FaTiktok,
} from "react-icons/fa6";
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
        <SocialLink
          href="https://www.facebook.com/share/1BUe8SDUE7/"
          icon={<FaFacebookF size={22} />}
          label="Facebook Kinaru"
        />
        <SocialLink
          href="https://www.instagram.com/sp_kinaru?igsh=MWpxOGxybWpsMm1rMQ=="
          icon={<FaInstagram size={22} />}
          label="Instagram Kinaru"
        />
        <SocialLink
          href="https://www.linkedin.com/posts/kinaru_kinaru-bientaektdisponible-teasing-activity-7385191293540265984-9WDp"
          icon={<FaLinkedinIn size={22} />}
          label="LinkedIn Kinaru"
        />
        <SocialLink
          href="https://www.tiktok.com/@kinaru"
          icon={<FaTiktok size={22} />}
          label="TikTok Kinaru"
        />
      </div>
    </div>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="hover:text-primary transition-colors"
    >
      {icon}
    </a>
  );
}