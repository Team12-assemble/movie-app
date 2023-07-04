import React from "react";
import {Link} from "react-router-dom";
import "../styles/MainList.scss";
import default_img from "../images/placeholder_image.webp";
import {useSelector} from "react-redux";

const MovieList = () => {
  const {movies} = useSelector(state => state.movieStore);
  const handleImgError = e => {
    e.target.src = default_img;
  };
  return (
    <>
      {movies ? (
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
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </>
  );
};

export default MovieList;
