import React from 'react';
import ReactDom from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import CalenderStore from './components/Store';

ReactDom.render(
  <Provider store={CalenderStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);