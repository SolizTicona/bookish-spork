import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './App.css'; // Asegúrate de crear y enlazar este archivo CSS

function ComplexComponent(props) {
  // Estado local para controlar la visibilidad de cada tarjeta
  const [textVisibility, setTextVisibility] = useState({
    texto1: false,
    texto2: false,
    texto3: false,
    texto4: false,
    texto5: false,
    texto6: false
  });

  // Función para alternar la visibilidad del texto de cada tarjeta
  const toggleTextVisibility = (texto) => {
    // Crea un nuevo objeto de visibilidad
    const newVisibility = {
      texto1: false,
      texto2: false,
      texto3: false,
      texto4: false,
      texto5: false,
      texto6: false
    };

    // Activa la visibilidad del texto clickeado
    newVisibility[texto] = !textVisibility[texto];

    // Actualiza el estado
    setTextVisibility(newVisibility);
  };

  return (
    <Container className="complex-component">
      <h1 className="text-center mb-4">{props.titulo}</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={props.imagenSrc1} className="fixed-size-img" />
            <Card.Body>
              <Card.Title>{props.titulo1}</Card.Title>
              <Card.Text style={{ display: textVisibility.texto1 ? 'block' : 'none' }}>
                {props.texto1}
              </Card.Text>
              <Button variant="primary" onClick={() => toggleTextVisibility('texto1')}>
                {textVisibility.texto1 ? 'Ocultar' : 'Mostrar'} Texto
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={props.imagenSrc2} className="fixed-size-img" />
            <Card.Body>
              <Card.Title>{props.titulo2}</Card.Title>
              <Card.Text style={{ display: textVisibility.texto2 ? 'block' : 'none' }}>
                {props.texto2}
              </Card.Text>
              <Button variant="primary" onClick={() => toggleTextVisibility('texto2')}>
                {textVisibility.texto2 ? 'Ocultar' : 'Mostrar'} Texto
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={props.imagenSrc3} className="fixed-size-img" />
            <Card.Body>
              <Card.Title>{props.titulo3}</Card.Title>
              <Card.Text style={{ display: textVisibility.texto3 ? 'block' : 'none' }}>
                {props.texto3}
              </Card.Text>
              <Button variant="primary" onClick={() => toggleTextVisibility('texto3')}>
                {textVisibility.texto3 ? 'Ocultar' : 'Mostrar'} Texto
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={props.imagenSrc4} className="fixed-size-img" />
            <Card.Body>
              <Card.Title>{props.titulo4}</Card.Title>
              <Card.Text style={{ display: textVisibility.texto4 ? 'block' : 'none' }}>
                {props.texto4}
              </Card.Text>
              <Button variant="primary" onClick={() => toggleTextVisibility('texto4')}>
                {textVisibility.texto4 ? 'Ocultar' : 'Mostrar'} Texto
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={props.imagenSrc5} className="fixed-size-img" />
            <Card.Body>
              <Card.Title>{props.titulo5}</Card.Title>
              <Card.Text style={{ display: textVisibility.texto5 ? 'block' : 'none' }}>
                {props.texto5}
              </Card.Text>
              <Button variant="primary" onClick={() => toggleTextVisibility('texto5')}>
                {textVisibility.texto5 ? 'Ocultar' : 'Mostrar'} Texto
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={props.imagenSrc6} className="fixed-size-img" />
            <Card.Body>
              <Card.Title>{props.titulo6}</Card.Title>
              <Card.Text style={{ display: textVisibility.texto6 ? 'block' : 'none' }}>
                {props.texto6}
              </Card.Text>
              <Button variant="primary" onClick={() => toggleTextVisibility('texto6')}>
                {textVisibility.texto6 ? 'Ocultar' : 'Mostrar'} Texto
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ComplexComponent;
