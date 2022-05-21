import styles from "../styles/Home.module.css";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

const VerticalSlider = () => {
  const [bottom, setBottom] = useState();

  const elementSize = useRef();

  let [{ x, y }, api] = useSpring(() => ({ x: 0, y: 50 }));

  const bind = useDrag(
    ({ down, offset: [x, y] }) => api.start({ x, y, immediate: down }),
    {
      bounds: { right: 0, top: 0, left: 0, bottom: bottom },
    }
  );

  useEffect(() => {
    setBottom(elementSize.current.getBoundingClientRect().bottom - 20);
  }, [bottom]);

  return (
    <>
      <div>
        <animated.div
          {...bind()}
          style={{
            x,
            y,
            touchAction: "pan-x",
          }}
          className="container-one"
        >
          <img
            className="image"
            src="https://api.exhibitacollection.com/wp-content/uploads/2021/12/Desktop-artwork.jpg"
          ></img>
          <div className="app-handle-container">
            <div className="app-handle" />
          </div>
        </animated.div>
        <div className="container-two">
          <div ref={elementSize} className="container-two-image">
            <img
              className="image"
              src="https://api.exhibitacollection.com/wp-content/uploads/2021/12/croc-on-crc-wallet-product-D.jpg"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalSlider;
