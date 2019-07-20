import React, { Component } from 'react';
import {connect} from 'react-redux';
import Review from '../Review/Review';
import {withRouter} from 'react-router-dom'

class Feeling extends Component {
    state = {
          Feelings: 0,
            }
          
    
    handleChangeFor = (count) => {
        // Do some JavaScript fun stuff
        this.setState({
            Feelings: count,
        })
        console.log('adding input', count )
    
        //then programmatically navigate to home
       
      }


     handleSubmit = (event) =>{
         event.preventDefault();
         
         this.props.dispatch({type: 'ADD_FEELING', payload: this.state.Feelings})
         this.props.history.push('/Understanding');
         console.log('clicked on add handleSubmit', this.state.Feelings);
     }



  render() {
      
    return (
      
      <div className="App">
          {JSON.stringify(this.state.Feelings)}
        <header className="App-header">
          <h1 className="App-title">Feelings!!</h1>
          <h4><i>How Are You Feeling Today?</i></h4>
        </header>
        <form onSubmit={this.handleSubmit}>
        <input type="number" placeholder="Feeling" 
            value={this.Feelings}
            onChange={(event) => this.handleChangeFor('Feelings', event)}/>
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

export default connect(mapStateToProps)(Feeling);