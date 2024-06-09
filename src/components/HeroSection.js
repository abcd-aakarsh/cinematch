import { useSelector } from "react-redux";
import VideoBackground from "./HeroSection/VideoBackground";
import VideoTitle from "./HeroSection/VideoTitle";
const HeroSection = () => {
  return (
    <>
      <div>
        <VideoTitle />
        <VideoBackground />
      </div>
    </>
  );
};
export default HeroSection;
