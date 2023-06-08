import React from "react";

const Search = ({ Search, setSearch }) => {
  return (
    <form className="searchform" onSubmit={(e) => e.preventDefault()}>
      <input
        id="search"
        type="text"
        role="Searchbox"
        placeholder="Search Items"
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
