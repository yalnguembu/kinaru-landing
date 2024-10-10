'use client'

import DownloadAppAds from "@/components/Ads/DownloadAppAds";
import AnimatedValue from "@/components/Ui/AnimatedValue";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Autoplay, Pagination} from "swiper/modules";
import {FaFacebookF, FaGear, FaInstagram, FaMessage, FaTwitter} from "react-icons/fa6";
import {cn} from "@/libs/utils";
import {firstCarouselImages, sponsors, statsValues, teams, userRates, valuesItem} from "@/app/(default)/about-us/data";
import Image from "next/image";
import Stars from "@/components/Ui/Stars";

import './about.scss'
import {FaCheckCircle} from "react-icons/fa";

export default function About() {
  return (
      <div id="about" className="flex flex-col gap-10 my-10">
          {/* ABOUT */}
          <section className="text-center flex flex-col items-center gap-3">
            <span className="btn-primary-rounded">About us</span>
            <h2 className="text-3xl">We are app agency <br/> <span className="text-primary">building high level of smart app</span></h2>
            <p className="max-w-[500px]">Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industry&apos;s standard dummy text ever since.</p>
          </section>

            <div className="max-w-full">
                <Swiper
                    loop
                    modules={[Autoplay]}
                    slidesPerView={'auto'}
                    autoplay={{waitForTransition: true, delay:1500}}
                    grabCursor={true}
                    className="w-fit mx-auto"
                >
                    {firstCarouselImages.map((image, index) => {
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

          {/*  */}
          <section>
            <div className="flex flex-col gap-5 text-center px-10">
                <h3 className="text-3xl"><span className="text-primary block">Our story</span> behind our success & achievement</h3>
                <p className="mx-auto max-w-[80%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry&apos;s standard dummy text ever since the when an unknown print er took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining esse ntially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing soft ware like Aldus PageMaker including versions of lorem Ipsum.</p>
            </div>
        </section>

          {/* COMPANY STATS */}
          <section className="ads-container p-14 rounded-xl before:rounded-xl flex flex-col gap-3 items-center">
              <span className="btn-primary-rounded">Why choose us</span>
              <h2 className="text-3xl text-white">Company statistics</h2>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0">
                  {statsValues.map((item, index) => {
                      const isEven = index % 2 === 0
                      return (
                          <li key={index}
                              className={cn(
                                  "rounded-full bg-white/85 w-[250px] h-[250px] flex items-center justify-center border border-primary",
                                  "md:w-[150px] md:h-[150px]",
                                  (!isEven) ? '-translate-x-10 -z-0' : 'translate-x-10 z-10',
                                  (!isEven) ? 'md:translate-x-0' : 'md:translate-x-0',
                              )
                          }>
                              <div className="flex flex-col items-center font-bold">
                                  <span className="text-primary text-2xl"><AnimatedValue value={item.number} step={item.step ?? 1} start={item.start??0} time={item.time??10}/>{item.letter}</span>
                                  <b>{item.name}</b>
                              </div>
                          </li>
                      )
                  })}
              </ul>
          </section>

          {/* OUR VALUES */}
          <section className="flex flex-col items-center gap-5">
              <span className="btn-primary-rounded">Our values</span>
              <h2 className="text-3xl"><span className="text-primary">Our values</span> driven by relations</h2>
              <Swiper
                  className="w-full"
                  modules={[Navigation, Autoplay]}
                  slidesPerView={'auto'}
                  navigation
                  loop
                  autoplay={{ delay: 2000 }}
              >
                  {valuesItem.map((item, index) => {
                      return (
                          <SwiperSlide key={index} className="text-center mr-10 w-[400px] bg-white shadow  rounded-xl flex flex-col p-10">
                              <div className="mx-auto p-4 rounded-xl bg-primary w-fit text-white"><FaMessage size={50}/></div>
                              <h3 className="text-primary text-xl mt-10 mb-3">{item.name}</h3>
                              <p>{item.content}</p>
                          </SwiperSlide>
                      )
                  })}
              </Swiper>
          </section>

          {/* PROCESS */}
          <section className="flex gap-10 flex-col md:flex-row-reverse justify-between items-center">
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
                  <p>Lorem Ipsum is simply dummy text of the printing and typing industry lorem Ipsum has been the industry&apos;s standard dummy text ever since.</p>
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

          {/* INFORMATION */}
          <section className="flex flex-col md:flex-row gap-10 justify-between items-center">
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
                  <h2 className="text-2xl"><span className="text-primary">Client communication</span> for best results</h2>
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

          {/* RATING */}
          <section className="ads-container-rounded mt-20 px-10 py-20 before:bg-bottom">
              <div className="absolute z-10 w-full h-fit top-0 left-0 right-0 flex justify-center items-center">
                  <div className="flex flex-col gap-1 w-fit -translate-y-[35px] -rotate-3">
                      <Stars stars={5} starColor='orange'/>
                      <span className="btn-primary-rounded">4.9 / 5.0 Rated on App store</span>
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
                                      <p><b>{item.user.name},</b><span
                                          className="text-base">&thinsp; {item.user.role}</span></p>
                                  </div>
                              </div>
                          </SwiperSlide>
                      )
                  })}
              </Swiper>
              <div className="ads-swiper-pagination flex justify-center gap-2 mt-5 w-fit mx-auto"/>
              <Swiper
                  loop
                  modules={[Autoplay]}
                  slidesPerView={'auto'}
                  autoplay={{waitForTransition: true, delay: 1500}}
                  className="mt-10"
              >
                  {sponsors.map((image, index) => {
                      return (
                          <SwiperSlide key={index} className="item w-fit mr-20 bg-white rounded-xl px-6 shadow h-[100px] flex items-center">
                              <Image src={image} alt={'sponsors-' + index} width={150} height={50}/>
                          </SwiperSlide>
                      )
                  })}
              </Swiper>
          </section>

          {/* MEET OUR TEAM */}
          <section className="text-center flex flex-col items-center">
              <span className="btn-primary-rounded">Experts</span>
              <h2 className="text-3xl mt-4 mb-10">Meet <span className="text-primary">Our team</span></h2>
              <div className="teams flex flex-col gap-20 md:flex-row">
                  {teams.map((user, index) => {
                      const bigSize = 350, smallSize = 170;
                      return (
                          <div key={index} className="teams__user flex flex-col items-center">
                              <Image
                                  src={user.image_url ?? ''}
                                  alt={user.name}
                                  width={bigSize}
                                  height={bigSize}
                                  className={`md:w-[${smallSize}px] md:h-[${smallSize}px] xl:w-[${bigSize}px] lg:h-[${bigSize}px]`}
                              />
                              <div className="mt-10">
                                  <h3 className='text-primary'>{user.name}</h3>
                                  <span className="text-wrap">{user.role}</span>
                              </div>
                              <ul>
                                  <li><a href="#"><FaFacebookF size={20}/></a></li>
                                  <li><a href="#"><FaTwitter size={20}/></a></li>
                                  <li><a href="#"><FaInstagram size={20}/></a></li>
                              </ul>
                          </div>
                      )
                  })}
              </div>
          </section>

          <DownloadAppAds />
      </div>
  );
}