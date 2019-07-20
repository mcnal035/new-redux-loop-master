import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const state = {
  feelings: 0,
  Understanding: 0,
  Support: 0,
  Comments: '',
}



const reduxStore = createStore(
    combineReducers({
      // all reducers will go here...
    
    }),
    applyMiddleware(logger)
  );
  



ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
