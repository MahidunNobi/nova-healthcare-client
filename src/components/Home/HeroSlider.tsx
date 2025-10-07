"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Container from "../Container/Container";
import Image from "next/image";

const HeroSlider = () => {
  return (
    <Container>
      <div className="my-4">
        <Swiper
          pagination={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper min-h-14 rounded-lg"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <Image
              src="/hero1.jpg"
              alt="Hero Image One"
              width={3018}
              height={766}
              className="object-cover h-full w-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/hero2.jpg"
              alt="Hero Image One"
              width={3018}
              height={766}
              className="object-cover h-full w-auto"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default HeroSlider;
