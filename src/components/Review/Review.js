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