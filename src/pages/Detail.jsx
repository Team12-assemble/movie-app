import "../styles/Detail.scss";
import {useLocation} from "react-router-dom";

export default function Detail() {
  const location = useLocation();
  const movie = location.state;
  console.log(location);
  console.log(movie);

  return (
    <section className="detail">
      <img className="poster" src={`${movie.poster}`} alt="영화 포스터"></img>
      <section className="description">
        <header>
          <div>
            <h1>
              {movie.title}
              movie.title
            </h1>
            <small>
              <span>
                {movie.year}
                movie.year
              </span>
              <span>
                {movie.runtime}
                {/* movie.runtime */}
              </span>
              <span>
                {movie.genres.map(genre => {
                  return <span>{genre}</span>;
                })}
                {/* movie.genres */}
              </span>
            </small>
          </div>
          <div className="rating">
            {movie.rating}
            movie.rating
          </div>
        </header>
        <nav>
          <li>Overview</li>
        </nav>
        <article>
          {movie.summary}
          movie.summary
        </article>
      </section>
    </section>
  );
}
