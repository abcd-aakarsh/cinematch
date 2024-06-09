import { useDispatch } from "react-redux";
import { api_options } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const playingMovies = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      api_options
    );
    const result = await playingMovies.json();

    dispatch(addNowPlayingMovies(result.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
