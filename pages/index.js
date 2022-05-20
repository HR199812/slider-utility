import styles from "../styles/Home.module.css";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

// const BOTTOM_POINT = window.innerWidth - 30;

export default function Home() {
  const [width, setWidth] = useState(); // default width, detect on server.
  
  const [bottom, setBottom] = useState();
  const [left, setLeft] = useState();

  const elementSize = useRef();

  let [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = getBounds();

  function getBounds() {
    if (width != "undefined" && width < 767) {
      return useDrag(
        ({ down, offset: [x, y] }) => api.start({ x, y, immediate: down }),
        {
          bounds: { right: 0, top: 20, left: 0, bottom: bottom },
        }
      );
    } else {
      return useDrag(
        ({ down, offset: [x, y] }) => api.start({ x, y, immediate: down }),
        {
          bounds: { right: -20, bottom: 0, top: 0, left: left },
        }
      );
    }
  }

  const handleResize = () => {
    x = 0;
    y = 0;
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);

    setBottom(elementSize.current.getBoundingClientRect().bottom - 20);
    console.log(elementSize.current.getBoundingClientRect().left);
    setLeft(
      elementSize.current.getBoundingClientRect().left - window.innerWidth
    );
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

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
            className={styles.containerOne}
          >
            <img
              className={styles.image}
              src="https://api.exhibitacollection.com/wp-content/uploads/2021/12/Desktop-artwork.jpg"
            ></img>
            <div className={styles.AppHandleContainer}>
              <div className={styles.AppHandle} />
            </div>
          </animated.div>
          <div className={styles.containerTwo}>
            <div ref={elementSize} className={styles.containerTwoImage}>
              <img
                className={styles.image}
                src="https://api.exhibitacollection.com/wp-content/uploads/2021/12/croc-on-crc-wallet-product-D.jpg"
              ></img>
            </div>
          </div>
        </div>
    </>
  );
}
