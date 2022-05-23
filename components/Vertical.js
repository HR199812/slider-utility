import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Vertical = () => {
  const [bottom, setBottom] = useState();

  const elementSize = useRef();

  useEffect(() => {
    if (window.innerWidth <= 767 && window.innerWidth >= 695) {
      setBottom(250);
    } else if (window.innerWidth >= 595 && window.innerWidth <= 695) {
      setBottom(220);
    } else if (window.innerWidth >= 545 && window.innerWidth <= 595) {
      setBottom(200);
    } else if (window.innerWidth >= 470 && window.innerWidth <= 545) {
      setBottom(170);
    } else if (window.innerWidth >= 420 && window.innerWidth <= 470) {
      setBottom(150);
    } else if (window.innerWidth >= 390 && window.innerWidth <= 420) {
      setBottom(140);
    }else if (window.innerWidth >= 350 && window.innerWidth <= 390) {
      setBottom(130);
    }
  }, [bottom]);

  return (
    <>
      <div>
        <div className="container-one" ref={elementSize}>
          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: bottom, right: 0, left: 0 }}
            dragElastic={0.5}
            className="container-two"
          >
            <img
              className="image"
              src="https://api.exhibitacollection.com/wp-content/uploads/2021/12/Desktop-artwork.jpg"
            ></img>
            <div className="app-handle-container">
              <div className="app-handle" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Vertical;
