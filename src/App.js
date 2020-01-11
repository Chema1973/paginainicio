import React from 'react';
// import logo from './logo.svg';
// import imagenCentral from './assets/images/home/death_star_2.jpg';
import './App.css';
import './assets/css/imgHome.css';
import ImgHome from "./components/ImgHome";
import Coordenadas from './components/Coordenadas';
import Buscador from './components/Buscador';
import ComboBoxContainer from './components/ComboBoxContainer';
// var data = require('../src/data/data')
// import '../src/data/data';
// console.log('app');

// const imgCentral = require('./assets/images/home/' + data.dataConf.centralimage);
// --> Se aplica la imagen central desde la configuración

// var oPreuba = "Texto de prueba";

function App() {

  // console.log(data.dataIco);
// http://musttoknow.com/how-to-set-global-variable-in-react-application/
// https://dev.to/mdeveloper20/state-management-in-reactjs-using-redux-library-57o1
// ÑAPAQUI
// --> usar Redux??

  return (
    <div className="App">
      <header className="App-header">
        <Coordenadas/>
        <ImgHome/>
        <Buscador/>
        <ComboBoxContainer />
        {/* <img src={imagenCentral} className="App-logo" alt="logo" /> */}
        {/* <img src={imgCentral} /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
