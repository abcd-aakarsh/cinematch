import { useRef } from "react";
import SeriesCard from "./Cards/SeriesCard";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const SeriesList = ({ title, series }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      <div className="relative px-6 pt-6  md:px-4">
        <h1 className="text-2xl items-center md:text-2xl font-bold w-full  md:px-4 pb-8 md:py-5">
          {title}
        </h1>
        <div className="flex items-center">
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-2/4 -translate-y-1/2 z-10 p-1 md:p-2  bg-opacity-25 backdrop-filter backdrop-blur-lg shadow-lg bg-white text-black rounded-full focus:outline-none"
          >
            <FaCircleArrowLeft />
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-x-scroll md:px-4 no-scrollbar pb-6 md:pb-12 w-full"
          >
            <div className="flex gap-2 md:gap-5">
              {series.length ? (
                series.map((series) => (
                  <SeriesCard key={series.id} series={series} />
                ))
              ) : (
                <div>
                  <h2 className="text-xl text-gray-300 font-medium w-full px-14 py-6 text-center">
                    No Series Available
                  </h2>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-2 top-2/4 -translate-y-1/2 z-10 p-1 md:p-2  bg-opacity-25 backdrop-filter backdrop-blur-lg shadow-lg bg-white text-black rounded-full focus:outline-none"
          >
            <FaCircleArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default SeriesList;
