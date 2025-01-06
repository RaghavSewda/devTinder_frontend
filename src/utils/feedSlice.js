import { createSlice } from "@reduxjs/toolkit";

const feedSLice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => action.payload,
    removeFeed: () => null,
  },
});

export const { addFeed } = feedSLice.actions;
export default feedSLice.reducer;
