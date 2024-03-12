import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/SearchInput.css";

function SearchInput({ setSearchTerm }) {
  const [searchTermInput, setSearchTermInput] = useState("");

  const handleChange = (event) => {
    setSearchTermInput(event.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(searchTermInput);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Search in contacts..."
        value={searchTermInput}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <div className="search-icon" onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
}

export default SearchInput;
