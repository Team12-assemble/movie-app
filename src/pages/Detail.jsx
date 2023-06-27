import StarRating from "../components/StarRating";
import "../styles/Detail.scss";
import {Link, useLocation} from "react-router-dom";

export default function Detail() {
  const location = useLocation();
  const movie = location.state;
  // console.log(location);
  // console.log(movie);

  return (
    <section className="detail">
      <div className="crums">
        <Link className="back" to="..">
          Home
        </Link>
        <span>&gt;</span>
        <Link className="back" to="..">
          Detail
        </Link>
      </div>
      <section className="item_box">
        <div
          className="poster"
          style={{backgroundImage: `url(${movie.poster})`}}
          alt="영화 포스터"
        ></div>
        <section className="description">
          <header>
            <div>
              <h1>{movie.title}</h1>
              <small>
                <span className="info">{movie.year}</span>
                <span className="info">{movie.runtime}m</span>
                <ul className="info genres">
                  {movie.genres.map(genre => {
                    return <li>{genre}</li>;
                  })}
                </ul>
              </small>
            </div>
            <div className="rating">
              {movie.rating}
              <StarRating rating={movie.rating}></StarRating>
            </div>
          </header>
          <nav>
            <li className="overview">Overview</li>
          </nav>
          <article>{movie.summary}</article>
        </section>
      </section>
    </section>
  );
}
