
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import '../CSS/MovieCard.css';

function MovieCard({ movie }) {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  const handleFavorite = () => {
    isFavorite ? removeFavorite(movie.imdbID) : addFavorite(movie);
  };

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.imdbID}`} className="movie-link">
        <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year">{movie.Year}</p>
      </Link>
      <button className="favorite-button" onClick={handleFavorite}>
        {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
      </button>
    </div>
  );
}

export default MovieCard;
