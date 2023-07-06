import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { infoMovieApi } from '../services/getMoviesApi';

const FilmInfo = () => {
  const [infoMovie, setInfoMovie] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getInfoMovieApi = async () => {
      try {
        setIsLoading(true);
        setLoading(true);
        const data = await infoMovieApi(id);
        setInfoMovie(data);
      } catch (error) {
        setError(error);
        setLoading(false);
      } finally {
        setLoading(false);
        setIsLoading(false);
      }
    };

    getInfoMovieApi();
  }, [id]);
  const {
    original_title,
    release_date,
    overview,
    genres,
    backdrop_path,
    vote_average,
  } = infoMovie;

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <>
      <Link to={backLinkLocationRef.current}> Go back</Link>
      {isLoading && <p>Loading...</p>}
      {error && <p>Oops.. Somesing went wrong...</p>}
      {!loading && infoMovie && (
        <div>
          <div>
            <img
              src={
                backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                  : defaultImg
              }
              width={300}
              alt={original_title}
            />
          </div>
          <div>
            <h1>
              {' '}
              {original_title} <span>({release_date})</span>{' '}
            </h1>
            <p>User Score: {vote_average} </p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>
              {genres &&
                genres.map(({ name }) => <span key={name}> {name}</span>)}
            </p>
          </div>
        </div>
      )}
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast"> Cast</Link>
        </li>
        <li>
          <Link to="reviews"> Reviews </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default FilmInfo;
