import { useRef } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import ImageCard from "./ImageCard";

const ImageList = ({ movie, movieImages }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative p-4 py-8 bg-gradient-to-r from-black to-black">
      <div className=" mb-8">
        <h2 className="text-2xl md:text-2xl px-3 font-bold text-white mb-14">
          Images of {movie}
        </h2>
      </div>
      <div className="flex items-center">
        <button
          onClick={scrollLeft}
          className="absolute left-2 z-10 p-2 bg-opacity-25 backdrop-filter  backdrop-blur-lg shadow-lg bg-white text-black rounded-full focus:outline-none"
        >
          <FaCircleArrowLeft />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar gap-8 pb-4 w-full"
        >
          <div className="flex gap-2 md:gap-4 px-2">
            {movieImages?.map((a) => (
              <ImageCard key={a?.file_path} image={a?.file_path} />
            ))}
          </div>
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-2 z-10 p-2 bg-opacity-25 backdrop-filter backdrop-blur-lg shadow-lg bg-white text-black   rounded-full focus:outline-none"
        >
          <FaCircleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ImageList;
