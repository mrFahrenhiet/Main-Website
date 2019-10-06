import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/main';
import './styles/styles.scss';
import 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const approot = document.getElementById('app');
ReactDOM.render(<App/>,approot)