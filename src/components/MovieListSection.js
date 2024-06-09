import { useSelector } from "react-redux";

import MovieList from "./MovieList";
import MovieListHorz from "./MovieListHorz";
import SeriesList from "./SeriesList";
import { useState } from "react";

const MovieListSection = () => {
  const [loadMovie, setLoadMovie] = useState(true);
  const movies = useSelector((store) => store.movies);
  const tv = useSelector((store) => store.tv);
  const handleLoad = () => {
    setLoadMovie(!loadMovie);
  };
  return (
    <>
      <div className=" pt-4 bg-gray-800 text-white">
        <div className="absolute right-6 flex ">
          <button
            onClick={() => {
              setLoadMovie(true);
            }}
            className={
              loadMovie
                ? "px-2 py-1 bg-teal-600 border-2  rounded-l-3xl border-white "
                : "px-2 py-1 bg-teal-600 border-2  rounded-l-3xl border-black  "
            }
          >
            Movies
          </button>
          <button
            onClick={handleLoad}
            className={
              loadMovie
                ? "px-2 py-1 bg-sky-600  border-2 border-black rounded-r-3xl"
                : "px-2 py-1 bg-sky-600  border-2 border-white rounded-r-3xl"
            }
          >
            Tv Series
          </button>
        </div>
        {loadMovie ? (
          <div>
            <MovieListHorz title={"Upcoming"} movies={movies?.UpcomingMovies} />
            <MovieList title={"NowPlaying"} movies={movies?.NowPlayingMovies} />
            <MovieList title={"Top Rated"} movies={movies?.TopRatedMovies} />
          </div>
        ) : (
          <div>
            <SeriesList
              title={"Top Rated Tv Series"}
              series={tv?.TopRatedSeries}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default MovieListSection;
