export const API_Key = '510e07b409c5e05054f3bfdc6e2e3ab2'

export const fetchMoviesFromDatabase = (route) => {
    return fetch(`https://api.themoviedb.org/3/${route}?api_key=${API_Key}`)
    .then(res => res.json())
}

