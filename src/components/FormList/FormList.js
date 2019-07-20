import React, {Component} from 'react';


class FormList extends Component {

    handleClick = () => {
        // Do some JavaScript fun stuff
        alert(`Going back to home page...`);
    
        // then programmatically navigate to home
        // this.props.history.push('/');
      }


    render(){
        return (
            <>
        <h2>Review Your Feedback</h2>
        <ul>
          <li>Feelings:</li>
          <li>Understanding:</li>
          <li>Support:</li>
          <li>Comments:</li>
        </ul>
        <br/>
        <button onClick={this.handleClick}>Go Home</button>
        </>
        );
    }

}
export default FormList;