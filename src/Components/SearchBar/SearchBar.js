import { useState } from "react";
import { fetchMoviesFromDatabase } from "../../NetworkConnections";
import SingleMovie from "../SingleMovie/SingleMovie";
import MovieList from "../MovieList/MovieList";
import "./SearchBar.css";


export default function SearchBar(props) {
    const [movies, setMovies] = useState([]);
    const [searchName, setSearchName] = useState('')

    function searchMovies() {
        fetchMoviesFromDatabase(`search/multi`, `&query=${searchName}`)
            .then(res => setMovies(res.results))
    }
    function handleChange(event) {
        console.log(event)
        setSearchName(event.target.value)
    }
    console.log(movies)
    return (
    <div className="search-component">
        <input className="Search-Bar" value={searchName} onChange={handleChange}/>
        <button className="Search-Button" onClick={searchMovies}> Search</button>
        {/* <MovieList title={props.title} movies={movies} genres={props.genres} /> */}
        <div className="movie-list">
            {movies?.map(movie => <SingleMovie key={movie.id} movie={movie} movieGenres={props.movieGenres} tvGenres={props.tvGenres}/>)}
        </div>
    </div>
    );
}