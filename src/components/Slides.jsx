import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.css";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";

SwiperCore.use([Navigation, Autoplay]);

export default function Slides() {
  return (
    <div className="m-4 p-4 border border-black rounded-lg">
      <Swiper
        navigation={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            className="object-cover w-full h-96"
            src="https://i.ibb.co/vsNYVX0/2103760.jpg"
            alt="image slide 1"
            width="1200"
            height="1200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="object-cover w-full h-96"
            src="https://i.ibb.co/sy3dwjc/image2.jpg"
            alt="image slide 2"
            width="1200"
            height="1200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="object-cover w-full h-96"
            src="https://i.ibb.co/gjJdHvS/image3.jpg"
            alt="image slide 3"
            width="1200"
            height="1200"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}