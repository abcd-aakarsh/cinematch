import Headerrr from "../Headerrr";
import Footer from "../Footer";
import { RadialTextGradient } from "react-text-gradients-and-animations";
import { useState } from "react";
import { api_options } from "../../utils/constant";
import MovieCard from "../Cards/MovieCard";
import SeriesCard from "../Cards/SeriesCard";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [resultm, setResultsm] = useState([]);
  const [results, setResultss] = useState([]);
  window.scrollTo(0, 0);
  const searchedMovie = async () => {
    if (!query) return;
    const searchMovie = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&sort_by=popularity.desc`,
      api_options
    );
    const searchSeries = await fetch(
      `https://api.themoviedb.org/3/search/tv?query=${query}&sort_by=popularity.desc`,
      api_options
    );
    const resultm = await searchMovie.json();
    const results = await searchSeries.json();

    setResultsm(resultm.results);
    setResultss(results.results);
  };

  return (
    <>
      <Headerrr />
      <main className="max-w-full mx-auto min-h-screen  bg-gray-800 text-black">
        <div className="max-w-[1420px] mx-auto pt-24 pb-8 text-center px-5">
          <div className="mb-8">
            <RadialTextGradient
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl "
              shape={"ellipse"}
              position={"right"}
              colors={["#E57373", "#d32f2f"]}
              animate={true}
              animateDirection={"horizontal"}
              animateDuration={6}
            >
              Discover Your Next Favorite Movie/Series
            </RadialTextGradient>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              searchedMovie();
            }}
            className=" w-full lg:w-2/3 sm:px-8 md:px-16 lg:px-24 text-gray-200  flex mx-auto relative "
          >
            <div className="relative w-full flex items-center border rounded-full">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className="w-full border-none outline-none py-2 text-gray-700 border-black cursor-pointer placeholder:text-gray-700 hover:placeholder-black px-4 rounded-full"
                placeholder="Find your next favorite movie/series"
              />
              <button className="px-6 py-2 bg-red-700 border border-black rounded-full outline-none border-none hover:text-gray-300 absolute right-0 ">
                Search
              </button>
            </div>
          </form>
        </div>
        {resultm.length > 0 && (
          <div className="max-w-[1320px] mx-auto pb-4 ">
            <h3 className="text-gray-200 text-center text-2xl md:text-3xl mb-8">
              Search Results for <span className="text-amber-700">{query}</span>
            </h3>

            <div>
              <p className="text-purple-200 text-center text-2xl md:text-3xl bold px-5 pt-2 pb-4 ">
                Series
              </p>
              <div className="flex flex-wrap max-w-[1480px] justify-center px-4 mx-auto gap-x-6 sm:gap-x-4 gap-y-4 md:gap-4 mb-8 ">
                {results.map((series) => (
                  <SeriesCard key={series.id} series={series} />
                ))}
              </div>
              <p className="text-purple-200 text-center text-2xl  md:text-3xl bold px-5 pt-2 pb-4 ">
                Movies
              </p>
              <div className="flex flex-wrap max-w-[1480px] justify-center px-4 mx-auto gap-x-6 sm:gap-x-4 gap-y-4 md:gap-4 ">
                {resultm.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default SearchPage;
