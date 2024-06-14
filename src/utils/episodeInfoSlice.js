import { createSlice } from "@reduxjs/toolkit";

const episodeInfoSlice = createSlice({
  name: "episodeInfo",
  initialState: {
    EpisodeDetails: [],
  },
  reducers: {
    addEpisodeDetails: (state, action) => {
      state.EpisodeDetails = action.payload;
    },
  },
});
export const { addEpisodeDetails } = episodeInfoSlice.actions;
export default episodeInfoSlice.reducer;
