import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Horizontal = () => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 1440) {
      setLeft(-1225);
    } else if (window.innerWidth >= 1025 && window.innerWidth <= 1440) {
      setLeft(-900);
    } else if (window.innerWidth >= 830 && window.innerWidth <= 1025) {
      setLeft(-720);
    } else if (window.innerWidth >= 767 && window.innerWidth <= 840) {
      setLeft(-650);
    }
  }, [left]);

  return (
    <>
      <div>
        <div className="container-one">
          <motion.div
            drag="x"
            dragConstraints={{ top: 0, bottom: 0, right: 0, left: left }}
            dragElastic={0.5}
            className="container-two"
          >
            <div className="app-handle-container">
              <div className="app-handle" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default Horizontal;
