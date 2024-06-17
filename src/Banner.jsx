import React from 'react';
import './App'; // Asegúrate de crear y enlazar este archivo CSS

function Banner(props) {
  return (
    <div className="banner">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {/* Puedes añadir más contenido según tus necesidades */}
    </div>
  );
}

export default Banner;
