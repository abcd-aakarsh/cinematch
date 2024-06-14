import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
  name: "tv",
  initialState: {
    TopRatedSeries: [],
    AiringTodaySeries: [],
    PopularSeries: [],
    OnAirSeries: [],
    Anime: [],
  },
  reducers: {
    addTopRatedSeries: (state, action) => {
      state.TopRatedSeries = action.payload;
    },
    addAiringTodaySeries: (state, action) => {
      state.AiringTodaySeries = action.payload;
    },
    addPopularSeries: (state, action) => {
      state.PopularSeries = action.payload;
    },
    addOnAirSeries: (state, action) => {
      state.OnAirSeries = action.payload;
    },
    addAnime: (state, action) => {
      state.Anime = action.payload;
    },
  },
});
export const {
  addTopRatedSeries,
  addAiringTodaySeries,
  addOnAirSeries,
  addPopularSeries,
  addAnime,
} = tvSlice.actions;

export default tvSlice.reducer;
