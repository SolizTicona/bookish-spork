import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css'; // Asegúrate de crear y enlazar este archivo CSS

function Titulo2div(props) {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1 className="display-4 text-center">{props.titulo1}</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <div className="div-titulo text-center">
            <img src={props.imagenSrc1} className="img-fluid rounded-circle fixed-size-img2" alt="Imagen 1" />
            <h2 className="h5">{props.titulo2}</h2>
            <p>{props.texto1}</p>
          </div>
        </Col>
        <Col>
          <div className="div-titulo text-center">
            <img src={props.imagenSrc2} className="img-fluid rounded-circle fixed-size-img2" alt="Imagen 2" />
            <h2 className="h5">{props.titulo3}</h2>
            <p>{props.texto2}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Titulo2div;
