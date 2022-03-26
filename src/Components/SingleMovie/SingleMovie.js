import { useEffect, useState } from "react";
import { fetchMoviesFromDatabase, GenreContext } from "../../NetworkConnections";
import "./SingleMovie.css"

export default function SingleMovie(props) {
    // useState - to create state
    const [movie, setMovie] = useState(props.movie);
    
    // useEffect - only fire code when the compnent is loaded for the first time
    // useEffect(() => {
    //     //do some fetching
    //     if (movie) return
    //     fetchMoviesFromDatabase(`movie/${props?.id}`)
    //         .then(res => setMovie(res))

    // }, [])
    const genreList = movie?.original_title ? props.movieGenres : props.tvGenres

    return (
    <div className='single-movie'>
        <img alt={`poster for ${movie?.original_title}`} src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}/>
        <h4>{movie.original_title || movie.original_name}</h4>
        {/* <p>{movie?.overview}</p> */}
        <div className="genre-list">
            <h6>{movie?.genre_ids?.map((genre_id,i) => <h6>{genreList.find(genre => genre.id === genre_id)?.name}{i !== movie.genre_ids.length -1 && ', '}</h6>)}</h6>
        </div>
    </div>
    );
}