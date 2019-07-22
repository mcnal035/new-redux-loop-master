import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const originalState = {
        feeling: 0,
        understanding: 0,
        support: 0,
        comments: '',
      }
// function holds the information for the object. last else if returns an empty object to clear.
const totalReview = (state = originalState, action) =>{
    if(action.type === 'ADD_FEELING') {
        return {...state, feeling: action.payload};
    } else if(action.type === 'ADD_UNDERSTANDING'){
        return {...state, understanding: action.payload};
    } else if(action.type === 'ADD_SUPPORT'){
        return {...state, support: action.payload};
    } else if(action.type === 'ADD_COMMENTS'){
        return {...state, comments: action.payload};
    }  else if(action.type === 'CLEAR_FORM') {
        return originalState;
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        totalReview,
    
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
