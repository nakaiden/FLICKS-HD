import { createContext } from "react"

export const API_Key = '510e07b409c5e05054f3bfdc6e2e3ab2'
export const GenreContext = createContext('genres')

export const fetchMoviesFromDatabase = (route, params = '') => {
    //console.log(`ok api.themoviedb.org/3/${route}?api_key=${params}`)
    return fetch(`https://api.themoviedb.org/3/${route}?api_key=${API_Key}`)
    .then(res => res.json())
}

