import React, { useState, useEffect } from 'react';
import { castMovieApi } from '../../services/getMoviesApi';
import { useParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

const Cast = () => {
  const [castMovie, setCastMovie] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getCastMovieApi = async () => {
      try {
        setLoading(true);
        const { cast } = await castMovieApi(id);
        setCastMovie(cast);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getCastMovieApi();
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <Oval color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        castMovie && (
          <ul>
            {castMovie.map(
              ({ id, character, name, profile_path, original_name }) => (
                <li key={id}>
                  {profile_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                      alt={original_name}
                      width="100px"
                    />
                  )}
                  <p>{name}</p>
                  <p> character: {character}</p>
                </li>
              )
            )}
          </ul>
        )
      )}
    </div>
  );
};

export default Cast;
