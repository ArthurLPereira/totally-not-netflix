import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Navbar from './Navbar';
//import { Link } from 'react-router-dom';   
//import Carousel from './Carousel';
import MovieCard from './MovieCard';
import './Slider.css';

class MyList extends Component {

  render() {
    
    return (
      <div>
        <Navbar />
        
        <div className="col-sm-12">
            <Grid />
            
        </div>
        
      </div>
    );
  }
}

class Grid extends Component {
    render() {
        const movies = [
            {
                title: 'test1',
                rating: 4.5,
                fav: false,
                backgorund: 'http://20.theladbiblegroup.com/s3/content/808x455/e70d28235a1434869a6bc824a09cca66.png'
            },
            {
                title: 'test2',
                rating: 4.5,
                fav: false,
                backgorund: 'http://20.theladbiblegroup.com/s3/content/808x455/e70d28235a1434869a6bc824a09cca66.png'
            },
            {
                title: 'test3',
                rating: 4.5,
                fav: false,
                backgorund: 'http://20.theladbiblegroup.com/s3/content/808x455/e70d28235a1434869a6bc824a09cca66.png'
            },
            {
                title: 'test4',
                rating: 4.5,
                fav: false,
                backgorund: 'http://20.theladbiblegroup.com/s3/content/808x455/e70d28235a1434869a6bc824a09cca66.png'
            },
            {
                title: 'test5',
                rating: 4.5,
                fav: false,
                backgorund: 'http://20.theladbiblegroup.com/s3/content/808x455/e70d28235a1434869a6bc824a09cca66.png'
            },
            {
                title: 'test6',
                rating: 4.5,
                fav: false,
                backgorund: 'http://20.theladbiblegroup.com/s3/content/808x455/e70d28235a1434869a6bc824a09cca66.png'
            },
            {
                title: 'test7',
                rating: 4.5,
                fav: false,
                backgorund: 'http://20.theladbiblegroup.com/s3/content/808x455/e70d28235a1434869a6bc824a09cca66.png'
            },
        ];
        var textStyle = {
            color: '#fff',
        };
        return (
            <div style={{marginTop: '50px', margingLeft: '40px'}}>
                <h1 style={textStyle}>My List</h1>
                <Cards movies={movies}/>
            </div>
        );
    }
}

class Cards extends Component {
    render() {
        var style = {
            paddingLeft: '25px',

            
        }
      const cardData = this.props.movies; // show in the following codes
      return (
        <section style={style}>
        {
          cardData.map((movie, i) => {
            return (
                <MovieCard key={i} title={movie.title} rating={movie.rating} fav={movie.fav} background={movie.backgorund}/>
            )
          })
        }
        </section>
      )
    }
}

export default MyList;