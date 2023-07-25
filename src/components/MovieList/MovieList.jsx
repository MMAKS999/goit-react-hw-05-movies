import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className="trendingFilms">
      {movies.map(({ original_title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {' '}
            {original_title}{' '}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      original_title: PropTypes.string,
    })
  ).isRequired,
};

