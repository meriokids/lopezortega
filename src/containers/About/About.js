import React from 'react';
import { Container, Col, Row} from 'react-bootstrap';
import './About.css';
import Logosymbol from '../../img/logosymbol.jpg';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutUs = () => (
  <div id="AboutUs" className="py-5">
    <Container>
      <Row className="my-5">
        <Col lg="3" className="d-flex align-items-center">
          <div className="paralelogramo"></div>
          <div className="sectionTitle ms-4">
            Quienes <br /> Somos
          </div>
        </Col>

        <Col lg="6" className="my-3">
          <h5 className='bold'>LÓPEZ & ORTEGA CONTADORES es una firma con una amplia gama en
          servicios financieros, fiscales y empresariales.</h5>
          
         <p> Nos orgullece ofrecer a nuestros clientes un respaldo financiero y fiscal de excelencia y
          asegurado siempre una relación de confianza y seguridad integral en
          todos los aspectos, representar a clientes de diversos sectores
          económicos y contribuir al desarrollo e implementación de sus
          necesidades fundamentales para el buen funcionamiento de las empresas,
          es lo que se destaca en nuestro trabajo. </p>
          
          <p>Es fundamental asesorar y proporcionar servicios con alto nivel de profesionalismo y nuestro
          compromiso en salvaguardar los intereses económicos de nuestros
          clientes.</p>
          
          
          <h4 className='my-2'>Misión</h4> Desarrollar servicios profesionales de manera
          personalizada, mediante soluciones de excelencia y con alta calidad y
          confianza integral en nuestro servicio. 
          
          <h4 className='my-2'>Visión</h4> Ser una firma a nivel global, comprometida con la innovación, profesionalismo,
          especialización en diversas áreas en el ámbito de negocios.
        </Col>
        <Col lg="3" className="p-4">
          <img src={Logosymbol} width="100%" height="auto" alt="logosymbol" />
        </Col>
      </Row>
    </Container>
  </div>
);

export default AboutUs;