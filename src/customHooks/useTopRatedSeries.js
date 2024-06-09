import { useDispatch } from "react-redux";
import { api_options } from "../utils/constant";
import { addTopRatedSeries } from "../utils/tvSlice";
import { useEffect } from "react";

export const useTopRatedSeries = () => {
  const dispatch = useDispatch();

  const getTopRatedSeries = async () => {
    const topRatedSeries = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated",
      api_options
    );
    const result = await topRatedSeries.json();

    dispatch(addTopRatedSeries(result.results));
  };
  useEffect(() => {
    getTopRatedSeries();
  }, []);
};
