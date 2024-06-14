import { createSlice } from "@reduxjs/toolkit";

const seriesInfoSlice = createSlice({
  name: "seriesInfo",
  initialState: {
    SeriesDetails: [],
    SeriesCredits: [],
    SeriesSeasons: [],
    SeriesImages: [],
    SeriesReviews: [],
    SeriesRecommendations: [],
    SeriesSimilar: [],
    SeriesTrailer: [],
  },
  reducers: {
    addSeriesDetails: (state, action) => {
      state.SeriesDetails = action.payload;
    },
    addSeriesCredits: (state, action) => {
      state.SeriesCredits = action.payload;
    },
    addSeriesSeasons: (state, action) => {
      state.SeriesSeasons = action.payload;
    },
    addSeriesImages: (state, action) => {
      state.SeriesImages = action.payload;
    },
    addSeriesReviews: (state, action) => {
      state.SeriesReviews = action.payload;
    },
    addSeriesRecommendations: (state, action) => {
      state.SeriesRecommendations = action.payload;
    },
    addSeriesSimilar: (state, action) => {
      state.SeriesSimilar = action.payload;
    },
    addSeriesTrailer: (state, action) => {
      state.SeriesTrailer = action.payload;
    },
  },
});
export const {
  addSeriesDetails,
  addSeriesCredits,
  addSeriesSeasons,
  addSeriesImages,
  addSeriesReviews,
  addSeriesRecommendations,
  addSeriesSimilar,
  addSeriesTrailer,
} = seriesInfoSlice.actions;
export default seriesInfoSlice.reducer;
