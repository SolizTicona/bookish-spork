import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FormComponent from './Formulario';
import Navigation from './Menu';
import MainTitle from './Titulo';
import Footer from './Piedepagina';
import CarouselComponent from './Caruseldeimagenes';
import TitleWithImages from './Componente1';
import reportWebVitals from './reportWebVitals';
import Titulo2div from './Componente2';
import ComplexComponent from './Componente3';
import Izquierdo from './IzquierdaTexto';
import Derecho from './DerechoTexto';

import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Navigation menu="INSTITUTO NACIONAL DE MUSICA DE BOLIVIA" />

    <MainTitle titulo1="Instituto Nacional De Musica De Bolivia" 
    imagenSrc="https://www.instituto-athenea.com.ar/wp-content/uploads/2021/04/IMG-20191027-WA0043-1024x768.jpg"
    texto1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat."/>
      <ComplexComponent/>
     <Titulo2div 
    titulo1="¿Quienes Somos?" titulo2="Nuestro camino" titulo3="Nuestros Objetivos"
    texto1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat."
    texto2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat."
    />
    <Titulo2div 
    titulo2="Nuestro camino" titulo3="Nuestros Objetivos"
    texto1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat."
    texto2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat."
    />
  
  
    <CarouselComponent />
    <TitleWithImages titulo1="¿Que es lo que ofrecemos?"
    texto1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat."
    texto2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat."
    texto3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat."
    />
    <TitleWithImages 
    texto1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat."
    texto2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat."
    texto3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat."
    />

    <Izquierdo imagenSrc="https://www.instituto-athenea.com.ar/wp-content/uploads/2021/04/IMG-20191027-WA0043-1024x768.jpg"/>
    <Derecho imagenSrc="https://www.instituto-athenea.com.ar/wp-content/uploads/2021/04/IMG-20191027-WA0043-1024x768.jpg"/>


    
  
  
    <Footer titulo1="Instituto Nacional De Musica De Bolivia"
    texto1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo."
    />

    

    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
