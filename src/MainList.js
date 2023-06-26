import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function MainList() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`,
    )
      .then(response => response.json())
      .then(json => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map(movie => (
          <div key={movie.id}>
            <Link
              to={`/detail/${movie.id}`}
              state={{
                year: movie.year,
                title: movie.title,
                poster: movie.large_cover_image,
                runtime: movie.runtime,
                genres: movie.genres,
                rating: movie.rating,
                summary: movie.summary,
              }}
            >
              <img src={movie.medium_cover_image} alt="영화 포스터" />
              <h2 className="hover_title">{movie.title}</h2>
              <p className="hover_year">{movie.year}</p>
            </Link>
          </div>
        ))
      )}
    </>
  );
}

export default MainList;
