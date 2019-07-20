import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'


class Understanding extends Component {
  render() {
    return (
      <div className="App">
        <h2>How well are you understanding the content!</h2>
        <br/>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) =>({
  reduxStore
})

export default withRouter(connect(mapStateToProps)(Understanding));