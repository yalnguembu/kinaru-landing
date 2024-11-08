'use client'

import {FaMailBulk, FaPhoneSquare} from "react-icons/fa";
import {FaMapLocation} from "react-icons/fa6";
import ContactItem from "@/components/Contact/ContactItem";
import ContactForm from "@/components/Contact/ContactForm";
import {motion} from "framer-motion";
import {makeToLeftVariant, makeToUpVariant} from "@/constants/variants.motion";

const contactItems = [
    {icon: <FaMailBulk size={64}/>, label: "Envoyez un mail", text: "example@gmail.com", href: 'mailto:'},
    {icon: <FaPhoneSquare size={64}/>, label: "Appellez-nous", text: "+11234567890", href: 'tel:+11234567890'},
    {icon: <FaMapLocation size={64}/>, label: "Notre position", text: "Open Google Maps", href: 'map:'}
]

export default function ContactContent() {
    return (
        <div className="container flex flex-col gap-20 overflow-hidden">
            <section>
                <div className="text-center flex flex-col gap-3 justify-center items-center">
                    <motion.span className="btn-primary-rounded" variants={makeToUpVariant()} initial='hidden' whileInView='visible'>
                        Contactez-nous
                    </motion.span>
                    <motion.h2 className="text-3xl" variants={makeToUpVariant({delay: 0.2})} initial='hidden' whileInView='visible'>
                        Vous avez un soucis ? <span className="text-primary">Discutons-en</span>
                    </motion.h2>
                    <motion.p className="max-w-[500px]" variants={makeToUpVariant({delay: 0.3})} initial='hidden' whileInView='visible'>
                        Ci dessous vous avez tous les moyens par lequel vous pouvez nous contacter.
                    </motion.p>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-5 mt-10">
                    {contactItems.map((item, index) => {
                        return (
                            <motion.div key={index} variants={makeToLeftVariant({delay: 0.2 * index})} initial='hidden' whileInView='visible'>
                                <ContactItem icon={item.icon} label={item.label} text={item.text} key={index} />
                            </motion.div>
                        )
                    })}
                </div>
            </section>
            {/* CONTACT FORM SECTION */}
            <motion.div variants={makeToUpVariant({delay: 0.5})} initial='hidden' whileInView='visible'>
                <ContactForm />
            </motion.div>
            {/* MAP SECTION */}
            <section>
                <motion.div
                    className="container rounded-xl overflow-hidden h-[600px] bg-gray-100"
                    variants={makeToLeftVariant()} initial='hidden' whileInView='visible'
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103190.9858395081!2d-115.2979677164074!3d36.07597430119342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2sin!4v1691230337798!5m2!1sen!2sin"
                        className="border-0 w-full h-full" allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </motion.div>
            </section>
        </div>
    );
}
