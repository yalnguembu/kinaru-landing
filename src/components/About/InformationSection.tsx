import Image from "next/image";
import {FaMessage} from "react-icons/fa6";
import {FaCheckCircle} from "react-icons/fa";

export default function InformationSection()
{
    return (
        <section className="flex flex-col md:flex-row gap-10 justify-between items-center text-left">
            <div>
                <Image
                    src="/assets/images/communication.png"
                    alt="communication"
                    width={400}
                    height={100}
                />
            </div>
            <div className="max-w-[80%] md:max-w-[50%] flex flex-col gap-7">
                <span className="btn-secondary-rounded flex gap-3"><FaMessage/> Communication</span>
                <h2 className="text-2xl"><span className="text-primary">Client communication</span> for best results
                </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typing industry lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since.</p>
                <ul>
                    {[
                        "Lorem Ipsum is simply dummy text",
                        "The printing and typesetting industry lorem",
                        "Has been the industry's dummy",
                    ].map((text, index) => {
                        return (
                            <li key={index}><FaCheckCircle className="text-primary inline"/>&thinsp;{text}</li>
                        )
                    })}
                </ul>
                <a href="#" className="btn-action">Start Free Trial</a>
            </div>
        </section>
    )
}