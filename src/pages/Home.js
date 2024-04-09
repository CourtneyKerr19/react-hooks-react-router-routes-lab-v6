 // pages/Home.js
import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies') // Adjust if your server's base URL is different
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} id={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
