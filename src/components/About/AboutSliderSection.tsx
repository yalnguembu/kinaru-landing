'use client'

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import Image from "next/image";

export default function AboutSliderSection({images = []}: {images: string[]})
{
    return (
        <div className="max-w-full">
            <Swiper
                loop
                modules={[Autoplay]}
                slidesPerView={'auto'}
                autoplay={{waitForTransition: true, delay: 1500}}
                grabCursor={true}
                className="w-fit mx-auto"
            >
                {images.map((image, index) => {
                    return (
                        <SwiperSlide key={index} className="mr-5 w-fit">
                            <Image
                                src={image}
                                alt={'slide-' + index}
                                width={480}
                                height={350}
                                className="w-auto h-[350px] rounded-2xl"
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}