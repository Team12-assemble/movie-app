import {createSlice} from "@reduxjs/toolkit";
const initialState = {movies: []};

const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    updateMovie: (state, action) => {
      return (state = {
        ...state,
        ...action.payload,
      });
    },
    resetMovie: () => {
      return initialState;
    },
  },
});

export const {updateMovie, resetMovie} = MovieSlice.actions;
export default MovieSlice.reducer;
