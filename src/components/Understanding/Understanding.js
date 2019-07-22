import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Review from '../Review/Review';

class Understanding extends Component {

  state = {
    understanding: 0,
          }

          handleChangeFor = (PropertyName, event) => {
     
            this.setState({
                understanding: 
                    event.target.value,
            })
           
          }

   handleSubmit = (event) =>{
    this.props.history.push('/Support');
    event.preventDefault();
    this.props.dispatch({type: 'ADD_UNDERSTANDING', payload: this.state.understanding})
   
    console.log('clicked on add handleSubmit', this.state.understanding);
}


  render() {
    return (
      
      <div className="App">
         <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Dont Forget It!</i></h4>
        </header>
        <h2>How well are you understanding the content!</h2>
        <br/>
        <div className="App">
          {/* {JSON.stringify(this.state.understanding)} */}
        <form onSubmit={this.handleSubmit}>
        <input type="number" placeholder="Understanding" 
            //  value={this.understanding}
            onChange={(event) => this.handleChangeFor('understanding', event)}/>
        <br/>
        <button>NEXT</button>
        </form>
        <Review />
      </div>
        
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) =>({
  reduxStore
})

export default withRouter(connect(mapStateToProps)(Understanding));