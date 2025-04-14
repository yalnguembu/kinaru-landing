import NewsletterSection from "@/components/Footer/NewsletterSection";
import AboutColumn from "@/components/Footer/AboutColumn";
import { UsefulLinksColumn, LegalLinksColumn } from "@/components/Footer/LinksColumn";
import DownloadColumn from "@/components/Footer/DownloadColumn";

export default function Footer() {
  return (
    <footer className="text-white mt-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container flex flex-col gap-10 py-20">
        {/* Newsletter section at the top */}
        <NewsletterSection />

        {/* Main columns section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Column 1: About & Contact */}
          <AboutColumn />

          {/* Column 2: Useful Links */}
          <UsefulLinksColumn />

          {/* Column 3: Legal */}
          <LegalLinksColumn />

          {/* Column 4: Download App */}
          <DownloadColumn />
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
