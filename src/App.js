import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState, useEffect} from "react";
import Detail from "./pages/Detail";
import MainList from "./MainList";


function App() {
   const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year",
      )
        .then(res => res.json())
        .then(json => {
          console.log(json.data.movies);
          setMovies(json.data.movies);
        });
    };
    getMovies();
  }, []);
  console.log("==========");
  console.log("movies", movies);
  return (
    <Router>
      <Routes>
        <Route path="/detail" element={<Detail />} />
        <Route path="/detail" element={<MainList />} />
      </Routes>
    </Router>
  );
}

export default App;
