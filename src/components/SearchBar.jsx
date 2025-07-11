import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} role="search" className="search-form">
      <label htmlFor="search-input" className="sr-only">Search posts</label>
      <input
        id="search-input"
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={handleChange}
        className="search-input"
      />
      <button type="submit" className="search-button">🔍</button>
    </form>
  );
};

export default SearchBar;
