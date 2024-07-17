import { redirect } from 'react-router-dom';
import Movies from './movies/movies';
import MovieComplex from './movie-complex/movie-complex';
import MyPurchases from './my-purchases/my-purchases';
export const routes = [
  { index: true, loader: () => redirect('movies') },
  { path: 'movies', element: <Movies />, text: 'Movies' },
  { path: 'movie-complex', element: <MovieComplex />, text: 'Movie Complex' },
  { path: 'my-purchases', element: <MyPurchases />, text: 'My Purchases' }
];
