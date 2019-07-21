import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './Review'

class Review extends Component {

    handleClick = () => {
        let finalList = this.props.reduxStore.totalReview
        axios.post('/feedback', finalList)
        .then((response) => {
            console.log('response',response);
        }).catch((error)=>{
            console.log('in error on post', error);
        })
        
      }


    render(){
       let list= this.props.reduxStore.totalReview
        return (
        <section className="Review">
        <div>
        <h2>Review Your Feedback</h2>
            
            <p>Feelings:{list.feeling}</p> 
            <p>Understanding:{list.understanding}</p> 
            <p>Support:{list.support}</p> 
            <p>Comments:{list.comments}</p> 
  
            
            <button onClick={this.handleClick}>Incomplete</button>
         </div>
        </section>
        
        );
    }

}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(Review);