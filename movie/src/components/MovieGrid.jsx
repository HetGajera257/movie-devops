import React from 'react';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies, loading }) => {
  if (loading) {
    return (
      <div className="loading-section">
        <div className="spinner-ring">
          <div></div><div></div><div></div><div></div>
        </div>
        <p className="loading-text">Fetching movies for you...</p>
      </div>
    );
  }

  if (!movies || movies.length === 0) return null;

  return (
    <section className="movie-grid-section">
      <div className="grid-header">
        <h2 className="grid-title">
          <span className="grid-count">{movies.length}</span> Results Found
        </h2>
        <div className="grid-divider"></div>
      </div>
      <div className="movie-grid" id="movie-results-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieGrid;
