import React from "react";

const SearchInput = ({ query, updateQuery, placeholder }) => {
  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => updateQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
