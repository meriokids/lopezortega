import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../img/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AboutUs from '../../containers/About/About';

library.add(fab, fas);

const NavbarLight = (props) => (
  <Navbar collapseOnSelect bg="light" expand="lg" variant="light" className='opacity-100' fixed="top">
    <Container>
      <Navbar.Brand href="/"><img src={Logo} width='150px' height='auto' alt='logotype'/></Navbar.Brand>
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
          <Link className="nav-link text-decoration-none" to="/">Inicio</Link>
          <Link className="nav-link text-decoration-none" to="/#AboutUs">Quienes Somos</Link>
          <Link className="nav-link text-decoration-none" to="/#Servicios">Servicios</Link>
          <Link className="nav-link text-decoration-none" to="/noticias" onClick={props.clicked} replace>Noticias</Link>
          <Link className="nav-link text-decoration-none" to="/#Contact">Contacto</Link>
        </Nav>
      </Navbar.Collapse>
    
    </Container>
  </Navbar>

  
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default NavbarLight;
