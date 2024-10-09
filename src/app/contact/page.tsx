import {FaMailBulk, FaPhoneSquare} from "react-icons/fa";
import {FaMapLocation} from "react-icons/fa6";
import ContactItem from "@/components/Contact/ContactItem";
import ContactForm from "@/components/Contact/ContactForm";

const contactItems = [
    {icon: <FaMailBulk size={64}/>, label: "Email us", text: "example@gmail.com", href: 'mailto:'},
    {icon: <FaPhoneSquare size={64}/>, label: "Call us", text: "+11234567890", href: 'tel:+11234567890'},
    {icon: <FaMapLocation size={64}/>, label: "Our location", text: "Open Google Maps", href: 'map:'}
]

export default function Contact() {
  return (
      <div className="container flex flex-col gap-20">
        <section>
            <div className="text-center flex flex-col gap-3 justify-center items-center">
              <span className="btn-primary-rounded">Contact Us</span>
              <h2 className="text-3xl">Any query? <span className="text-primary">Let&apos;s talk</span></h2>
              <p className="max-w-[500px]">Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industry&apos;s standard dummy text ever since.</p>
            </div>
            <div className="flex justify-between mt-10">
                {contactItems.map((item, index) => {
                    return <ContactItem icon={item.icon} label={item.label} text={item.text} key={index} />
                })}
            </div>
        </section>
          {/* CONTACT FORM SECTION */}
        <ContactForm />
          {/* MAP SECTION */}
        <section>
            <div className="container rounded-xl overflow-hidden h-[600px] bg-gray-100">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103190.9858395081!2d-115.2979677164074!3d36.07597430119342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2sin!4v1691230337798!5m2!1sen!2sin"
                    className="border-0 w-full h-full" allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
      </div>
  );
}
