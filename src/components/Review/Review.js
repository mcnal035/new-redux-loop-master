import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

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
            <>
        <h2>Review Your Feedback</h2>
            
        
            <ul>
              <li>Feelings:{list.feeling}</li> 
              <li>Understanding:{list.understanding}</li> 
             <li>Support:{list.support}</li>
             <li>Comments:{list.comments}</li>
             </ul>
         
           
        <br/>
        <button onClick={this.handleClick}>Incomplete</button>
        </>
        );
    }

}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(Review);