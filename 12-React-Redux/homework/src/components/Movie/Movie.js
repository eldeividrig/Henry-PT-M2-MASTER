import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount() {
        const movieID = this.props.match.params.id;
        this.props.getMovieDetail(movieID);
    }


    render() {
        return (
            <div className="movie-detail">
                <div className='movie-card'>
                    <h1 className='title'>{this.props.movie.Title}</h1>
                    <h2>{this.props.movie.Year}</h2>
                    <h2>{this.props.movie.Released}</h2>
                    <h2>{this.props.movie.Genre}</h2>
                    <h2>{this.props.movie.Language}</h2>
                    <img src={this.props.movie.Poster} alt='poster' className='img'></img>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movieDetail
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
        getMovieDetail: movieID => dispatch(getMovieDetail(movieID))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);