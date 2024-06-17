
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

function Navigation(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">{props.menu}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="#home">Formacion Academica</Nav.Link>
            <Nav.Link href="#home">Instrumentos</Nav.Link>
            <Nav.Link href="#home">Profesores</Nav.Link>
            <Nav.Link href="#home">Historia del Instituto</Nav.Link>
            <Nav.Link href="#home">Informacion</Nav.Link>
            
            <NavDropdown title="Los Instrumentos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/src/Zguitarra.jsx">Guitarra</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Violin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Piano</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Bajo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Bateria</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
