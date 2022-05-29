import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

const HorizontalSlider = () => {
  const BOTTOM_POINT = 0;
  const left = useRef();

  const elementSize = useRef();

  const posHandle = useSpring({ x: 0 });
  let [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(
    ({ down, offset: [ox, oy] }) =>
      api.start({ x: ox, y: oy, immediate: down }),
    {
      bounds: { right: 0, top: 0, bottom: 0 },
    }
  );

  const bindHandle = useDrag(
    (params) => {
      posHandle.x.set(params.offset[0]);
    },
    {
      bounds: { top: 0, right: 0, bottom: 0 },
    }
  );

  useEffect(() => {
    BOTTOM_POINT = window.innerHeight - 30;
    // setLeft(elementSize.current.getBoundingClientRect().right - 900);
    left.current.style.left = `-2% !important`;
  }, [left]);

  return (
    <>
      <div>
        <div className="container-one">
          <animated.div
            {...bindHandle()}
            style={{
              x: posHandle.x,
              touchAction: "none",
            }}
            className="app-handle-container"
          >
            <div className="app-handle" />
          </animated.div>
          <animated.div
            style={{
              x: posHandle.x,
            }}
            className="container-two"
            ref={left}
          ></animated.div>
        </div>
      </div>
    </>
  );
};
export default HorizontalSlider;
