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
    <Navigation menu="FORMACION ACADEMICA" />

    <MainTitle titulo1="Formacion Academica" 
    imagenSrc="https://c8.alamy.com/compes/abeghj/un-conjunto-juvenil-de-laton-orquesta-toca-en-publico-en-una-feria-de-verano-en-dulwich-park-al-sur-de-londres-inglaterra-abeghj.jpg"
    texto1=" La formacion academica de Bolivia es dedicada a la educación musical de alta calidad. Con más de 20 años de experiencia, ofrecemos una amplia gama de programas y cursos diseñados para estudiantes de todas las edades y niveles, desde principiantes hasta avanzados."
    />

<TitleWithImages titulo="Plan de estudio"
titulo1="Primer año"
titulo2="Segundo año"
titulo3="Tercer año"
imagenSrc1="https://c8.alamy.com/compes/t5mbdr/gales-aberystwyth-reino-unido-viernes-26-de-abril-de-2019-educacion-recortes-financieros-en-gales-mas-de-30-jovenes-musicos-alumnos-de-escuelas-en-aberystwyth-realizado-en-la-plaza-principal-de-la-ciudad-para-protestar-contra-los-recortes-propuestos-para-la-autoridad-local-financiado-servicio-de-musica-en-las-escuelas-locales-ceredigion-county-council-la-autoridad-local-se-propone-reducir-el-presupuesto-en-un-68-una-propuesta-que-pondra-en-peligro-la-provision-de-educacion-musical-asequible-a-unos-1200-alumnos-de-toda-la-provincia-el-credito-de-la-foto-keith-morris-alamy-live-news-t5mbdr.jpg"
imagenSrc2="https://c8.alamy.com/compes/e8x48t/cadenas-una-joven-adolescente-musico-practica-tocando-su-violin-parte-de-aberystwyth-arts-centers-musicfest-2014-e8x48t.jpg"
imagenSrc3="https://tempo.pe/wp-content/uploads/2018/03/ConciertoVerano2018-17.jpg"
texto1="En primer año , Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat."
texto2="En segundo año ,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat."
texto3="En tercer año ,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat."
    
    />

    <Banner
        title="Bienvenido a la Musica"
        description="Bienvenido al a formar parte de nuestra Institucion"
      />
      

    <Titulo2div 
    titulo1="Modalidad de Estudio " titulo2="Presencial" titulo3="Virtual"
    imagenSrc1="https://www.escuelademusicaemarbarcelona.es/wp-content/uploads/2019/06/escuela_-ninos_musica_escuela_emar.jpg"
    imagenSrc2="https://pbs.twimg.com/media/EFg9NVSW4AUlpiw.jpg"
    texto1="Presencial ,Desde su fundación en 1950, el Instituto Nacional de Música de Bolivia ha trazado un camino excepcional en el ámbito educativo y cultural del país. Comprometidos con la excelencia académica y el enriquecimiento del patrimonio musical boliviano, nuestro instituto se ha consolidado como un bastión de formación integral y desarrollo artístico."
    texto2="Virtual ,Ofrecemos programas educativos diversificados que abarcan desde la música clásica hasta las tradiciones folklóricas y la música moderna. Nuestra facultad está integrada por destacados músicos y académicos, quienes no solo enseñan habilidades técnicas y teóricas, sino que también inspiran a nuestros estudiantes a explorar su creatividad y expresión artística."
    />

<CarouselComponent 
    imagenSrc1="https://indiehoy.com/wp-content/uploads/2022/06/metallica-yousician.jpg"
    imagenSrc2="https://escum.com.co/wp-content/uploads/2024/01/hispanic-girl-with-music-skills-listening-instructions-her-guitar-teacher-during-video-call-laptop-while-sitting-sofa-home.jpg"
    imagenSrc3="https://mastervirtual.org/wp-content/uploads/2021/08/Diseno-sin-titulo-14-1000x500.jpg"/>

    <Footer titulo1="Formacion Academica"
    texto1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo."
    />
  </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();