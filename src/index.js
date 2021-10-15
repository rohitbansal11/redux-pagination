import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider } from 'react-redux';
import { combineReducers } from 'redux'
import reducerA from './main/reducer/reducer';
import reducerB from './main/reducer/reducer2';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


let rootReducer=  combineReducers({
  rA: reducerA,
  rB:reducerB
  
});


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))



ReactDOM.render(
 <Provider  store={store}>
     <App />
 </Provider>
  
 , document.getElementById('root')
);

