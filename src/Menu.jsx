import React from 'react';
import { Link } from 'react-router-dom';
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

            <Nav.Link to="/formacionacademica">Formacion Academica</Nav.Link>
            <Nav.Link href="#home">Instrumentos</Nav.Link>
            <Nav.Link href="#home">Profesores</Nav.Link>
            <Nav.Link href="#home">Historia del Instituto</Nav.Link>
          
            

        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
