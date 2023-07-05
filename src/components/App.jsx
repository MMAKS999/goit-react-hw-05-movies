import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { getMoviesApi } from '../services/getMoviesApi';
import Layout from './Layout/Layout';
// import Movies from '../pages/Movies';
// import FilmInfo from '../pages/FilmInfo';
import Cast from './infoFilm/Cast';
import Reviews from './infoFilm/Reviews';

const Home = lazy(() => import('../pages/Home'));
const FilmInfo = lazy(() => import('../pages/FilmInfo'));
const Movies = lazy(() => import('../pages/Movies'));


// import Home from '../pages/Home';

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
