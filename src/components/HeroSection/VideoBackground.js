import { useState, useEffect } from "react";
import bgHero from "../../assets/hero5.png";
import bgherom from "../../assets/herom5.png";

const VideoBackground = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full">
      <img
        className={
          isMobile
            ? "w-full  bg-gradient-to-l to-black h-[75vh]"
            : "w-full h-[100vh]"
        }
        src={bgHero}
        alt="bg"
      />
    </div>
  );
};

export default VideoBackground;
