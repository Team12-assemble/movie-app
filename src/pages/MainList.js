import React, {useState, useEffect} from "react";
import MovieList from "../components/MovieList";
import {useLocation} from "react-router-dom";
import "../styles/MainList.scss";

function MainList() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("title");

  useEffect(() => {
    fetch(
      !title
        ? `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        : `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&query_term=${title}`,
    )
      .then(response => response.json())
      .then(json => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, [title]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="movie-list">
          <MovieList movies={movies} />
        </div>
      )}
    </>
  );
}

export default MainList;
