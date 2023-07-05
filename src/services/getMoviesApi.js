import axios from 'axios';
// const key = '8634ec4e24971631391084391baa12ea';
const key =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjM0ZWM0ZTI0OTcxNjMxMzkxMDg0MzkxYmFhMTJlYSIsInN1YiI6IjY0OWRlMzNlYzA3MmEyMDEwZGY1NGFiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ll7H07uCb_HQAjxOXMouSO9cZMVYrxWH6XhbusM7MJI';

export const getMoviesApi = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${key}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`No information on request`);
  }
};
export const searchMoviesApi = async searchMovie => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie',
      {
        params: {
          query: searchMovie,
          include_adult: false,
          language: 'en-US',
        },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${key}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`No information on request`);
  }
};

export const infoMovieApi = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        params: {
          language: 'en-US',
        },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${key}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`No information on request`);
  }
};

export const castMovieApi = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US'`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${key}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`No information on request`);
  }
};

export const reviewsMovieApi = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US'`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${key}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`No information on request`);
  }
};
