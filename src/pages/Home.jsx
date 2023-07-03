import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getMoviesApi } from '../services/getMoviesApi';
import { Link,useLocation } from 'react-router-dom';

const Home = () => {
  const [filmsTrendingToday, setFilmsTrendingToday] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { results } = await getMoviesApi();
        console.log(results);
        setFilmsTrendingToday(results);
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, []);
console.log(location);
  return (
    <>
      <h2>Trending today</h2>
      <ul className="trendingFilms">
        {filmsTrendingToday.map(({ original_title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{from:location}}> {original_title} </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
