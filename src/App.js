import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import MyList from './components/MyList';

class App extends Component {
  render() {
    return (
      <div className="container-fluid" style={{width: '100%', padding: '0px'}}>
        <BrowserRouter>
          <switch>
            <Route exact path="/" component={Home}/>
            <Route path="/my_list" component={MyList}/>
          </switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
