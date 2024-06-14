import { useDispatch } from "react-redux";
import { api_options } from "../utils/constant";
import {
  addActionMovies,
  addAdventureMovies,
  addAnimationMovies,
  addComedyMovies,
  addHorrorMovies,
  addTopRatedMovies,
} from "../utils/moviesSlice";
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
  const getActionMovies = async () => {
    const actionMovies = await fetch(
      "https://api.themoviedb.org/3/discover/movie?&with_genres=28",
      api_options
    );
    const result = await actionMovies.json();

    dispatch(addActionMovies(result.results));
  };
  const getAdventureMovies = async () => {
    const adventureMovies = await fetch(
      "https://api.themoviedb.org/3/discover/movie?&with_genres=12",
      api_options
    );
    const result = await adventureMovies.json();

    dispatch(addAdventureMovies(result.results));
  };
  const getAnimationMovies = async () => {
    const animationMovies = await fetch(
      "https://api.themoviedb.org/3/discover/movie?&with_genres=16",
      api_options
    );
    const result = await animationMovies.json();

    dispatch(addAnimationMovies(result.results));
  };
  const getComedyMovies = async () => {
    const comedyMovies = await fetch(
      "https://api.themoviedb.org/3/discover/movie?&with_genres=35",
      api_options
    );
    const result = await comedyMovies.json();

    dispatch(addComedyMovies(result.results));
  };
  const getHorrorMovies = async () => {
    const horrorMovies = await fetch(
      "https://api.themoviedb.org/3/discover/movie?&with_genres=27",
      api_options
    );
    const result = await horrorMovies.json();

    dispatch(addHorrorMovies(result.results));
  };

  getActionMovies();
  getAdventureMovies();
  getComedyMovies();
  getHorrorMovies();
  getAnimationMovies();
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};
