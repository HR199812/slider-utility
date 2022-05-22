import React from "react";
// Import Swiper React components
import { Pagination, A11y, Autoplay, Mousewheel, Parallax } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/parallax";

const MyOwlCarousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, A11y, Autoplay, Mousewheel, Parallax]}
      spaceBetween={-10}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      mousewheel={{ invert: true }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      }}
      parallax={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{ transform: `rotate(-90deg)` }}
      preloadImages={false}
      loop={true}
      watchSlidesProgress={true}
      speed={2000}
    >
      <SwiperSlide>
        <img
          src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/3/28/0328192-2590-FCBD-5A018FCFA66A0706.jpg"
          alt="sunrise"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/2/18/0218196-2590-FCBD-5AA19539BBCE5DDF.jpg"
          alt="sunrise"
        />
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};
export default MyOwlCarousel;
