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
    <Navigation menu="INSTRUMENTOS" />
    <MainTitle titulo1="INSTRUMENTOS" 
    imagenSrc="https://c4.wallpaperflare.com/wallpaper/346/873/116/music-guitar-instrumento-studio-wallpaper-preview.jpg"
    texto1=" Instrumentos de Musica de Bolivia es una institución dedicada a la educación musical de alta calidad. Con más de 20 años de experiencia, ofrecemos una amplia gama de programas y cursos diseñados para estudiantes de todas las edades y niveles, desde principiantes hasta avanzados."
    />
    <ComplexComponent titulo="Instrumentos" titulo1="Guitarra" titulo2="Bajo" titulo3="Violin" titulo4="Piano" titulo5="Bateria" titulo6="Charango"
    imagenSrc1="https://img.freepik.com/fotos-premium/papel-pared-hd-8k-imagen-fotografica-stock_915071-30247.jpg" 
    imagenSrc2="https://media.istockphoto.com/id/171589602/es/foto/guitarra-baja-jugador.webp?b=1&s=170667a&w=0&k=20&c=h2pZKsV30Sy2LuSLfrRzJeA0iEFDK7KQwM0l26rm93o=" 
    imagenSrc3="https://images.pexels.com/photos/3120109/pexels-photo-3120109.jpeg?cs=srgb&dl=pexels-fotograf-jylland-1557004-3120109.jpg&fm=jpg" 
    imagenSrc4="https://img.freepik.com/fotos-premium/teclado-piano-hd-8k-ilustracion-vectorial-fondo-pantalla-imagen-archivo_915071-36521.jpg" 
    imagenSrc5="https://p4.wallpaperbetter.com/wallpaper/27/471/599/drums-hd-wallpaper-preview.jpg" 
    imagenSrc6="https://t4.ftcdn.net/jpg/03/31/43/65/360_F_331436549_FYexJncx0QMA6Nez3F1K3qU9r1C2Wrgc.jpg" 
    texto1="La guitarra es un instrumento de cuerda pulsada formado por una caja de resonancia con una singular forma de 8, un mástil con trastes y seis cuerdas. Se utiliza apoyando la guitarra sobre el muslo y rasgando las cuerdas con los dedos o con una púa."
    texto2="El bajo eléctrico, llamado sencillamente bajo, es un instrumento musical melódico de la familia de los cordófonos, similar en apariencia y construcción a la guitarra eléctrica, pero con un cuerpo de mayores dimensiones, un mástil de mayor longitud y escala y cuerdas más gruesas, normalmente cuatro, afinadas según la afinación estándar del contrabajo, su antecesor"
    texto3="El violín (del italiano violino, diminutivo de viola) es un instrumento de cuerda. Quien lo toca recibe el nombre de violinista."
    texto4="El piano (abreviación de «pianoforte», palabra que en italiano está compuesta por los términos «piano», que significa «suave», y «forte», «fuerte») es un instrumento musical armónico, clasificado como instrumento de cuerda percutida por el sistema de clasificación tradicional, y según la clasificación de Hornbostel-Sachs es un cordófono simple. El músico que toca el piano se denomina pianista."
    texto5="La batería es un conjunto de instrumentos musicales de percusión usado por muchas agrupaciones musicales."
    texto6="El charango es un instrumento de cuerda de la familia de laúd, originario de la región andina de Sudamérica, el charango se difundió por la zona de la Cordillera de los Andes durante el Virreinato del Perú. Posee cinco pares de cuerdas, aunque hay variaciones con menos o más cuerdas, pero casi siempre en cinco órdenes o juegos."
    />
    <Titulo2div 
    titulo1="Tipos de Instrumentos" titulo2=" Percusion" titulo3=" Viento"
    imagenSrc1="https://media.istockphoto.com/id/1400865302/es/vector/gran-conjunto-de-iconos-de-instrumentos-musicales-de-prcussion-aislados.jpg?s=612x612&w=0&k=20&c=01w7X62RcylvVbqM2e6URhK8WUoq9Vih2JfZinxsNi0="
    imagenSrc2="https://musicway.es/wp-content/uploads/2024/02/descubre-cuantos-instrumentos-de-cuerda-pulsada-existen-1024x619.jpg"
    texto1="Desde su fundación en 1950, el Instituto Nacional de Música de Bolivia ha trazado un camino excepcional en el ámbito educativo y cultural del país. Comprometidos con la excelencia académica y el enriquecimiento del patrimonio musical boliviano, nuestro instituto se ha consolidado como un bastión de formación integral y desarrollo artístico."
    texto2="Ofrecemos programas educativos diversificados que abarcan desde la música clásica hasta las tradiciones folklóricas y la música moderna. Nuestra facultad está integrada por destacados músicos y académicos, quienes no solo enseñan habilidades técnicas y teóricas, sino que también inspiran a nuestros estudiantes a explorar su creatividad y expresión artística."
    />
    <Titulo2div 
    titulo2="Cuerda" titulo3="Viento Metal"
    imagenSrc1="https://www.adprensa.cl/sitio_2018/wp-content/uploads/2024/03/DSC4445-1024x683.jpg"
    imagenSrc2="https://i.ytimg.com/vi/3cbAx9dkQg4/maxresdefault.jpg"
    texto1="En nuestras modernas instalaciones, equipadas con aulas especializadas y una biblioteca musical enriquecedora, fomentamos un ambiente propicio para el aprendizaje y la investigación musical. Además, promovemos la participación activa de nuestros estudiantes en conciertos, festivales y eventos culturales tanto a nivel nacional como internacional."
    texto2="En el Instituto Nacional de Música de Bolivia, cada paso que damos está guiado por el compromiso con la calidad educativa, la preservación de nuestras raíces musicales y la promoción de talentos emergentes. Nos enorgullece formar parte del crecimiento cultural de Bolivia y seguir construyendo un legado musical que perdure en el tiempo.Nuestra facultad está integrada poicos, quienes no solo enseñan habilidades técnicas y teóricas, sino que también inspiran a nuestros estudiantes a explorar su creatividad y expresión artística."
    /> 
    <Footer titulo1="Instrumentos"
    texto1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna erat. Nulla facilisi. Mauris ultricies justo non bibendum convallis. Vivamus auctor, nisi ut aliquet ultrices, neque orci fermentum nulla, et bibendum ex mi sit amet leo."
    />
  </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();