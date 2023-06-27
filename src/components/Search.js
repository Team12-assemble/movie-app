import React from "react";

const Search = ({onSubmit, onChange, search}) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="searchBar"
        placeholder="검색어를 입력하세요. (단어 기준)"
        type="text"
        value={search}
        onChange={onChange}
      />
    </form>
  );
};

export default Search;
