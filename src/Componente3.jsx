import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


function ComplexComponent(props) {
  return (
    <Container className="complex-component">
      <h1 className="text-center mb-4">Componente Complejo</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src="https://via.placeholder.com/400x300" />
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod leo id dolor venenatis feugiat.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src="https://via.placeholder.com/400x300" />
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>
                Sed fermentum, felis a dapibus ullamcorper, nunc lectus vestibulum velit, nec luctus nisi neque vel mi.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src="https://via.placeholder.com/400x300" />
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>
                Phasellus eget aliquam augue. Duis ac pretium lorem, ac lacinia lacus.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src="https://via.placeholder.com/400x300" />
            <Card.Body>
              <Card.Title>Card 4</Card.Title>
              <Card.Text>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src="https://via.placeholder.com/400x300" />
            <Card.Body>
              <Card.Title>Card 5</Card.Title>
              <Card.Text>
                Mauris at augue eget velit volutpat tincidunt a sit amet sapien.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src="https://via.placeholder.com/400x300" />
            <Card.Body>
              <Card.Title>Card 6</Card.Title>
              <Card.Text>
                Proin eu sapien eget libero luctus ullamcorper. Donec sodales ex eu ante dictum, in malesuada ex varius.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ComplexComponent;
