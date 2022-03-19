// import { useEffect, useState } from "react";
// import { fetchMoviesFromDatabase } from "../../NetworkConnections";
// import MovieList from "../MovieList/MovieList";

// export default function Genre(props){
//     const[genres, setGenres] = useState([]);
//     useEffect(() =>{
//         fetchMoviesFromDatabase(props.show)
//             .then(res => setGenres(res.results));
//     }, [])

//     return <div className='genre-container'>
//         <p>{props.type}</p>
//         <div className='genre-type'>
//             {genres.map(genre => )}
//         </div>
//     </div>
// }