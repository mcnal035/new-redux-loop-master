import React, { Component } from 'react';
import {connect} from 'react-redux';



class Understanding extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Dont Forget It!</i></h4>
        </header>
        <h2>How well are you understanding the content</h2>
        <br/>
      </div>
    );
  }
}

export default connect()(Understanding);