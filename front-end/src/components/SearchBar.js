import React, { useState, useEffect } from "react";

const SearchBar = ({ items, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("none");

  useEffect(() => {
    onSearch(searchTerm, sortBy);
  }, [searchTerm, sortBy, onSearch]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <form>
      <label htmlFor="searchTerm" >Search:</label>
      <input
        type="text"
        id="searchTerm"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <label htmlFor="sortBy">Sort by:</label>
      <select id="sortBy" value={sortBy} onChange={handleSortByChange}>
        <option value="none">None</option>
        <option value="price">Price (Low to High)</option>
        <option value="price-reverse">Price (High to Low)</option>
        <option value="availability">Availability</option>
      </select>
    </form>
  );
};

export default SearchBar;
