import { useDispatch } from "react-redux";
import { api_options } from "../utils/constant";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

export const useTopRated = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const topRatedMovies = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      api_options
    );
    const result = await topRatedMovies.json();

    dispatch(addTopRatedMovies(result.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};
