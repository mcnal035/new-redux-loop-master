import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'

class Review extends Component {

    handleClick = () => {
        // Do some JavaScript fun stuff
        alert(`Going back to home page...`);
    
        // then programmatically navigate to home
        // this.props.history.push('/');
      }


    render(){
      
        return (
            <>
        <h2>Review Your Feedback</h2>
        <ul>
          <li>Feelings:</li>
          <li>Understanding:</li>
          <li>Support:</li>
          <li>Comments:</li>
        </ul>
        <br/>
        <button onClick={this.handleClick}>Go Home</button>
        </>
        );
    }

}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default withRouter(connect()(Review));