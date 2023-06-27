import StarRating from "../components/StarRating";
import "../styles/Detail.scss";
import {Link, useLocation} from "react-router-dom";
import default_img from "../images/placeholder_image.webp";

export default function Detail() {
  const location = useLocation();
  const movie = location.state;

  const handleImgError = e => {
    e.target.src = default_img;
  };

  return (
    <section className="detail">
      <div className="crums">
        <Link className="back" to="..">
          Home
        </Link>
        <span>&gt;</span>
        <span>Detail</span>
      </div>
      <section className="item_box">
        <img
          className="poster"
          onError={handleImgError}
          src={movie.poster}
          alt="포스터 이미지"
        ></img>
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
