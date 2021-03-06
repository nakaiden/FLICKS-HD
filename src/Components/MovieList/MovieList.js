import { useEffect, useState } from "react";
import { fetchMoviesFromDatabase } from "../../NetworkConnections";
import SingleMovie from "../SingleMovie/SingleMovie";
import "../../App.css";

export default function MovieList(props){
    const[movies, setMovies] = useState([]);
    useEffect(() =>{
        fetchMoviesFromDatabase(props.list)
            .then(res => setMovies(res.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //console.log(movies);
    
    return <div className='movie-list-container'>
        <h2>{props.title}</h2>
        <div className ='movie-list'>
        {movies.map(movie => <SingleMovie key={movie.id}movie={movie} movieGenres={props.movieGenres} tvGenres={props.tvGenres}/>)}
        </div>
    </div>
}