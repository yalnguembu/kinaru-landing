import {
  FaFacebookF,
  FaInstagram,
  FaPaperPlane,
  FaPinterest,
  FaTwitter,
  FaMap,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import GooglePlayButton from "@/components/Buttons/GooglePlayButton";
import AppleStoreButton from "@/components/Buttons/AppleStoreButton";
import Link from "next/link";
import { CONTACT_MAIL, LOCATION, PHONE } from "@/constants";

export default function Footer() {
  return (
    <footer className="text-white mt-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container flex flex-col gap-10 py-20">
        {/* Newsletter section at the top */}
        <div className="w-full mx-auto mb-10">
          <div className="bg-gray-800/60 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
              S&apos;inscrire à notre Newsletter
            </h2>
            <p className="text-gray-300 mb-5 text-center">
              Soyez le premier à recevoir nos nouveaux posts.
            </p>
            <form action="#" method="GET" className="max-w-xl mx-auto">
              <div className="flex gap-3 p-2 w-full bg-white rounded-lg">
                <input
                  type="email"
                  name="email"
                  placeholder="Entrez votre email"
                  className="w-full bg-transparent border-0 outline-none text-gray-600 px-2"
                />
                <button
                  type="submit"
                  className="bg-primary rounded-lg px-5 py-2 text-white hover:bg-primary/80 transition-colors flex items-center gap-2"
                >
                  <span className="hidden sm:inline">Envoyer</span>
                  <FaPaperPlane />
                </button>
              </div>
            </form>
            <p className="text-gray-400 text-sm text-center mt-3">
              Cliquez sur Envoyer pour autoriser les mails.
            </p>
          </div>
        </div>

        {/* Main columns section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Column 1: About & Contact */}
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
              <a
                href="#"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                <FaFacebookF size={22} />
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                <FaTwitter size={22} />
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                <FaPinterest size={22} />
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-bold mb-2">Liens Utiles</h2>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Nos Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contactez-nous
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-bold mb-2">Informations Légales</h2>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li>
                <Link
                  href="/legal/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms"
                  className="hover:text-primary transition-colors"
                >
                  Conditions d'Utilisation
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="hover:text-primary transition-colors"
                >
                  Politique de Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/notice"
                  className="hover:text-primary transition-colors"
                >
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Download App */}
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-bold mb-2">Téléchargez l&apos;Appli</h2>
            <p className="text-gray-300 mb-4">
              Découvrez l'expérience Kinaru sur votre mobile.
            </p>
            <div className="flex flex-col items-center sm:items-start gap-4">
              <GooglePlayButton />
              <AppleStoreButton />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mt-4" />

        {/* Bottom section */}
        <div className="text-center text-gray-300">
          <p>
            Copyright &copy; Tout droits reservés Kinaru{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
