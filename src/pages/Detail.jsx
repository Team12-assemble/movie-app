export default function Detail() {
  return (
    <section className="detail">
      <img className="poster" src="" alt="영화 포스터"></img>
      <section>
        <header>
          <div>
            <h1>data.movies.title</h1>
            <small>
              <span>data.movies.year</span>
              <span>data.movies.runtime </span>
              <span>data.movies.genres</span>
            </small>
          </div>
          <div>data.movies.rating</div>
        </header>
        <article>data.movies.summary</article>
      </section>
    </section>
  );
}
