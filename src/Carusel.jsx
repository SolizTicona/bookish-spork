import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselComponent(props) {
  return (
    <Carousel style={{ maxWidth: '900px', margin: '0 auto' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.imagenSrc1}
          alt="First slide"
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>{props.titulo1}</h3>
          <p>{props.texto1}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.imagenSrc2}
          alt="Second slide"
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>{props.titulo2}</h3>
          <p>{props.texto2}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.imagenSrc3}
          alt="Third slide"
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>{props.titulo3}</h3>
          <p>{props.texto3}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
