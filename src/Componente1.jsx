
import React from 'react';

function TitleWithImages(props) {
  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-4">{props.titulo1}</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="text-center">
            <img src="https://via.placeholder.com/200" className="img-fluid rounded-circle" alt="Imagen 1" />
          </div>
          <div className="mt-2">
            <p className="text-center">{props.texto1}</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="text-center">
            <img src="https://via.placeholder.com/200" className="img-fluid rounded-circle" alt="Imagen 2" />
          </div>
          <div className="mt-2">
            <p className="text-center">{props.texto2}</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="text-center">
            <img src="https://via.placeholder.com/200" className="img-fluid rounded-circle" alt="Imagen 3" />
          </div>
          <div className="mt-2">
            <p className="text-center">{props.texto3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleWithImages;
