import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SingleMovie from './Components/SingleMovie/SingleMovie';
import MovieList from './Components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { fetchMoviesFromDatabase } from './NetworkConnections'


function App() {
  const [movieGenres, setMovieGenres] = useState([]);
  const [tvGenres, setTVGenres] = useState([]);

  useEffect(() => {
    //do some fetching
    // fetch the entire list of genres
    fetchMoviesFromDatabase('genre/movie/list')
      .then(res => setMovieGenres(res.genres))

  fetchMoviesFromDatabase('genre/tv/list')
    .then(res => setTVGenres(res.genres))
}, [])
return (

  <div className="main-container">
    <Navbar />
    {/* <SingleMovie id = '650'/> */}
    <MovieList list='trending/all/day' title="Today's Trending:" movieGenres={movieGenres} tvGenres={tvGenres} />
  </div>
);
}

export default App;
