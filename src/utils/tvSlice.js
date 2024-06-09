import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
  name: "tv",
  initialState: { TopRatedSeries: null },
  reducers: {
    addTopRatedSeries: (state, action) => {
      state.TopRatedSeries = action.payload;
    },
  },
});
export const { addTopRatedSeries } = tvSlice.actions;

export default tvSlice.reducer;
