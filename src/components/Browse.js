import { useNowPlayingMovies } from "../customHooks/useNowPlayingMovies";
import { useUpcomingMovies } from "../customHooks/useUpcomingMovies";
import { useTopRated } from "../customHooks/useTopRated";
import HeaderMain from "./HeaderMain";

import { useTopRatedSeries } from "../customHooks/useTopRatedSeries";
import HomePage from "./Pages/HomePage";
import Headerrr from "./Headerrr";

const Browse = () => {
  useNowPlayingMovies();
  useUpcomingMovies();
  useTopRated();
  useTopRatedSeries();

  return (
    <div className="no-scrollbar overflow-y-scroll">
      <Headerrr />
      <HomePage />
    </div>
  );
};

export default Browse;
