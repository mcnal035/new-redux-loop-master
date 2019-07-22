import React, {Component} from 'react';


class Main extends Component {

    handleSubmit = ()=>{
        
        //console.log('clicking on handleSubmit')
         this.props.history.push('/feeling');
      }

    //   removeButton = () =>{
    //       console.log('in null')
    //       if(this.handleSubmit()){
    //           console.log('in null')
    //           return "null";
    //       } else{
    //           return  <button onClick={this.handleSubmit}>Lets Start</button>;
    //       }
    //   }

    render() {
        let button;
        if( () => this.handleSubmit()){
            button = <button onClick={this.handleSubmit}>Lets Start</button>
              
          } else {
              button = <p>Hello</p>;
              
          };
          
        return(
            <>
            <div className="App">
            <header>
                 <h1 className="App-title">Feedback!</h1>
                 
            </header>
                {button}
            </div>
            </>
        );
    }


}
export default Main;