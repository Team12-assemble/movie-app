import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  count: 0,
  limit: 0,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    updateMovies: (state, action) => {
      console.log("updateMovies action", action);
      return {...state, ...action.payload};
    },
  },
});

export const {updateMovies, resetMovies} = movieSlice.actions;
export default movieSlice.reducer;
