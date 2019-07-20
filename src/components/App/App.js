import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

//routes
import Feeling from '../Routes/Feeling/Feeling'
import Understanding from '../Routes/Understanding/Understanding'
import Support from '../Routes/Support/Support'


// import Comments from '../Comments/Comments'


class App extends Component {

  render() {

    return (
          <>
            <section>
          <Router> 
          <Route path='/' exact Component={Feeling} />
          <Route path='/Understanding/' Component={Understanding} />
          <Route path='/Support/' Component={Support} />
          </Router>
          </section>
          <Feeling />
        <br/>
        </>

  
    );
  }
}


export default withRouter()e(App);
