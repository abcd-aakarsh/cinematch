import { createSlice } from "@reduxjs/toolkit";

const movieInfoSlice = createSlice({
  name: "movieInfo",
  initialState: {
    MovieDetails: [],
    MovieCredits: [],
    MovieReviews: [],
    MovieImages: [],
    MovieRecommendations: [],
    MovieSimilar: [],
    MovieTrailer: [],
  },
  reducers: {
    addMovieDetails: (state, action) => {
      state.MovieDetails = action.payload;
    },
    addMovieCredits: (state, action) => {
      state.MovieCredits = action.payload;
    },
    addMovieReviews: (state, action) => {
      state.MovieReviews = action.payload;
    },
    addMovieImages: (state, action) => {
      state.MovieImages = action.payload;
    },
    addMovieRecommendations: (state, action) => {
      state.MovieRecommendations = action.payload;
    },
    addMovieSimilar: (state, action) => {
      state.MovieSimilar = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.MovieTrailer = action.payload;
    },
  },
});
export const {
  addMovieCredits,
  addMovieDetails,
  addMovieReviews,
  addMovieImages,
  addMovieRecommendations,
  addMovieSimilar,
  addMovieTrailer,
} = movieInfoSlice.actions;

export default movieInfoSlice.reducer;
