import {Metadata} from "next";
import { Manrope } from "next/font/google"
import Header from '@/components/Header';
import GoToUp from '@/components/Navigation/GoToUp';
import Footer from "@/components/Footer";
import './bootstrap'
import './layout.scss';

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["cyrillic"],
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
        <body className={`${manrope.className}`}>
            <Header/>
            <main className="min-h-screen pt-32 text-black">
              {children}
            </main>
            <GoToUp />
            <Footer />
        </body>
    </html>
  );
}
