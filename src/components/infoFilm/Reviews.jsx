import React, { useState, useEffect } from 'react';
import { reviewsMovieApi } from '../../services/getMoviesApi';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviewsMovie, setReviewsMovie] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviewsMovieApi = async () => {
      try {
        const { results } = await reviewsMovieApi(id);
        setReviewsMovie(results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    getReviewsMovieApi();
  }, [id]);

  return (
    <>
      {error && <p>Oops.. Something went wrong...</p>}
      {!loading && (
        <div>
          {reviewsMovie && reviewsMovie.length ? (
            <ul>
              {reviewsMovie.map(({ author, content, id }) => (
                <li key={id}>
                  <h3>{author}</h3>
                  <p> {content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p> We don't have any reviews for this movie </p>
          )}
        </div>
      )}
    </>
  );
};

export default Reviews;
