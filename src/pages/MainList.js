import {useState} from "react";
import MovieList from "../components/MovieList";
import {useLocation} from "react-router-dom";
import "../styles/MainList.scss";
import useFetchMovies from "../hooks/useFetchMovies";
import Pagination from "../components/Pagination";
import LiveChat from "../components/LiveChat";
import {useSelector} from "react-redux";

function MainList() {
  const [activePage, setActivePage] = useState(1);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("title");
  // redux로 가져온 무비 데이터
  const {movies} = useSelector(state => state.MovieStore);

  const url = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`;
  const searchUrl = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&query_term=${title}`;
  const activeUrl = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&page=${activePage}`;

  console.log(movies);
  const {loading, error} = useFetchMovies(
    title ? searchUrl : activePage ? activeUrl : url,
    title,
  );
  if (error) console.log(error);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="movie-list">
            <MovieList movies={movies.movies} />
          </div>
          <LiveChat />
          <Pagination
            page={{count: movies.movie_count, limit: movies.limit}}
            setActivePage={setActivePage}
            activePage={activePage}
          />
        </>
      )}
    </>
  );
}

export default MainList;
