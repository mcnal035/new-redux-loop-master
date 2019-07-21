import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Main extends Component {

    handleSubmit = (event)=>{
        event.preventDefault();
        //console.log('clicking on handleSubmit')
         this.props.history.push('/feeling');
      }

    render() {
        return(
            <>
            <h1>Getting Started</h1>
            <button onClick={this.handleSubmit}>Lets Start</button>
            </>
        );
    }


}
export default Main;