import React, {useState} from "react";

const Search = ({setMovies}) => {
  const [search, setSearch] = useState("");

  const getSearchMovies = async () => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&query_term=${search}`,
    )
      .then(res => res.json())
      .then(json => {
        console.log(json.data.movies);
        setMovies(json.data.movies);
      });
  };

  const onSubmit = e => {
    e.preventDefault();
    getSearchMovies();
  };

  const onChange = e => {
    setSearch(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={search}
        placeholder="검색어를 입력하세요."
        type="text"
        onChange={onChange}
      />
    </form>
  );
};

export default Search;
