
export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function removeMovieFavorite(payload) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload };
}

export function getMovieDetail(payload) {
    return { type: "GET_MOVIE_DETAIL", payload};
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

