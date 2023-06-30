import MovieList from "../components/MovieList";
import {useLocation} from "react-router-dom";
import "../styles/MainList.scss";
import useFetchMovies from "../hooks/useFetchMovies";
import Pagination from "../components/Pagination";

function MainList() {
  const [page, setPage] = useState({
    count: 0,
    limit: 0,
  });
  const [activePage, setActivePage] = useState(1);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("title");

//   const url = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`;
//   const searchUrl = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&query_term=${title}`;

//   const {loading, payload, error} = useFetchMovies(
//     !title ? url : searchUrl,
//     title,
//   );
//   if (error) console.log(error);

  useEffect(() => {
    fetch(
      title
        ? `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&query_term=${title}`
        : activePage
        ? `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&page=${activePage}`
        : `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`,
    )
      .then(response => response.json())
      .then(json => {
        setMovies(json.data.movies);
        setLoading(false);
        setPage({
          count: json.data.movie_count,
          limit: json.data.limit,
        });
      });
  }, [activePage, title]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
//         <div className="movie-list">
//           <MovieList movies={payload.movies} />
//         </div>
        <>
          <div className="movie-list">
            <MovieList movies={movies} />
          </div>
          <Pagination
            page={page}
            setActivePage={setActivePage}
            activePage={activePage}
          />
        </>
      )}
    </>
  );
}

export default MainList;
