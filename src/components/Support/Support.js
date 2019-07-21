import React, {Component} from 'react';
import {connect} from 'react-redux';
import Review from '../Review/Review';
import {withRouter} from 'react-router';

class Support extends Component {


  state = {
    newFeeling: {
     support: 0,
    }
          }
  

   handleSubmit = (event) =>{
    this.props.history.push('/Comments');
    event.preventDefault();
    this.props.dispatch({type: 'ADD_SUPPORT', payload: this.state.newFeeling})
   
    console.log('clicked on add handleSubmit', this.state.newFeeling);
}
  handleChangeFor = (PropertyName, event) => {
     
      this.setState({
          newFeeling: {
            ...this.state.newFeeling,
            [PropertyName]: event.target.value,
          }
      })
     
    }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Dont Forget It!</i></h4>
        </header>
        <h2>How well Are you Being Support?</h2>
        <form onSubmit={this.handleSubmit}>
        <input type="number" placeholder="Support" 
            // value={this.state.Feelings}
            onChange={(event) => this.handleChangeFor('support', event)}/>
        <br/>
        <button>NEXT</button>
        </form>
        <Review />
        <br/>
      </div>
    );
  }
}
const mapStateToProps = (reduxStore) =>({
  reduxStore
})

export default withRouter(connect(mapStateToProps)(Support));