import React, { useState, useEffect } from 'react';
import { reviewsMovieApi } from '../../services/getMoviesApi';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviewsMovie, setReviewsMovie] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const getReviewsMovieApi = async () => {
      try {
        const { results } = await reviewsMovieApi(id);
        setReviewsMovie(results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getReviewsMovieApi();
  }, [id]);

  return (
    <>
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
