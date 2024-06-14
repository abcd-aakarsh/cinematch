import { useRef } from "react";
import MovieCard from "./Cards/MovieCard";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);
  if (movies?.length === 0) {
    return;
  }
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      <div className="relative px-6    md:px-4">
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
            className="flex overflow-x-scroll    md:px-4 no-scrollbar pb-6 md:pb-12 w-full"
          >
            <div className="flex gap-2 md:gap-5">
              {movies ? (
                movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-2 z-10 p-1 md:p-2  top-2/4 -translate-y-1/2  rounded-full  bg-opacity-25 backdrop-filter backdrop-blur-lg shadow-lg bg-white text-black focus:outline-none"
          >
            <FaCircleArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieList;
