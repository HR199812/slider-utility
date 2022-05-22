import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
  var dots = window
    .$(".owl-dots")
    .css("position", "absolute")
    .css("bottom", "5px");
  dots.css("left", "calc(50% - " + dots.width() / 2 + "px)");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Slider() {
  const options = {
    loop: true,
    items: 1,
    margin: 0,
    autoplay: true,
    animateOut: "slideOutUp",
    animateIn: "slideInUp",
  };
  return (
    <>
      <div className="app">
        <OwlCarousel
          className="owl-theme"
          {...options}
          style={{ transform: `rotate(-90deg)` }}
        >
          <div className="item">
            <div className="item-child-container">
              <div className="item-subchild">
                <img
                  src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/3/28/0328192-2590-FCBD-5A018FCFA66A0706.jpg"
                  alt="sunrise"
                />
              </div>
              <div className="item-subchild">
                <img
                  src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/2/18/0218196-2590-FCBD-5AA19539BBCE5DDF.jpg"
                  alt="sunrise"
                />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-child-container">
              <div className="item-subchild">
                <img
                  src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/2/18/0218196-2590-FCBD-5AA19539BBCE5DDF.jpg"
                  alt="sunrise"
                />
              </div>
              <div className="item-subchild">
                <img
                  src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/2/18/0218196-2590-FCBD-5AA19539BBCE5DDF.jpg"
                  alt="sunrise"
                />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-child-container">
              <div className="item-subchild">
                <img
                  src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/3/28/0328192-2590-FCBD-5A018FCFA66A0706.jpg"
                  alt="sunrise"
                />
              </div>
              <div className="item-subchild">
                <img
                  src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/2/18/0218196-2590-FCBD-5AA19539BBCE5DDF.jpg"
                  alt="sunrise"
                />
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
}
