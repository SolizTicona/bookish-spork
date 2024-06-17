
import { Container, Row, Col } from 'react-bootstrap';

function Footer(props) {
  return (
    <footer className="bg-light text-center text-lg-start">
      <Container className="p-4">
        <Row>
          <Col lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">{props.titulo1}</h5>
            <p>
              {props.texto1}
            </p>
          </Col>

          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Redes Sociales</h5>
            <ul className="list-unstyled">
              <li><a href="#privacy-policy">Instagram</a></li>
              <li><a href="#terms-of-service">Facebook</a></li>
              <li><a href="#contact-us">TikTok</a></li>
              <li><a href="#contact-us">Youtube</a></li>
            </ul>
          </Col>

          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="#privacy-policy">Política de Privacidad</a></li>
              <li><a href="#terms-of-service">Términos de Servicio</a></li>
              <li><a href="#contact-us">Contáctanos</a></li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className="text-dark" href="https://yourwebsite.com/"> Boliviamusical.com </a>
      </div>
    </footer>
  );
}

export default Footer;
