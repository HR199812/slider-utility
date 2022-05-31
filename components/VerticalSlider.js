import styles from "../styles/Home.module.css";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

const VerticalSlider = () => {
  const [bottom, setBottom] = useState();

  const posHandle = useSpring({ y: 0 });

  const elementSize = useRef();

  // let [{ x, y }, api] = useSpring(() => ({ x: 0, y: 50 }));

  // const bind = useDrag(
  //   ({ down, offset: [x, y] }) => api.start({ x, y, immediate: down }),
  //   {
  //     bounds: { right: 0, top: 0, left: 0, bottom: bottom },
  //   }
  // );

  const bindHandle = useDrag(
    (params) => {
      posHandle.y.set(params.xy[1]);
    },
    {
      bounds: { top: 0, bottom: 0, right: 0 },
    }
  );

  useEffect(() => {
    // setBottom(elementSize.current.getBoundingClientRect().bottom - 20);
  }, [bottom]);

  return (
    <>
      <div>
        <div className="container-one">
          <animated.div
            {...bindHandle()}
            style={{
              y: posHandle.y,
              touchAction: "none",
            }}
            className="app-handle-container"
          >
            <div className="app-handle-vertical" />
          </animated.div>
          <animated.div
            style={{
              y: posHandle.y,
            }}
            className="container-two"
          ></animated.div>
        </div>
      </div>
    </>
  );
};

export default VerticalSlider;
