import {useState, useEffect} from "react";

function App() {
  // movie data가 담길 state
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
  return <div className="App"></div>;
}

export default App;
