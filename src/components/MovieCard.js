import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './MovieCard.css';
import axios from 'axios';

class MovieCard extends Component {
   baseUrl = 'https://image.tmdb.org/t/p/w500';

    constructor() {
        super();
        this.state = { 
            background: '',
            rating: 0,
        };
    }

    componentDidMount() {
        const url = `https://api.themoviedb.org/3/movie/${this.props.movieId}/images?api_key=4998c04eeac9e4dd3e6a004e7d5a0acd&language=en-US`
        axios.get(url)
            .then((response) => {
                console.log(response);
                this.setState({ backgorund: this.baseUrl+response.data.backdrops[0] });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        var background = {backgroundSize : 'cover'};
        var div = {position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'};       
        var textStyle = {
            fontSize: '100%',
            color: '#fff'
          };
        return (
            <div className='MovieCard' style={this.props.cardStyle}>
                <Image className='imagem'
                  style={background} responsive 
                  src={this.props.background}>
                </Image>
                <div className='div' style={div}>
                    <h1 style={textStyle}>{this.props.title}</h1>
                    <h1 style={textStyle}>{this.props.title}</h1>
                    <button className='fav-btn'></button>
                </div>
            </div>
        );
    }
}

export default MovieCard;