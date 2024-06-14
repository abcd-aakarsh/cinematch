import { useState, useEffect } from "react";
import bgHero from "../../assets/hero5.png";
import bgm from "../../assets/bgm.jpg";

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
            ? "w-full  bg-gradient-to-b to-black h-[85vh]"
            : "w-full h-[100vh]"
        }
        src={isMobile ? bgm : bgHero}
        alt="bg"
      />
    </div>
  );
};

export default VideoBackground;
