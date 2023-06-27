import React from "react";
import {Link} from "react-router-dom";
import "../styles/MainList.scss";

const MovieList = ({movies}) => {
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
                <img src={movie.medium_cover_image} alt="영화 포스터" />
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
