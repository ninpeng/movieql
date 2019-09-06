import { getMovies, getById, addMovie, deleteMovie } from './db/db';

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id)
  },
  Mutation: {
    addMovie: (_, { name, score, genre }) => addMovie(name, score, genre),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
}

export default resolvers;