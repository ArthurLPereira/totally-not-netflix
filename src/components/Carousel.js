import React, { Component } from 'react';
import MovieCard from './MovieCard';
import './Slider.css';
import axios from 'axios';

class Carousel extends Component {
    constructor () {
      super();
      this.state = { movies: [] };
    }

    componentDidMount (){
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=4998c04eeac9e4dd3e6a004e7d5a0acd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${this.props.genreId}`
      axios.get(url)
        .then((response) => {
          console.log(response);
          this.setState({ movies: response.data.results });
        })
        .catch((err) => {
          console.log(err);
        });
      //https://api.themoviedb.org/3/discover/movie?api_key=4998c04eeac9e4dd3e6a004e7d5a0acd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=26
    }

    render() {

        return (
            <div style={{width: '100%', height: '300px', paddingTop: '10px'}}>
                <h2 style={{color: '#D3D3D3',paddingLeft: '10px'}}>{this.props.genre}</h2>
                <Display movies={this.state.movies}/>
            </div>
        );
    }
}

class Cards extends React.Component {
    render() {
      const cardData = this.props.movies; // show in the following codes
      return (
        <section className='section' >
        {
          cardData.map((movie, i) => {
            return (
                <MovieCard key={i} cardStyle={this.props.cardStyle} title={movie.title} rating={movie.rating} fav={movie.fav} movieId={movie.id}/>
            )
          })
        }
        </section>
      )
    }
  }

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currentCard: 0,
          position: 0,
          cardStyle: {
            transform: 'translateX(0px)'
          },
          width: 0,
        };
    }
    
      componentDidMount() {
        let boxWidth = 235;
        this.setState({ width: boxWidth });
      }
      
      // func: click the slider buttons
      handleClick(type) {
        // get the card's margin-right
        let margin = 5; 
        console.log(type);
        const cardWidth = this.state.width; // the card's width
        const cardMargin = margin; // the card's margin
        const cardNumber = this.props.movies.length; // the number of cards
        let currentCard = this.state.currentCard; // the index of the current card
        let position = this.state.position; // the position of the cards
    
        // slide cards
        if(type === 'next' && currentCard < cardNumber-1) {
          currentCard++;
          console.log(currentCard);
          position -= (cardWidth+cardMargin);
        } else if(type === 'prev' && currentCard > 0) {
          currentCard--;
          console.log(currentCard);
          position += (cardWidth+cardMargin);
        }
        this.setCard(currentCard, position);
      }
      
      setCard(currentCard, position) {
        this.setState({
          currentCard: currentCard,
          position: position,
          cardStyle: {
            transform: `translateX(${position}px)`
          }
        })
      }
    
  render() {
    return (
      <div className="cards-slider">
        <div className="slider-btns">
          <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}>&lt;</button>
          <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}>&gt;</button>
        </div>
        <Cards movies={this.props.movies} cardStyle={this.state.cardStyle}/>
      </div>
    )
  }
}





export default Carousel;