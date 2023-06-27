import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./styles/MainList.scss";
import default_img from "./images/placeholder_image.webp";

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

  const handleImgError = e => {
    e.target.src = default_img;
  };

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
              className="movie-link"
            >
              <div className="movie-card">
                <img
                  src={movie.medium_cover_image}
                  onError={handleImgError}
                  alt="영화 포스터"
                />
                <div className="movie-details">
                  <h2>{movie.title}</h2>
                  <p>{movie.year}</p>
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </>
  );
}

export default MainList;
