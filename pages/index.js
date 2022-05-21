import { useEffect, useState } from "react";
import VerticalSlider from "../components/verticalSlider";
import HorizontalSlider from "../components/horizontalSlider";

export default function Home() {
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
      {width < 767 ? <VerticalSlider /> : <HorizontalSlider />}
    </>
  );
}
