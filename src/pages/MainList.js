import {useState} from "react";
import MovieList from "../components/MovieList";
import {useLocation} from "react-router-dom";
import "../styles/MainList.scss";
import useFetchMovies from "../hooks/useFetchMovies";
import Pagination from "../components/Pagination";
import LiveChat from "../components/LiveChat";

function MainList() {
  const [activePage, setActivePage] = useState(1);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("title");

  const url = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`;
  const searchUrl = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&query_term=${title}`;
  const activeUrl = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&page=${activePage}`;

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
            <MovieList />
          </div>
          <LiveChat />
          <Pagination setActivePage={setActivePage} activePage={activePage} />
        </>
      )}
    </>
  );
}

export default MainList;
