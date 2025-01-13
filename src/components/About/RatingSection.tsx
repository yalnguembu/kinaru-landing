'use client'

import Stars from "@/components/Ui/Stars";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {sponsors, userRates} from "@/app/(default)/about-us/data";
import Image from "next/image";

export default function RatingSection()
{
    return (
        <section className="ads-container-rounded mt-20 px-10 py-20 before:bg-bottom">
            <div className="absolute z-10 w-full h-fit top-0 left-0 right-0 flex justify-center items-center">
                <div className="flex flex-col gap-1 w-fit -translate-y-[35px] -rotate-3">
                    <Stars stars={5} starColor='orange'/>
                    <span className="btn-primary-rounded">4.9 / 5.0 Notes sur les stores</span>
                </div>
            </div>
            <Swiper
                slidesPerView={'auto'}
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{waitForTransition: true, delay: 2500}}
                pagination={{clickable: true, el: '.ads-swiper-pagination',}}
                loop
            >
                {userRates.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className="">
                            <div className="flex flex-col md:flex-row items-center gap-10">
                                <Image
                                    src={item.user.image_url ?? ''}
                                    alt={item.user.name}
                                    width={150}
                                    height={150}
                                    className=""
                                />
                                <div className="max-w-[70%] flex flex-col text-white text-xl">
                                    <span className="mx-auto md:mx-0 w-fit"><Stars stars={item.rate} starColor='orange'/></span>
                                    <p className="mt-2 mb-5">{item.comment}</p>
                                    <p><b>{item.user.name},</b><span className="text-base">&thinsp; {item.user.role}</span></p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className="ads-swiper-pagination flex justify-center gap-2 mt-5 w-fit mx-auto"/>
            {/* <Swiper
                loop
                modules={[Autoplay]}
                slidesPerView={'auto'}
                autoplay={{waitForTransition: true, delay: 1500}}
                className="mt-10"
            >
                {sponsors.map((image, index) => {
                    return (
                        <SwiperSlide key={index}
                                     className="item w-fit mr-20 bg-white rounded-xl px-6 shadow h-[100px] flex items-center">
                            <Image src={image} alt={'sponsors-' + index} width={150} height={50}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper> */}
        </section>

    )
}