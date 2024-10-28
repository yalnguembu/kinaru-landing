'use client'

import Image from "next/image";
import {FaGear} from "react-icons/fa6";
import {FaCheckCircle} from "react-icons/fa";

export default function ProcessSection()
{
    return (
        <section className="flex gap-10 flex-col md:flex-row-reverse justify-between items-center text-left">
            <div className="">
                <Image
                    src="/assets/images/process.png"
                    alt="process"
                    width={400}
                    height={100}
                />
            </div>
            <div className="max-w-[80%] md:max-w-[50%] flex flex-col gap-7">
                <span className="btn-secondary-rounded flex gap-3"><FaGear/> Process</span>
                <h2 className="text-2xl"><span className="text-primary">Overviews</span> how we develop lorem</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typing industry lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since.</p>
                <ul>
                    {[
                        "Lorem Ipsum is simply dummy text",
                        "The printing and typesetting industry lorem",
                        "Has been the industry's dummy",
                        "Text ever since the when an unknown"
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