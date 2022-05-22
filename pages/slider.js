import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, Mousewheel, Parallax } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/parallax";

const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, A11y, Autoplay, Mousewheel, Parallax]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      mousewheel={{ invert: true }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      preloadImages={false}
      loop={true}
      watchSlidesProgress={true}
      speed={1000}
      parallax={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{ transform: `rotate(-90deg)` }}
    >
      <SwiperSlide>
        <div className="item-child-container">
          <div className="item-subchild">
            <img
              data-swiper-parallax={-200}
              src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/3/28/0328192-2590-FCBD-5A018FCFA66A0706.jpg"
              alt="sunrise"
            />
          </div>
          <div className="item-subchild">
            <img
              data-swiper-parallax={-200}
              src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/2/18/0218196-2590-FCBD-5AA19539BBCE5DDF.jpg"
              alt="sunrise"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item-child-container">
          <div className="item-subchild">
            <img
              data-swiper-parallax={-200}
              src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/3/28/0328192-2590-FCBD-5A018FCFA66A0706.jpg"
              alt="sunrise"
            />
          </div>
          <div className="item-subchild">
            <img
              data-swiper-parallax={-200}
              src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/2/18/0218196-2590-FCBD-5AA19539BBCE5DDF.jpg"
              alt="sunrise"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item-child-container">
          <div className="item-subchild">
            <img
              data-swiper-parallax={-200}
              src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/3/28/0328192-2590-FCBD-5A018FCFA66A0706.jpg"
              alt="sunrise"
            />
          </div>
          <div className="item-subchild">
            <img
              data-swiper-parallax={-200}
              src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/2/18/0218196-2590-FCBD-5AA19539BBCE5DDF.jpg"
              alt="sunrise"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
