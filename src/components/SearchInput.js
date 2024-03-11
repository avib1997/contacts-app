import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/SearchInput.css";

function SearchInput() {
  return (
    <div className="search-input">
      <input type="text" placeholder="search in contacts..." />
      <div className="search-icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
}

export default SearchInput;
