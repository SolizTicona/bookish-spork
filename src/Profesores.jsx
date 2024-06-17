import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navigation from './Menu';
import MainTitle from './Titulo';
import Footer from './Piedepagina';
import CarouselComponent from './Carusel';

import TitleWithImages from './Componente1';
import reportWebVitals from './reportWebVitals';
import Titulo2div from './Componente2';
import ComplexComponent from './Componente3';
import Banner from './Banner';



import 'bootstrap/dist/css/bootstrap.min.css';
import MainTitle from './Titulo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation menu="PROFESORES" />
    <MainTitle titulo1="Profesores" 
    imagenSrc="https://cdn.nosequeestudiar.net/uploads/2013/08/por-que-ense%C3%B1ar-musica.jpg"
    texto1=" El Instituto Nacional de Musica de Bolivia es una institución dedicada a la educación musical de alta calidad. Con más de 20 años de experiencia, ofrecemos una amplia gama de programas y cursos diseñados para estudiantes de todas las edades y niveles, desde principiantes hasta avanzados."
    />
    <CarouselComponent 
    imagenSrc1="https://lh4.googleusercontent.com/proxy/8KA3dq_XGBMv4D9kFrkk1oUMvdGml7y7WqZczMLYhvDvZdK5PEoFOe_3YIVLXRq06Ruz13p3P3OkBmGI3MlDPq_illkLAc3_54SbgW7xEX4BBpdYTqa0zTarqpHi21xLgB-viRrAeLlyxC4CwqUJYZ2nQ3kURd1yO3NRhNTvMjWyHyxrGz2a0g"
    imagenSrc2="https://lh4.googleusercontent.com/proxy/HyOs3nVwSitOlVOiM-J_ojyT6YNrZcDBczbtTJmxyjhXSKynxAr7Wsv8BFOA92YyXsAiiR19BOdYggx4OTHwv1Oj-mgu3pD_i4WD6Bm5KZHayOR2CRlQDESMDFdrG3aByGR0jPQ5EA"
    imagenSrc3="https://jocejob.com/wp-content/uploads/el-papel-que-desempenan-los-profesores-de-musica-en-la-ensenanza-de-instrumentos-musicales-6491bc8231d98.webp"/>
    <Titulo2div 
    titulo1="Profesores Destacados" titulo2="Camilo Tapia" titulo3="Julian Montes"
    imagenSrc1="https://assets.eldesconcierto.cl/2022/12/manuel-puebla-obtuvo-reconocimiento-por-ensenar-1024x562.jpg"
    imagenSrc2="https://cdn.euroinnova.edu.es/img/subidasEditor/fotolia_59453610_subscription_monthly_m-1610953415-1619922699.webp"
    />
    <Titulo2div 
    titulo2="Pablo Montreal" titulo3="Casimira Luna"
    imagenSrc1="https://academiapreludio.com/wp-content/uploads/2021/08/Pablo-San-Nicasio-1024x768.jpg"
    imagenSrc2="https://mjpedagogiamusical.com/wp-content/uploads/2020/04/mjpedagogiamusical-04.jpg"
    />
    <Footer titulo1="Profesores"
    texto1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo."
    />
  </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();