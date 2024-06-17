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
    <Navigation menu="HISTORIA DEL INSTITUTO" />
    <MainTitle titulo1="Historia Del Instituto" 
    imagenSrc="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1020,h_688/https://aycrevista.com.ar/wp-content/uploads/2022/09/arquitectura-musical-03-1020x688.jpg"
    texto1=" El Instituto Nacional de Musica de Bolivia es una institución dedicada a la educación musical de alta calidad. Con más de 20 años de experiencia, ofrecemos una amplia gama de programas y cursos diseñados para estudiantes de todas las edades y niveles, desde principiantes hasta avanzados."
    />
    <CarouselComponent 
    imagenSrc1="https://images.adsttc.com/media/images/50f8/5a7a/b3fc/4b31/6d00/01d7/large_jpg/03.jpg?1413932893"
    imagenSrc2="https://images.adsttc.com/media/images/5aea/95c2/f197/cc60/0900/02c0/newsletter/Sel_Can-1%C2%A9Santiago_Roballo.jpg?1525322931"
    imagenSrc3="https://www.ramonacultural.com/wp-content/uploads/2024/04/Laredo-estudiantes-tocan-840.jpg"/>
  
  <TitleWithImages titulo="Nuestra Historia"
titulo1="Comienzo"
titulo2="Fundacion "
titulo3="Fundadores"
imagenSrc1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4Lfx4m4pQfJNWgBz0v4f6JSiKAaZjdWTQQ&s"
imagenSrc2="https://sonandoenpuertorico.com/wp-content/uploads/2020/02/3c054-e6a86c93-3048-5626-6f491f0452ff815c_lg.jpg"
imagenSrc3="https://www.unach.cl/wp-content/uploads/2023/04/DSC8993-scaled.jpg"
texto1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat."
texto2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat."
texto3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat."
    
    />
    <TitleWithImages 
    titulo1="Estudiantes Destacados"
    titulo2="El Futuro "
    titulo3="El Presente"
    imagenSrc1="https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2024/4/2/8_me_3_jamesssssss.jpg?itok=m6wlcKwC"
    imagenSrc2="https://statics.memondo.com/p/99/crs/2012/05/CR_635091_d9f7cbec9b3a443cafcddfb6d8b04dfd_escuela_musical_china_thumb_fb.jpg?cb=7860362"
    imagenSrc3="https://images.adsttc.com/media/images/50f8/5a7a/b3fc/4b31/6d00/01d7/large_jpg/03.jpg?1413932893"

    texto1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat."
    texto2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat."
    texto3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo. Suspendisse potenti. Curabitur vitae ligula eget sapien ultricies fringilla. Aliquam erat volutpat."
    />
    <Footer titulo1="Historia Del Instituto"
    texto1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo."
    />
  </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();