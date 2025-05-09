import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import MovieCard from '../components/MovieCard';

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite movies added.</p>
      ) : (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
