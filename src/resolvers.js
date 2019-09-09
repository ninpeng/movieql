import { getMovies, getMovie, getSuggestions } from './api.js';

const resolvers = {
  Query: {
    movies: (_, { limit, page, rating }) => getMovies(limit, page, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id)
  }
}

export default resolvers;