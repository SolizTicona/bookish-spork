import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function TitleWithImages(props) {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2 className="text-center">{props.titulo}</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={4} className="mb-4">
          <div className="text-center">
            <img
              src={props.imagenSrc1}
              className="img-fluid rounded-circle img-size"
              alt="Imagen 1"
            />
          </div>
          <div className="mt-2 text-center">
            <h2 className="h5">{props.titulo1}</h2>
            <p>{props.texto1}</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="text-center">
            <img
              src={props.imagenSrc2}
              className="img-fluid rounded-circle img-size"
              alt="Imagen 2"
            />
          </div>
          <div className="mt-2 text-center">
            <h2 className="h5">{props.titulo2}</h2>
            <p>{props.texto2}</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="text-center">
            <img
              src={props.imagenSrc3}
              className="img-fluid rounded-circle img-size"
              alt="Imagen 3"
            />
          </div>
          <div className="mt-2 text-center">
            <h2 className="h5">{props.titulo3}</h2>
            <p>{props.texto3}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TitleWithImages;
