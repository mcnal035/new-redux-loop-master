import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';
//import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

//routes
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Main from '../Main/Main'
import Comments from '../Comments/Comments'


// import Comments from '../Comments/Comments'


class App extends Component {

  handleSubmit = (event)=>{
    event.preventDefault();
    //console.log('clicking on handleSubmit')
     this.props.history.push('/feeling');
  }

  render() {
   
    

    return (
      <>
      
      <Router> 
          
         
          {/* <Route exact path='/' component={Main} /> */}
          <Route  path='/' render={(props) => <Feeling {...props} isAuthed={true}/>} />
          <Route path='/Understanding/'render= {(props) => <Understanding {...props} isAuthed={true}/>} />
          <Route path='/Support/' render={(props) => <Support {...props} isAuthed={true}/>} />
          <Route path='/Comments/' render={(props) => <Comments {...props} isAuthed={true}/>} />
       
        
      </Router>
  </>
    );
  }
}


export default App;
