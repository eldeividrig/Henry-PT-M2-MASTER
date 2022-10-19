const initialState = {
    moviesFavorites: [],
    moviesLoaded: [],
    movieDetail: {}
};

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case 'ADD_MOVIE_FAVORITE':
            return {
                ...state,
                //tambien se puede concatenar con spread operator
                // [...state.moviesFavourites, action.payload]
                moviesFavorites: state.moviesFavorites.concat(action.payload)
            };
        case 'REMOVE_MOVIE_FAVORITE':
            return {
                ...state,
                moviesFavorites: state.moviesFavorites.filter(movie => movie.id !== action.payload)
            };
        case 'GET_MOVIE_DETAIL':
            return {
                ...state,
                movieDetail: action.payload
            };
        case 'GET_MOVIES':
            return {
                ...state,
                moviesLoaded: action.payload.Search
            };
        default:
            return { ...state };
    }
}