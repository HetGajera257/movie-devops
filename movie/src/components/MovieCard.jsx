import React, { useState } from 'react';

const POSTER_FALLBACK = 'https://via.placeholder.com/300x450/1a1a2e/e94560?text=No+Poster';

const ratingColor = (rating) => {
  const val = parseFloat(rating);
  if (isNaN(val)) return 'rating-neutral';
  if (val >= 7.5) return 'rating-high';
  if (val >= 5.5) return 'rating-mid';
  return 'rating-low';
};

const MovieCard = ({ movie }) => {
  const [imgError, setImgError] = useState(false);

  const poster =
    movie.Poster && movie.Poster !== 'N/A' && !imgError
      ? movie.Poster
      : POSTER_FALLBACK;

  const rating = movie.imdbRating && movie.imdbRating !== 'N/A' ? movie.imdbRating : 'N/A';
  const year = movie.Year || 'N/A';
  const type = movie.Type ? movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1) : 'Movie';
  const genre = movie.Genre && movie.Genre !== 'N/A' ? movie.Genre.split(',').slice(0, 2).join(', ') : null;

  return (
    <div className="movie-card" id={`movie-card-${movie.imdbID}`}>
      <div className="card-poster-wrapper">
        <img
          src={poster}
          alt={movie.Title}
          className="card-poster"
          onError={() => setImgError(true)}
          loading="lazy"
        />
        <div className="card-overlay">
          <div className="overlay-content">
            {genre && <p className="overlay-genre">{genre}</p>}
            <p className="overlay-plot">{movie.Plot && movie.Plot !== 'N/A' ? movie.Plot : 'No description available.'}</p>
          </div>
        </div>
        <div className={`card-rating ${ratingColor(rating)}`}>
          <span className="rating-star">★</span>
          <span className="rating-value">{rating}</span>
        </div>
        <div className="card-type-badge">{type}</div>
      </div>

      <div className="card-info">
        <h3 className="card-title" title={movie.Title}>{movie.Title}</h3>
        <div className="card-meta">
          <span className="meta-year">
            <span className="meta-icon">📅</span> {year}
          </span>
          {movie.Runtime && movie.Runtime !== 'N/A' && (
            <span className="meta-runtime">
              <span className="meta-icon">⏱</span> {movie.Runtime}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
