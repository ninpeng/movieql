const movies = [
  {
    id: 0,
    name: "Star Wars - The new hope",
    score: 90,
    genre: ["action", "fiction"]
  }, {
    id: 1,
    name: "Avengers - Assemble",
    score: 99,
    genre: ["action", "fantasy", "hero"]
  }
]

export const getMovies = () => movies;

export const getById = id => {
  return movies.find(movie => movie.id === id);
}

export const addMovie = (name, score, genre) => {
  const newMovie = {
    id: movies.length +1,
    name,
    score,
    genre
  }

  movies.push(newMovie);
  
  return newMovie;
}

export const deleteMovie = (id) => {
  const deleteIndex = movies.findIndex(movie => movie.id === id);
  if (deleteIndex >= 0) {
    movies.splice(deleteIndex);
    return true;
  } else {
    return false;
  }
}