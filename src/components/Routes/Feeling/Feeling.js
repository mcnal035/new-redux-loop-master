import React, { Component } from 'react';
import {connect} from 'react-redux';
import Review from '../Review/Review';


class Feeling extends Component {
    state = {
      newFeeling: {
      feeling: 0,
      }
            }
    

     handleSubmit = (event) =>{

      event.preventDefault();
      this.props.dispatch({type: 'ADD_FEELING', payload: this.state.newFeeling})
      this.props.history.push('/Understanding');
      console.log('clicked on add handleSubmit', this.state.newFeeling);
  }
    handleChangeFor = (PropertyName, event) => {
        // Do some JavaScript fun stuff
        this.setState({
            newFeeling: {
              ...this.state.newFeeling,
              [PropertyName]: event.target.value,
            }
        })
        console.log('handlechange for', )
        //then programmatically navigate to home
      }





  render() {
      
    return (
      
      <div className="App">
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



export default connect()(Feeling);