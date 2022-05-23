import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

const HorizontalSlider = () => {
  const left = useRef();

  const elementSize = useRef();

  let [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(
    ({ down, offset: [ox, oy] }) =>
      api.start({ x: ox, y: oy, immediate: down }),
    {
      bounds: { right: 0, top: 0, bottom: 0 },
    }
  );

  useEffect(() => {
    // setLeft(elementSize.current.getBoundingClientRect().right - 900);
    left.current.style.left = `-2% !important`;
  }, [left]);

  return (
    <>
      <div>
        <div className="container-one">
          <animated.div
            {...bind()}
            style={{
              x,
              y,
              touchAction: "pan-x",
            }}
            className="container-two"
            ref={left}
          >
            {/* <img
              className="image"
              src="https://api.exhibitacollection.com/wp-content/uploads/2021/12/Desktop-artwork.jpg"
            ></img> */}
            <div className="app-handle-container">
              <div className="app-handle" />
            </div>
          </animated.div>
        </div>
        {/* <div className="container-two">
          <div ref={elementSize} className="container-two-image">
            <img
              className="image"
              src="https://api.exhibitacollection.com/wp-content/uploads/2021/12/croc-on-crc-wallet-product-D.jpg"
            ></img>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default HorizontalSlider;
