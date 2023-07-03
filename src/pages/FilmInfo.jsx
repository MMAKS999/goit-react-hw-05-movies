import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { infoMovieApi } from '../services/getMoviesApi';

const FilmInfo = () => {
  const [infoMovie, setInfoMovie] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  // console.log(id);

  useEffect(() => {
    const getInfoMovieApi = async () => {
      try {
        const data = await infoMovieApi(id);
        setInfoMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    getInfoMovieApi();
  }, [id]);
  const {
    original_title,
    release_date,
    overview,
    poster_path,
    genres,
    backdrop_path,
    vote_average,
  } = infoMovie;
  return (
    <>
      <Link to={backLinkLocationRef.current}> Go back</Link>
      {infoMovie && (
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
              alt={original_title}
            />
          </div>
          <div>
            <h1> {original_title} </h1>
            <p>User Score: {vote_average} </p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>{genres && genres.map(({ name }) => <span> {name}</span>)}</p>
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
