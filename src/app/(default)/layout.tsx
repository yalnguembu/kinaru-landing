
import {Metadata} from "next";
import { Manrope } from "next/font/google"
import Header from '@/components/Header';
import GoToUp from '@/components/Navigation/GoToUp';
import './globals.scss';
import Footer from "@/components/Footer";

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
})

export const metadata :Metadata = {
    icons: "/favicon.ico"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
        <body className={`${manrope.className} bg-[#fdf7ec]`}>
            <Header/>
            <main className="min-h-screen mt-36 text-black">
              {children}
            </main>
            <GoToUp />
            <Footer />
        </body>
    </html>
  );
}
