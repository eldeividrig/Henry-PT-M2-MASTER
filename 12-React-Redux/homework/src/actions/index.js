
export function addMovieFavorite(movie) {
    return { type: "ADD_MOVIE_FAVORITE", payload: movie };
}

export function removeMovieFavorite(id) {
    return { 
        type: "REMOVE_MOVIE_FAVORITE", 
        payload: id 
    };
}

export function getMovieDetail(id) {
    return function (dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=6dfa167d&i=" + id)
            .then(response => response.json())
            .then(detail => {
                dispatch({ type: "GET_MOVIE_DETAIL", payload: detail });
            });
    };
}

export function getMovies(titulo) {
    return function (dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=6dfa167d&s=" + titulo)
            .then(response => response.json())
            .then(movies => {
                dispatch({ type: "GET_MOVIES", payload: movies });
            });
    };
}

