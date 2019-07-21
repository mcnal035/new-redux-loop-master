import React, {Component} from 'react';
import {connect} from 'react-redux';


class Review extends Component {

    handleClick = () => {
        // Do some JavaScript fun stuff
        alert(`Going back to home page...`);
    
        // then programmatically navigate to home
        this.props.history.push('/');
      }


    render(){
        const Feedback =this.props.reduxStore.totalReview;
        return (
            <>
        <h2>Review Your Feedback</h2>
        
            <p>Feelings:{Feedback.Feeling}</p>
            <p>Understanding:</p>
            <p>Support:</p>
            <p>Comments:</p>
        
        <br/>
        <button onClick={this.handleClick}>Go Home</button>
        </>
        );
    }

}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(Review);