import React, {Component} from 'react';


class Success extends Component {

    handleSubmit = (event)=>{
        event.preventDefault();
        //console.log('clicking on handleSubmit')
         this.props.history.push('/main');
      }

    render() {
        return(
            <>
            <div className="App">
            <header>
                 <h1 className="App-title">Feedback!</h1>
                 <h2>Nice Work, Thank you for the Input!</h2>
            </header>
                <button onClick={this.handleSubmit}>Want to try Again</button>
            </div>
            </>
        );
    }


}
export default Success;