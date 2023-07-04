import {useState, useEffect, useCallback} from "react";
import {useDispatch} from "react-redux";
import {updateMovies} from "../redux/movieSlice";

const useFetchMovies = (url, title, activePage) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const fetchUrl = useCallback(async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      dispatch(
        updateMovies({
          movies: json.data.movies,
          count: json.data.movie_count,
          limit: json.data.limit,
        }),
      );
    } catch (err) {
      setError(err);
    }
    //완료
    setLoading(false);
  }, [url, dispatch]);

  useEffect(() => {
    fetchUrl();
  }, [title, activePage, fetchUrl]);

  return {loading, error};
};

export default useFetchMovies;
