import { useDispatch } from "react-redux";
import { api_options } from "../utils/constant";
import {
  addAiringTodaySeries,
  addAnime,
  addOnAirSeries,
  addPopularSeries,
  addTopRatedSeries,
} from "../utils/tvSlice";
import { useEffect } from "react";

export const useTopRatedSeries = () => {
  const dispatch = useDispatch();
  const getSeries = () => {
    const getTopRatedSeries = async () => {
      const topRatedSeries = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated",
        api_options
      );
      const result = await topRatedSeries.json();

      dispatch(addTopRatedSeries(result.results));
    };
    const getOnAirSeries = async () => {
      const onAirSeries = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air",
        api_options
      );
      const result = await onAirSeries.json();

      dispatch(addOnAirSeries(result.results));
    };
    const getPopularSeries = async () => {
      const popular = await fetch(
        "https://api.themoviedb.org/3/tv/popular",
        api_options
      );
      const result = await popular.json();

      dispatch(addPopularSeries(result.results));
    };
    const getAiringSeries = async () => {
      const airing = await fetch(
        "https://api.themoviedb.org/3/tv/popular",
        api_options
      );
      const result = await airing.json();

      dispatch(addAiringTodaySeries(result.results));
    };
    const getAnime = async () => {
      const anime = await fetch(
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=16&with_origin_country=JP",
        api_options
      );
      const result = await anime.json();

      dispatch(addAnime(result.results));
    };
    getOnAirSeries();
    getTopRatedSeries();
    getPopularSeries();
    getAiringSeries();
    getAnime();
  };
  useEffect(() => {
    getSeries();
  }, []);
};
