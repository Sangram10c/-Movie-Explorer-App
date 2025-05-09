
import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

function Home({ searchTerm }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
        const data = await res.json();
        if (data.Response === "True") {
          setMovies(data.Search);
          setError(null);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError("Failed to fetch movies.");
      }
      setLoading(false);
    };
    fetchMovies();
  }, [searchTerm]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
