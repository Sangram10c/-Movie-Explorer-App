
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../CSS/MovieDetails.css'; // 🔁 Import external CSS

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
        const data = await res.json();
        if (data.Response === "True") {
          setMovie(data);
          setError(null);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError("Failed to fetch movie details.");
      }
      setLoading(false);
    };

    fetchMovie();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="movie-details">
      <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
      <div className="movie-info">
        <h2 className="movie-title">{movie.Title} ({movie.Year})</h2>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
      </div>
    </div>
  );
};

export default MovieDetails;

