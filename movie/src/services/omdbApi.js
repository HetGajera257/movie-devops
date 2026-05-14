import axios from 'axios';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

const omdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
  },
});

export const searchMovies = async (query, page = 1) => {
  const response = await omdbApi.get('', {
    params: { s: query, page, type: 'movie' },
  });
  if (response.data.Response === 'False') {
    throw new Error(response.data.Error || 'No movies found.');
  }
  return response.data;
};

export const getMovieDetails = async (imdbID) => {
  const response = await omdbApi.get('', {
    params: { i: imdbID, plot: 'short' },
  });
  if (response.data.Response === 'False') {
    throw new Error(response.data.Error || 'Movie not found.');
  }
  return response.data;
};
