'use client'

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {valuesItem} from "@/app/(default)/about-us/data";
import {FaMessage} from "react-icons/fa6";

export default function OurValuesSection()
{
    return (
        <section className="flex flex-col items-center gap-5">
            <span className="btn-primary-rounded">Nos objectifs</span>
            <h2 className="text-3xl">Quels sont nos <span className="text-primary">Objectifs ?</span></h2>
            <Swiper
                className="w-full"
                modules={[Navigation, Autoplay]}
                slidesPerView={'auto'}
                navigation
                loop
                autoplay={{delay: 2000}}
            >
                {valuesItem.map((item, index) => {
                    return (
                        <SwiperSlide key={index}
                                     className="text-center mr-10 w-[400px] bg-white shadow  rounded-xl flex flex-col p-10">
                            <div className="mx-auto p-4 rounded-xl bg-primary w-fit text-white"><FaMessage size={50}/>
                            </div>
                            <h3 className="text-primary text-xl mt-10 mb-3">{item.name}</h3>
                            <p>{item.content}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}