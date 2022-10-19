import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.hydrate(
   <BrowserRouter>
      <App />
   </BrowserRouter>,
   document.getElementById('app'),
);
