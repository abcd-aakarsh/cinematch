import { useEffect } from "react";
import { api_options } from "../utils/constant";
import { useDispatch } from "react-redux";
import {
  addMovieCredits,
  addMovieDetails,
  addMovieReviews,
  addMovieImages,
  addMovieRecommendations,
  addMovieSimilar,
  addMovieTrailer,
} from "../utils/movieInfoSlice";

export const useMovieInfo = (id) => {
  const dispatch = useDispatch();
  const getMovieInfo = () => {
    const getActorInfo = async () => {
      const movieInfo = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
        api_options
      );
      const result = await movieInfo.json();

      dispatch(addMovieCredits(result));
    };
    const getReviews = async () => {
      const movieReview = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`,
        api_options
      );
      const result = await movieReview.json();

      dispatch(addMovieReviews(result.results));
    };
    const getImages = async () => {
      const movieImage = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/images`,
        api_options
      );
      const result = await movieImage.json();

      dispatch(addMovieImages(result.backdrops));
    };
    const getMovieDetails = async () => {
      const movieInfo = await fetch(
        `https://api.themoviedb.org/3/movie/${id}`,
        api_options
      );
      const result = await movieInfo.json();

      dispatch(addMovieDetails(result));
    };
    const getMovieSimilar = async () => {
      const movieSimilar = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar`,
        api_options
      );
      const result = await movieSimilar.json();

      dispatch(addMovieSimilar(result.results));
    };
    const getMovieRecommendations = async () => {
      const movieRecommended = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations`,
        api_options
      );
      const result = await movieRecommended.json();

      dispatch(addMovieRecommendations(result.results));
    };
    const getMovieTrailer = async () => {
      const movieTrailer = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        api_options
      );
      const result = await movieTrailer.json();

      const trailer = result?.results?.find(
        (video) => video.type === "Trailer"
      );
      dispatch(addMovieTrailer(trailer ? [trailer] : []));
    };
    getMovieRecommendations();
    getActorInfo();
    getReviews();
    getMovieDetails();
    getImages();
    getMovieSimilar();
    getMovieTrailer();
  };

  useEffect(() => {
    getMovieInfo();
  }, [id]);
};
