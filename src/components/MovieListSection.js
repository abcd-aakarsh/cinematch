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
      <div className=" pt-4 bg-gray-800 relative max-w-full mx-auto  text-gray-200">
        <div className="absolute top-9 right-4 flex ">
          <button
            onClick={() => {
              setLoadMovie(true);
            }}
            className={
              loadMovie
                ? "px-1 py-1 md:px-2 md:py-1 z-30 bg-teal-600 border-2  rounded-l-3xl border-white "
                : "md:px-2 px-1 py-1 md:py-1 z-30 bg-teal-600 border-2  rounded-l-3xl border-black  "
            }
          >
            Movies
          </button>
          <button
            onClick={handleLoad}
            className={
              loadMovie
                ? "md:px-2 px-1 py-1 md:py-1 z-30 bg-sky-600  border-2 border-black rounded-r-3xl"
                : "md:px-2 px-1 py-1 md:py-1 z-30 bg-sky-600  border-2 border-white rounded-r-3xl"
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
            <MovieList title={"Action"} movies={movies?.ActionMovies} />
            <MovieList title={"Adventure"} movies={movies?.AdventureMovies} />
            <MovieList title={"Animation"} movies={movies?.AnimationMovies} />
            <MovieList title={"Comedy"} movies={movies?.ComedyMovies} />
            <MovieList title={"Horror"} movies={movies?.HorrorMovies} />
          </div>
        ) : (
          <div>
            <SeriesList title={"On Air Shows"} series={tv?.OnAirSeries} />
            <SeriesList title={"Popular Shows"} series={tv?.PopularSeries} />
            <SeriesList title={"Airing Today "} series={tv?.PopularSeries} />
            <SeriesList
              title={"Top Rated Tv Series"}
              series={tv?.TopRatedSeries}
            />
            <SeriesList title={"Anime"} series={tv?.Anime} />
          </div>
        )}
      </div>
    </>
  );
};

export default MovieListSection;
