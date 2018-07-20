import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Highlight from './Highlight';    
import Carousel from './Carousel';

class Home extends Component {

  render() {

    
    //await(axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=4998c04eeac9e4dd3e6a004e7d5a0acd&language=en-US'));
      


    return (
      <div>
        <Navbar />
        
        <Highlight background="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=light-landscape-nature-326055.jpg&fm=jpg"/>
        
        <Movies/>
        
      </div>
    );
  }
}

class Movies extends Component {
  constructor() {
    super();
    this.state = { genres: [] };
  }

  componentDidMount(){
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=4998c04eeac9e4dd3e6a004e7d5a0acd&language=en-US')
      .then((response) => {
        console.log(response);
        this.setState({ genres: response.data.genres });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log('oe')
    var style ={
      width: '100%',
      height: 'auto',
    }
    const genres = this.state.genres.map((genre, i) => (<Carousel key={i} genre={genre.name} genreId={genre.id}/>));
    console.log(genres.length);
    return (
      <div style={style}>
        {genres}
      </div>
    );
  }
}

export default Home;