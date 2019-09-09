import axios from 'axios';

const BASE_URL = "https://yts.lt/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit=10, page=1, minimum_rating=5) => {
  const response = await axios.get(LIST_MOVIES_URL, { params: { limit, page, minimum_rating } });
  return response.data.data.movies;
}

export const getMovie = async (movie_id) => {
  const response = await axios.get(MOVIE_DETAILS_URL, { params: { movie_id } });
  return response.data.data.movie;
}

export const getSuggestions = async (movie_id) => {
  const response = await axios.get(MOVIE_SUGGESTIONS_URL, { params: { movie_id } });
  return response.data.data.movies;
}