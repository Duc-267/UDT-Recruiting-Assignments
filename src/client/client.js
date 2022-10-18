import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';
import { Home } from './pages';

ReactDOM.hydrate(<Home />, document.getElementById('app'));
