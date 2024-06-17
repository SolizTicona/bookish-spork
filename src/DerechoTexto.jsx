import React from 'react';

function Derecho(props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={props.imagenSrc} alt="imagen" style={{ marginRight: '20px' }} />
      <div>
        <h1>{props.titulo}</h1>
        <p>{props.descripcion}</p>
        <p>{props.historia}</p>
      </div>
    </div>
  );
}

export default Derecho;
