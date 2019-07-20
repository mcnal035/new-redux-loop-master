import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import Feeling from '../Routes/Feeling/Feeling'
import Support from '../Routes/Support/Support'
import Understanding from '../Routes/Understanding/Understanding'

// import Comments from '../Comments/Comments'


class App extends Component {
componentDidMount(){
// this.handleClick();
}

handleClick =() =>{

}

  render() {

    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1> Hello</h1>
          <h4>Lets Get Started</h4>
          <button onClick={this.handleClick}>Click Here to Start</button>
        </header>
        <div>
          <Link to={'/Feelings'}>Feelings</Link>
          <Link to={'/Understanding'}>Understanding</Link>
        </div>
          <div>
            
          <Route exact path='/Feelings' Component={Feeling} />
          <Route  path='/Understanding/' Component={Understanding} />
          <Route  path='/Support/' Component={Support} />
          
          </div>
        {/* <Route exact path='/Comments' Component={Comments}/> */}
        <br/>
      </div>
      {/* <Feeling/> */}
      <Feeling/>

      
    </Router>
    
  
    );
  }
}
const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(App);
