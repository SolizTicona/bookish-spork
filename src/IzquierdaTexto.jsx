import React from 'react';

function Izquierdo(props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>
        <h1>{props.titulo}</h1>
        <p>{props.descripcion}</p>
        <p>{props.historia}</p>
      </div>
      <img src={props.imagenSrc} alt="imagen" style={{ marginLeft: '20px' }} />
    </div>
  );
}

export default Izquierdo;
