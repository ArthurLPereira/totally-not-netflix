import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import axios from 'axios';


class Highlight extends Component {
    
    baseUrl = 'https://image.tmdb.org/t/p/w1000';
    
    constructor() {
        super();
        this.state = { 
            path: '',
            name: '',
            overview: ''
        };
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

    componentDidMount() {
        
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=4998c04eeac9e4dd3e6a004e7d5a0acd&language=en-US&page=1')
            .then((response) => {
                const index = this.getRandomInt(0, response.data.results.length);
                console.log('chegui');
                console.log(response);
                this.setState({ 
                    path: response.data.results[index].backdrop_path,
                    name:  response.data.results[index].title,
                    overview: response.data.results[index].overview,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        var background = {backgroundSize : 'cover'};
        var textStyle = {
          position: 'absolute', 
          top: '50%', 
          left: '20px',
          color: '#fff'
        };

        return (
            <div style={{width: '100%', height: 'auto', position: 'relative'}}>
                <Image 
                  style={background} responsive 
                  src={this.state.path? this.baseUrl+this.state.path: ''}>
                </Image>
                <div style={textStyle}>
                    <h1 style={{color: '#fff', fontSize: '4vw', mixBlendMode: 'difference'}}>{this.state.name}</h1>

                    <h1 style={{color: '#fff', fontSize: '1.5vw', mixBlendMode: 'initial'}}>{this.state.overview}</h1>
                </div>
            </div>
        );
    }
}

export default Highlight;