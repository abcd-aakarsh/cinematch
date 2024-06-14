import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../utils/constant";
import {
  addSeriesCredits,
  addSeriesDetails,
  addSeriesImages,
  addSeriesRecommendations,
  addSeriesReviews,
  addSeriesSimilar,
  addSeriesTrailer,
} from "../utils/seriesInfoSlice";

export const useSeriesInfo = (id) => {
  const dispatch = useDispatch();
  const getSeriesInfo = () => {
    const getSeriesDetails = async () => {
      const seriesInfo = await fetch(
        `https://api.themoviedb.org/3/tv/${id}`,
        api_options
      );
      const result = await seriesInfo.json();

      dispatch(addSeriesDetails(result));
    };
    const getImages = async () => {
      const SeriesImage = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/images`,
        api_options
      );
      const result = await SeriesImage.json();

      dispatch(addSeriesImages(result.backdrops));
    };
    const getReviews = async () => {
      const seriesReview = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/reviews?language=en-US`,
        api_options
      );
      const result = await seriesReview.json();

      dispatch(addSeriesReviews(result.results));
    };
    const getCreditInfo = async () => {
      const seriesInfo = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`,
        api_options
      );
      const result = await seriesInfo.json();

      dispatch(addSeriesCredits(result));
    };
    const getSeriesSimilar = async () => {
      const seriesSimilar = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/similar`,
        api_options
      );
      const result = await seriesSimilar.json();

      dispatch(addSeriesSimilar(result.results));
    };
    const getSeriesRecommendations = async () => {
      const seriesRecommended = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/recommendations`,
        api_options
      );
      const result = await seriesRecommended.json();

      dispatch(addSeriesRecommendations(result.results));
    };
    const getSeriesTrailer = async () => {
      const seriesTrailer = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/videos`,
        api_options
      );
      const result = await seriesTrailer.json();

      const trailer = result?.results?.find(
        (video) => video.type === "Trailer"
      );
      dispatch(addSeriesTrailer(trailer ? [trailer] : []));
    };
    getSeriesDetails();
    getCreditInfo();
    getImages();
    getReviews();
    getSeriesRecommendations();
    getSeriesSimilar();
    getSeriesTrailer();
  };

  useEffect(() => {
    getSeriesInfo();
  }, [id]);
};
