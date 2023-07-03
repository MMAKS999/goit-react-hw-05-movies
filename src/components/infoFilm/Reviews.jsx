import React, { useState, useEffect } from 'react';
import { reviewsMovieApi } from '../../services/getMoviesApi';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviewsMovie, setReviewsMovie] = useState();
  const { id } = useParams();
  useEffect(() => {
    const getReviewsMovieApi = async () => {
      try {
        const { results } = await reviewsMovieApi(id);
        setReviewsMovie(results);
      } catch (error) {
        console.error(error);
      }
    };

    getReviewsMovieApi();
  }, [id]);
  console.log(reviewsMovie);

  return (
    <div>
      Reviews
      <ul>
        {reviewsMovie &&
          reviewsMovie.map(({ author, content, id }) => (
            <li key={id}>
              <p>{author}</p>
              <p> {content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Reviews;
