import React, { Component } from 'react';
import {connect} from 'react-redux';



class Feeling extends Component {

    state = {
            feedBack: {
            Feelings: 0,
            Understanding: '',
            Support: '',
            Comments: '',

            }
          }
    
    
    handleChangeFor = (propertyName, event) => {
        event.preventDefault();
        // Do some JavaScript fun stuff
        this.setState({
            ...this.state.feedBack,
            [propertyName]: event.target.value,
        })
        console.log('adding input', event.target.value )
    
        // then programmatically navigate to home
        // this.props.history.push('/');
      }


     handleSubmit = (event) =>{
         event.preventDefault();
         console.log('clicked on add handleSubmit');
         this.props.dispatch({type: 'ADD_FEELING', payload: this.state.feedBack})
     }



  render() {
      
    return (
      <div className="App">
          {JSON.stringify(this.state.feedBack)}
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>How Are You Feeling Today</i></h4>
        </header>
        <form onSubmit={this.handleSubmit}>
        <input type="number" placeholder="feeling" 
            value={this.state.feedBack.feelings}
            onChange={(event) => this.handleChangeFor('feelings', event)}/>
        <br/>
        <button>NEXT</button>
        </form>
      </div>
    );
  }
}

export default connect()(Feeling);