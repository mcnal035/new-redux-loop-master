import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling'
import Support from '../Support/Support'
import Understanding from '../Understanding/Understanding'
import Comments from '../Comments/Comments'



class App extends Component {



  render() {

    return (
      <Router>
      <div className="App">
        <header className="App-header">
        </header>
        
        <Route exact path='/' Component={Feeling} />
        <Route exact path='/Support' Component={Support} />
        <Route exact path='/Understanding' Component={Understanding} />
        <Route exact path='/Comments' Component={Comments}/>
        <br/>
      </div>
      </Router>
    );
  }
}

export default App;
