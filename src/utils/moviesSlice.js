import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    NowPlayingMovies: [],
    UpcomingMovies: [],
    TopRatedMovies: [],
    ActionMovies: [],
    AdventureMovies: [],
    AnimationMovies: [],
    ComedyMovies: [],
    HorrorMovies: [],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.NowPlayingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addActionMovies: (state, action) => {
      state.ActionMovies = action.payload;
    },
    addAdventureMovies: (state, action) => {
      state.AdventureMovies = action.payload;
    },
    addComedyMovies: (state, action) => {
      state.ComedyMovies = action.payload;
    },
    addHorrorMovies: (state, action) => {
      state.HorrorMovies = action.payload;
    },
    addAnimationMovies: (state, action) => {
      state.AnimationMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addUpcomingMovies,
  addTopRatedMovies,
  addAnimationMovies,
  addComedyMovies,
  addHorrorMovies,
  addAdventureMovies,
  addActionMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
