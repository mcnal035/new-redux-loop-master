import React, { Component } from 'react';
import {connect} from 'react-redux';
import Review from '../Review/Review';
import { withRouter } from 'react-router-dom';

class Feeling extends Component {
    state = {
      feeling: 0,
      
            }
    

    handleChangeFor = (PropertyName, event) => {
        // Do some JavaScript fun stuff
        this.setState({
            feeling: 
               event.target.value,
            
        })
        console.log('handlechange for', )
        //then programmatically navigate to home
      }


      handleSubmit = (event) =>{
        this.props.history.push('/Understanding');
        event.preventDefault();
        this.props.dispatch({type: 'ADD_FEELING', payload: this.state.feeling})
       
        console.log('clicked on add handleSubmit', this.state.feeling);
    }



  render() {
     
    return (
      
      <div className="App">
         <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Dont Forget It!</i></h4>
        </header>
          {JSON.stringify(this.state.feeling)}
          <h4><i>How Are You Feeling Today?</i></h4>
        <form onSubmit={this.handleSubmit}>
        <input type="number" placeholder="Feeling" 
            // value={this.state.Feelings}
            onChange={(event) => this.handleChangeFor('feeling', event)}/>
        <br/>
        <button>NEXT</button>
        </form>
        <Review />
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) =>({
  reduxStore
})

export default withRouter(connect(mapStateToProps)(Feeling));