import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import {
  Pagination,
  A11y,
  Autoplay,
  Mousewheel,
  Parallax,
  Navigation,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/parallax";
import "swiper/css/navigation";

export default function slider() {

  function showSubchildText(){

  }
  function hideSubchildText(){

  }
  return (
    <>
      <Swiper
        modules={[Pagination, A11y, Autoplay, Mousewheel, Parallax, Navigation]}
        navigation={true}
        spaceBetween={10}
        slidesPerView={3}
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
      >
        <SwiperSlide>
          <div
            className="item-child-container"
            onMouseEnter={showSubchildText}
            onMouseLeave={hideSubchildText}
          >
            <img src="https://api.exhibitacollection.com/wp-content/uploads/2021/12/croc-on-crc-wallet-product-D.jpg" />
            <div className="item-subchild">Hi</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item-child-container">
            <img src="https://api.exhibitacollection.com/wp-content/uploads/2021/12/croc-on-crc-wallet-product-D.jpg" />
            <div className="item-subchild">Hi</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item-child-container">
            <img src="https://api.exhibitacollection.com/wp-content/uploads/2021/12/croc-on-crc-wallet-product-D.jpg" />
            <div className="item-subchild">Hi</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
