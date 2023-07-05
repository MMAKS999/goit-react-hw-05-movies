import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMoviesApi } from '../services/getMoviesApi';
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState();
  const [loading, setLoading] = useState(true);

  const location = useLocation();
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
        const { results } = await searchMoviesApi(query);
        setSearchMovies(results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
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
      {searchMovies && searchMovies.length > 0 ? (
        <ul className="searchFilms">
          {searchMovies.map(({ original_title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {' '}
                {original_title}{' '}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No movies found</p>
      )}
    </>
  );
};

export default Movies;
