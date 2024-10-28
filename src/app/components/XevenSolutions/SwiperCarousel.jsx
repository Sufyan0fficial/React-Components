"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "@/app/components/XevenSolutions/styles.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Container } from "@mui/material";
import Image from "next/image";

const Data = [
  {
    img: "ceoimage.jpg",
    h1: "Muhammad Sufyan",
    h2: "CEO of HorizonAI",
  },
  {
    img: "ceoimage.jpg",
    h1: "Muhammad Husnain",
    h2: "CEO of TechticsAI",
  },
  {
    img: "ceoimage.jpg",
    h1: "Muhammad Usman",
    h2: "CEO of DarulAloom",
  },
  {
    img: "ceoimage.jpg",
    h1: "Muhammad Umar",
    h2: "CEO of CodeQueSolutions",
  },
  {
    img: "ceoimage.jpg",
    h1: "Muhammad Abraiz",
    h2: "Cofounder of ZeeSolutions",
  },
  {
    img: "ceoimage.jpg",
    h1: "Ali Amjad",
    h2: "Producer of MegaHit",
  },
  {
    img: "ceoimage.jpg",
    h1: "Muhammad Zafar",
    h2: "Co-Founder of Zafar Solutions",
  },
  {
    img: "ceoimage.jpg",
    h1: "Taimoor Mirza",
    h2: "Founder of Taimoor Academy",
  },
];

export default function SwiperCarousel() {
  return (
    <>
      <Container maxWidth="lg" className="my-20">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={30}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          autoplay={{ delay: 2000 }}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1, // 1 slide on small screens
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2, // 2 slides on medium screens
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3, // 2 slides on medium screens
              spaceBetween: 30,
            },
          }}
        >
          <div>
            {Data.map((profile, index) => (
              <SwiperSlide
                className=" bg-gradient-to-bl from-pink1 to-pink2  min-h-max rounded-lg pt-8 px-8 pb-12"
                key={index}
              >
                <div className="w-[85px] h-[85px] relative mb-2">
                  <Image
                    src={`/xevenhealthpage/${Data[index].img}`}
                    fill
                    alt="image"
                    className="object-cover object-center rounded-full"
                  />
                </div>
                <div className="">
                  <h4 className="font-poppins text-white font-semibold text-xl">
                    {Data[index].h1}
                  </h4>
                  <h5 className="font-poppins text-white font-medium text-lg mt-1 mb-2 ">
                    {Data[index].h2}
                  </h5>
                  <p className="font-titillium text-white text-sm leading-relaxed">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quo dolores ab labore minima totam aperiam vero nisi, earum
                    accusantium, ipsum optio veniam velit delectus mollitia eum
                    dolorum deleniti. Ipsa, esse?
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </Container>
    </>
  );
}
