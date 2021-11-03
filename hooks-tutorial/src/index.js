import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppClass from './AppClass';
import AppuseRef from './AppuseRef';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppClass /> */}
    <AppuseRef />
  </React.StrictMode>,
  document.getElementById('root')
);
