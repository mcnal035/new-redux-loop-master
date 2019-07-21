import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';
//import { withRouter } from 'react-router-dom';


//routes
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Main from '../Main/Main'
import Comments from '../Comments/Comments'
import Review from '../Review/Review'
import Success from '../Success/Success';


// import Comments from '../Comments/Comments'


class App extends Component {



  render() {
   
    

    return (
      <>
      
      <Router> 
          
         
          <Route  path='/' render={(props) => <Main {...props} isAuthed={true}/>} />
          <Route  path='/feeling' render={(props) => <Feeling {...props} isAuthed={true}/>} />
          <Route path='/Understanding/'render= {(props) => <Understanding {...props} isAuthed={true}/>} />
          <Route path='/Support/' render={(props) => <Support {...props} isAuthed={true}/>} />
          <Route path='/Comments/' render={(props) => <Comments {...props} isAuthed={true}/>} />
          <Route path='/Review/' render={(props) => <Review {...props} isAuthed={true}/>} />
          <Route path='/Success/' render={(props) => <Success {...props} isAuthed={true}/>} />
       
        
      </Router>
  </>
    );
  }
}


export default App;
