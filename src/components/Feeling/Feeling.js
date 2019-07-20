import React, { Component } from 'react';
import {connect} from 'react-redux';



class Feeling extends Component {

    handleClick = () => {
        // Do some JavaScript fun stuff
        alert(`Going back to home page...`);
    
        // then programmatically navigate to home
         this.props.history.push('/');
      }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>How Are You Feeling Today</i></h4>
        </header>
        <input placeholder="Feeling?" ></input>
        <br/>
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    );
  }
}

export default connect()(Feeling);