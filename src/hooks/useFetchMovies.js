// 영화API에 HTTP요청을 보내고, 응답을 받아와서 영화데이터를 처리
// 반환값으로는 로딩상태, 영화데이터, 에러정보 등을 포함하는 객체를 반환

import {useState, useEffect, useCallback} from "react";

const useFetchMovies = (url, title) => {
  const [loading, setLoading] = useState(true);
  const [payload, setPayload] = useState(null);
  const [error, setError] = useState("");

  const fetchUrl = useCallback(async () => {
    //로딩
    setLoading(true);
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log("fetchData", json.data);
      setPayload(json.data);
    } catch (err) {
      setError(err);
    }
    //완료
    setLoading(false);
  }, [url]);

  useEffect(() => {
    fetchUrl();
  }, [title, fetchUrl]);

  return {loading, payload, error, fetchUrl};
};

export default useFetchMovies;
