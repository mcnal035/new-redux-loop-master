import React, {Component} from 'react';


class Main extends Component {

    handleSubmit = (event)=>{
        event.preventDefault();
        //console.log('clicking on handleSubmit')
         this.props.history.push('/feeling');
      }

    render() {
        return(
            <>
            <div className="App">
            <header>
                 <h1 className="App-title">Feedback!</h1>
                 <h4><i>Getting Started</i></h4>
            </header>
                <button onClick={this.handleSubmit}>Lets Start</button>
            </div>
            </>
        );
    }


}
export default Main;