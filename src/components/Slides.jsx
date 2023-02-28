import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function Slides() {
    return (
      <div className="m-4 p-4 border border-black rounded-lg">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <Image
              className="object-fill w-full h-96"
              src="https://i.ibb.co/F3Jn8Tm/Wallpaper.jpg"
              alt="image slide 1"
              width="100"
              height="100"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="object-fill w-full h-96"
              src="https://i.ibb.co/F3Jn8Tm/Wallpaper.jpg"
              alt="image slide 2"
              width="100"
              height="100"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="object-fill w-full h-96"
              src="https://i.ibb.co/F3Jn8Tm/Wallpaper.jpg"
              alt="image slide 3"
              width="100"
              height="100"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
}