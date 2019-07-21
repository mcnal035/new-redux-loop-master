import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const originalState = [{
        Feeling: 0,
        Understanding: 0,
        Support: 0,
        Comments: '',
      }]

const totalReview = (state = originalState, action) =>{
    if(action.type === 'ADD_FEELING') {
        return [...state, action.payload]
    } else if(action.type === 'ADD_UNDERSTANDING'){
        return[...state, action.payload]
    } else if(action.type === 'ADD_SUPPORT'){
        return[...state, action.payload]
    } else if(action.type === 'ADD_COMMENTS'){
        return[...state, action.payload]
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
