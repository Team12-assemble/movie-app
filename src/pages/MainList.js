import MovieList from "../components/MovieList";
import {useLocation} from "react-router-dom";
import "../styles/MainList.scss";
import useFetchMovies from "../hooks/useFetchMovies";

function MainList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("title");

  const url = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`;
  const searchUrl = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&query_term=${title}`;

  const {loading, payload, error} = useFetchMovies(
    !title ? url : searchUrl,
    title,
  );
  if (error) console.log(error);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="movie-list">
          <MovieList movies={payload.movies} />
        </div>
      )}
    </>
  );
}

export default MainList;
