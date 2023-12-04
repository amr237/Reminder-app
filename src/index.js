import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';
import 'bootstrap/dist/css/bootstrap.css';
// import {createStore} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import reminders from './Reducers/index.js';
import './index.css';

const store = createStore(reminders)


const root = ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
