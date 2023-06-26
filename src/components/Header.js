import React from "react";
import Search from "./Search";

const Header = ({setMovies}) => {
  return (
    <header>
      <h1>Movie App</h1>
      <Search setMovies={setMovies} />
    </header>
  );
};

export default Header;
