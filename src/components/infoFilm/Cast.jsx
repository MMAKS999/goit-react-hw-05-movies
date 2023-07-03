import React, { useState, useEffect } from 'react';
import { castMovieApi } from '../../services/getMoviesApi';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [castMovie, setCastMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getCastMovieApi = async () => {
      try {
        const { cast } = await castMovieApi(id);
        setCastMovie(cast);
      } catch (error) {
        console.error(error);
      }
    };

    getCastMovieApi();
  }, [id]);

  console.log(castMovie);
  return (
    <div>
      <ul>
        {castMovie &&
          castMovie.map(
            ({ id, character, name, profile_path, original_name }) => (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={original_name}
                  width="100px"
                />
                <p>{name}</p>
                <p> character: {character}</p>
              </li>
            )
          )}
      </ul>
    </div>
  );
};

export default Cast;
