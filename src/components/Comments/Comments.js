import React, {Component} from 'react';
import {connect} from 'react-redux';
import Review from '../Review/Review';
import {withRouter} from 'react-router';

class Support extends Component {
  state = {
     comments: '',
          }
  
// function takes the comments and dispatches it to index. Then sends 
        //you to the next page Review.
   handleSubmit = (event) =>{
    this.props.history.push('/Review');
    event.preventDefault();
    this.props.dispatch({type: 'ADD_COMMENTS', payload: this.state.comments})
   
    console.log('clicked on add handleSubmit', this.state.comments);
}
  handleChangeFor = ( event) => {
     
      this.setState({
          comments:
             event.target.value,
          
      })
     
    }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Dont Forget It!</i></h4>
        </header>
        <h2>Any Comments?</h2>
        <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Comments" 
            // value={this.state.Feelings}
            onChange={(event) => this.handleChangeFor( event)}/>
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