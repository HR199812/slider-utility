import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, A11y, Autoplay, Mousewheel, Parallax } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/parallax";

export default function slider() {
  return (
    <>
      <Swiper
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
              <img src="https://api.exhibitacollection.com/wp-content/uploads/2021/12/croc-on-crc-wallet-product-D.jpg" />
            </div>
            <div className="item-subchild">
              <img src="https://api.exhibitacollection.com/wp-content/uploads/2021/12/Desktop-artwork.jp" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item-child-container">
            <div className="item-subchild">
              <img src="https://api.exhibitacollection.com/wp-content/uploads/2021/12/Desktop-artwork.jp" />
            </div>
            <div className="item-subchild">
              <img src="https://api.exhibitacollection.com/wp-content/uploads/2021/12/croc-on-crc-wallet-product-D.jpg" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item-child-container">
            <div className="item-subchild">
              <img src="https://api.exhibitacollection.com/wp-content/uploads/2021/12/croc-on-crc-wallet-product-D.jpg" />
            </div>
            <div className="item-subchild">
              <img src="https://api.exhibitacollection.com/wp-content/uploads/2021/12/Desktop-artwork.jp" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
