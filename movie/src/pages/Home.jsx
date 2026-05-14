import React, { useState, useCallback } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';
import Footer from '../components/Footer';
import { searchMovies, getMovieDetails } from '../services/omdbApi';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = useCallback(async (query) => {
    setLoading(true);
    setError('');
    setMovies([]);
    setHasSearched(true);

    try {
      const data = await searchMovies(query);
      // Fetch additional details (rating, runtime) for each movie
      const detailed = await Promise.allSettled(
        data.Search.map((m) => getMovieDetails(m.imdbID))
      );
      const enriched = detailed.map((res, idx) =>
        res.status === 'fulfilled' ? res.value : data.Search[idx]
      );
      setMovies(enriched);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="app-root">
      {/* Background blobs */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>

      <Navbar />

      <main className="main-content">
        <SearchBar onSearch={handleSearch} loading={loading} />

        {/* Error */}
        {error && (
          <div className="error-banner" id="error-message" role="alert">
            <span className="error-icon">⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {/* Empty state after search */}
        {hasSearched && !loading && movies.length === 0 && !error && (
          <div className="empty-state">
            <div className="empty-icon">🎭</div>
            <h3 className="empty-title">No Movies Found</h3>
            <p className="empty-text">Try a different title or check your spelling.</p>
          </div>
        )}

        {/* Welcome state */}
        {!hasSearched && (
          <div className="welcome-state">
            <div className="welcome-icon">🎬</div>
            <h2 className="welcome-title">Start Searching</h2>
            <p className="welcome-text">
              Type a movie name above and hit <strong>Search</strong> to explore.
            </p>
            <div className="trending-tags">
              {['Avengers', 'Inception', 'Interstellar', 'The Dark Knight', 'Parasite', 'Dune'].map((tag) => (
                <button
                  key={tag}
                  className="trend-tag"
                  onClick={() => handleSearch(tag)}
                  id={`trending-${tag.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        <MovieGrid movies={movies} loading={loading} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
