import "../styles/StarRating.scss";

export default function StarRating({rating}) {
  return (
    <div className="star_rating">
      <div
        className="star_rating_fill"
        style={{width: `${(rating / 2 / 5) * 100}%`}}
      >
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <div className="star_rating_base">
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>
    </div>
  );
}
