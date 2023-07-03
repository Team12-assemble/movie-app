import {configureStore} from "@reduxjs/toolkit";
import {createLogger} from "redux-logger";
import MovieStore from "../redux/MovieStore.jsx";

const logger = createLogger();

const store = configureStore({
  reducer: {
    MovieStore: MovieStore,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
