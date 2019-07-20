import React, { Component } from 'react';
import './App.css';
import FormList from '../FormList/FormList'
import Feeling from '../Feeling/Feeling'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


class App extends Component {



  render() {

    return (
      <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Route path='/feelings' component={Feeling} />
        <Route path='/Feelings' component={Feeling} />
        <br/>
        <Feeling />
        <FormList />
      </div>
      </Router>
    );
  }
}

export default App;
