import React from 'react';
import MovieCard from './MovieCard'; // Adjust path if needed

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
