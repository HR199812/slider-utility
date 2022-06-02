import React, { useEffect, useState } from "react";
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

export default function mobileslider() {
  const [width, setWidth] = useState(); // default width, detect on server.

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  return (
    <>
      <div className="nav-icon">
        <img
          src="https://api.exhibitacollection.com/wp-content/uploads/2021/08/nav-icon.png"
          width="10%"
          className="mob-slider-nav-icon"
        />
      </div>
      <Swiper
        style={{ height: `100vh !important` }}
        modules={[A11y, Autoplay, Mousewheel, Parallax]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        mousewheel={{ invert: true }}
        preloadImages={false}
        loop={true}
        watchSlidesProgress={true}
        speed={1000}
        parallax={true}
      >
        <SwiperSlide>
          <div>
            <div className="item-subchild-one">
              <img src="../src/croc_on_croc_wallet/Desktop-artwork.jpeg" />
            </div>
            <div className="item-subchild-two">
              <img src="../src/croc_on_croc_wallet/Desktop-artwork.jpeg" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="item-subchild-one">
              <img src="../src/croc_on_croc_wallet/Desktop-artwork.jpeg" />
            </div>
            <div className="item-subchild-two">
              <img src="../src/croc_on_croc_wallet/Desktop-artwork.jpeg" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="item-subchild-one">
              <img src="../src/croc_on_croc_wallet/Desktop-artwork.jpeg" />
            </div>
            <div className="item-subchild-two">
              <img src="../src/croc_on_croc_wallet/Desktop-artwork.jpeg" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="mob-slider-text-title">
        <p className="artwork_mobile_slider-title" style={{ color: "#ffffff" }}>
          <a href="#">
            COLLABORATIONS WITH ARTISTS
            <span className="artwork-title-second">DISCOVER THE ARTISTS</span>
          </a>
        </p>
      </div>
    </>
  );
}
