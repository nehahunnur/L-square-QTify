import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/searchicon.svg";
import "./Search.css";
import { useState } from "react";

const Search = ({ data }) => {
  const [value, setValue] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form className="searchwrapper" onSubmit={onSubmit}>
      <input
        placeholder="Search a album of your choice"
        className="search"
        value={value}
        onChange={handleChange}
      />
      <button className="search-icon" type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
