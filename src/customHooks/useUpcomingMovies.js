import { useDispatch } from "react-redux";
import { api_options } from "../utils/constant";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const upcomingMovies = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      api_options
    );
    const result = await upcomingMovies.json();

    dispatch(addUpcomingMovies(result.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
