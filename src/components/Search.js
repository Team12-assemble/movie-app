import React from "react";

const Search = ({onSubmit, onChange}) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="searchBar"
        placeholder="검색어를 입력하세요."
        type="text"
        onChange={onChange}
      />
    </form>
  );
};

export default Search;
