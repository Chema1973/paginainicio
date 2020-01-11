import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import '../src/data/data';
// var data = require('../src/data/data')
// import * as Datos from '../src/data/data';
// console.log('index');
// window.Datos = Datos;
// window.Prueba = "Hola Prueba";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
