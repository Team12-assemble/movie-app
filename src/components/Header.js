import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Search from "./Search";
import "../styles/Header.scss";
import UserName from "./UserName";

const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const onChange = e => {
    setSearch(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    navigate(`/search?title=${search}`);
  };

  const goHome = () => {
    navigate("/");
    setSearch("");
  };

  return (
    <header>
      <h1 onClick={goHome}>Movie App</h1>
      <section className="header-right">
        <UserName />
        <Search onChange={onChange} onSubmit={onSubmit} search={search} />
      </section>
    </header>
  );
};

export default Header;
