import React from 'react';
// import logo from './logo.svg';
// import imagenCentral from './assets/images/home/death_star_2.jpg';
import './App.css';
import './assets/css/imgHome.css';
import { DataProvider } from './components/DataContext';
import ImgHome from "./components/ImgHome";
import Coordenadas from './components/Coordenadas';
import Buscador from './components/Buscador';
import ComboBoxContainer from './components/ComboBoxContainer';

function App() {
    const datosDinamicos = {
      widthScreen: 0,
      heightScreen: 0,
      widthImg: 0,
      heightImg: 0
  }

  return (
    <DataProvider value={datosDinamicos}>
    <div className="App">
      <header className="App-header">
        <Coordenadas/>
        <ImgHome/>
        <Buscador/>
        <ComboBoxContainer />
      </header>
    </div>
    </DataProvider>
  );
// }
  }

export default App;
