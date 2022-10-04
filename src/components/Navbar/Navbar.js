import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../img/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

const NavbarLight = (props) => (
  <Navbar collapseOnSelect bg="light" expand="lg" variant="light" className='opacity-100' fixed="top">
    <Container>
      <Navbar.Brand href="#home"><img src={Logo} width='150px' height='auto' alt='logotype'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <div className='d-flex ms-2 me-5'>
        <FontAwesomeIcon icon={['fab', 'whatsapp']} size={'2x'} />
        <div className='text-start mx-2'>
          <small>Escríbenos:</small>
          <h6 className='small'>5520656468</h6>
        </div>
      </div>

      <Navbar.Collapse id="responsive-navbar-nav">
       
        <Nav className="me-auto">
        {/* <FontAwesomeIcon icon={['fa', 'home']}  /> */}
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="#AboutUs">Quienes Somos</Nav.Link>
          <Nav.Link href="#Service">Servicios</Nav.Link>
          <Nav.Link href="/noticias" onClick={props.clicked} >Noticias</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    
    </Container>
  </Navbar>

  
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default NavbarLight;
