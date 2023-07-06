import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesApi } from '../services/getMoviesApi';
import { MovieList } from '../components/MovieList/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const query = searchParams.get('query') ?? '';

  const handleSearch = ev => {
    ev.preventDefault();
    const value = ev.target.elements.search.value;
    if (value === '') {
      return setSearchParams({}); //прибираємо параметр в URL
    }
    setSearchParams({ query: ev.target.elements.search.value });

    ev.target.reset();
  };

  useEffect(() => {
    const getSearchMoviesApi = async () => {
      try {
        if (query === '') {
          return;
        }
        setIsLoading(true);
        const { results } = await searchMoviesApi(query);
        setSearchMovies(results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    getSearchMoviesApi();
  }, [query]);

  return (
    <>
      <div>Movies</div>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Oops.. Somesing went wrong...</p>}
      {searchMovies && searchMovies.length > 0 ? (
        <MovieList movies={searchMovies} />
      ) : (
        !loading && <p>No movies found</p>
      )}
    </>
  );
};

export default Movies;