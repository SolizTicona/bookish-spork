import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css'; // Asegúrate de crear y enlazar este archivo CSS

function MainTitle(props) {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1 className="display-4 text-center">{props.titulo1}</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <div className="text-center img-container">
            <img
              src={props.imagenSrc}
              className="img-fluid"
              alt="Descripción de la imagen"
            />
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <div className="div-titulo text-center">
            <p>{props.texto1}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MainTitle;
