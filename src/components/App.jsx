import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Layout from './Layout/Layout';
import { getMoviesApi } from '../services/getMoviesApi';
import FilmInfo from '../pages/FilmInfo';
import Cast from './infoFilm/Cast';
import Reviews from './infoFilm/Reviews';

// const key = "8634ec4e24971631391084391baa12ea"
export const App = () => {
  getMoviesApi();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<FilmInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
