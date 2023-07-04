import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger";
import movieSlice from "./movieSlice";

export const store = configureStore({
  reducer: {
    movieStore: movieSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
