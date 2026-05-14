import React, { useState } from 'react';

const SearchBar = ({ onSearch, loading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  return (
    <div className="search-section">
      <h1 className="search-heading">
        Find Any <span className="heading-accent">Movie</span>
      </h1>
      <p className="search-subheading">
        Search from millions of movies powered by OMDB
      </p>
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            id="movie-search-input"
            type="text"
            className="search-input"
            placeholder="Search movies e.g. Avengers, Inception..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={loading}
          />
          {query && (
            <button
              type="button"
              className="clear-btn"
              onClick={() => setQuery('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
        <button
          id="search-btn"
          type="submit"
          className="search-btn"
          disabled={loading || !query.trim()}
        >
          {loading ? (
            <span className="btn-spinner"></span>
          ) : (
            'Search'
          )}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
