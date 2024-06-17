import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from './Menu';
import Izquierdo from './IzquierdaTexto';
import Derecho from './DerechoTexto';
import Footer from './Piedepagina';


import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation menu="INSTITUTO NACIONAL DE MUSICA DE BOLIVIA" />

    <Footer titulo1="Instituto Nacional De Musica De Bolivia"
    texto1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo."
    />
  </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();