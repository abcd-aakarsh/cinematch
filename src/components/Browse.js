import { useNowPlayingMovies } from "../customHooks/useNowPlayingMovies";
import { useUpcomingMovies } from "../customHooks/useUpcomingMovies";
import { useTopRated } from "../customHooks/useTopRated";
import HeaderMain from "./HeaderMain";

import { useTopRatedSeries } from "../customHooks/useTopRatedSeries";
import HomePage from "./Pages/HomePage";

const Browse = () => {
  useNowPlayingMovies();
  useUpcomingMovies();
  useTopRated();
  useTopRatedSeries();

  return (
    <div className="no-scrollbar overflow-y-scroll">
      <HeaderMain />
      <HomePage />
    </div>
  );
};

export default Browse;
