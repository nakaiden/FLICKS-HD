import { createContext } from "react"

export const API_Key = process.env.REACT_APP_API_KEY
export const GenreContext = createContext('genres')

export const fetchMoviesFromDatabase = (route, params = '') => {
    //console.log(`ok api.themoviedb.org/3/${route}?api_key=${params}`)
    return fetch(`https://api.themoviedb.org/3/${route}?api_key=${API_Key}${params}`)
    .then(res => res.json())
}

