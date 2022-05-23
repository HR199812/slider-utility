import { useEffect, useState } from "react";
import Horizontal from "../components/Horizontal";
import Vertical from "../components/Vertical";

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

  return <>{width < 767 ? <Vertical /> : <Horizontal />}</>;
}
