// src/components/Titulo2div.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
          <img src="https://via.placeholder.com/200" className="img-fluid rounded-circle" alt="Imagen 3" />
            <h2 className="h5">{props.titulo2}</h2>
            <p>{props.texto1}</p>
          </div>
        </Col>
        <Col>
          <div className="div-titulo text-center">
          <img src="https://via.placeholder.com/200" className="img-fluid rounded-circle" alt="Imagen 3" />
            <h2 className="h5">{props.titulo3}</h2>
            <p>{props.texto2}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Titulo2div;
