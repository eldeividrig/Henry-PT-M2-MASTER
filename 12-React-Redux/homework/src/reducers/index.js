const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
};

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        // case 'ADD_MOVIE_FAVORITE':
        //     return {
        //         ...state,
        //         moviesFavourites: state.moviesFavourites.concat(action.payload)
        //     }
        // case 'REMOVE_MOVIE_FAVORITE':
        //     return {
        //         ...state,
        //         count: state.count - 1
        //     }
        // case 'GET_MOVIE_DETAIL':
        //     return {
        //         ...state,
        //         count: 0
        //     }
        case 'GET_MOVIES':
            return {
                ...state,
                moviesLoaded: action.payload.Search
            };
        default:
            return { ...state };
    }
}