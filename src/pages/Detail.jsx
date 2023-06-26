import "../styles/Detail.scss";

export default function Detail({movie}) {
  return (
    <section className="detail">
      <img className="poster" src="" alt="영화 포스터"></img>
      <section className="description">
        <header>
          <div>
            <h1>
              {/* {movie.title} */}
              movie.title
            </h1>
            <small>
              <span>
                {/* {movie.year} */}
                movie.year
              </span>
              <span>
                {/* {movie.runtime}  */}
                movie.runtime
              </span>
              <span>
                {/* {movie.genres} */}
                movie.genres
              </span>
            </small>
          </div>
          <div className="rating">
            {/* {movie.rating} */}
            movie.rating
          </div>
        </header>
        <nav>
          <li>Overview</li>
        </nav>
        <article>
          {/* {movie.summary} */}
          movie.summary
        </article>
      </section>
    </section>
  );
}
