// 영화API에 HTTP요청을 보내고, 응답을 받아와서 영화데이터를 처리
// 반환값으로는 로딩상태, 영화데이터, 에러정보 등을 포함하는 객체를 반환

import {useState, useEffect, useCallback} from "react";
import {useDispatch} from "react-redux";
import {updateMovie} from "../redux/MovieStore.jsx";

const useFetchMovies = (url, title, activePage) => {
  const [loading, setLoading] = useState(true);
  // const [payload, setPayload] = useState(null);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const fetchUrl = useCallback(async () => {
    // setLoading(true);
    try {
      const response = await fetch(url);
      const json = await response.json();
      // setPayload(json.data);
      dispatch(updateMovie({movies: json.data, isLoading: false}));
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
