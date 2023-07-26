import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getMoviesApi } from '../services/getMoviesApi';
import { MovieList } from '../components/movieList/MovieList';

const Home = () => {
  const [filmsTrendingToday, setFilmsTrendingToday] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  //

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await getMoviesApi();
        setFilmsTrendingToday(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Oops.. Somesing went wrong...</p>}
      {filmsTrendingToday.length > 0 && (
        <MovieList movies={filmsTrendingToday} />
      )}
    </>
  );
};

export default Home;
