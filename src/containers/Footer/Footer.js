import React from "react";
import { Row, Col} from "react-bootstrap";
import './Footer.css';
import Logowhite from '../../img/logo-w.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
    <div>
        <Row className="g-0">
            <Col lg="4" className="bg-graylo text-center"><img src={Logowhite} width='200px' height='auto' alt='logosymbol' className="mx-3 py-3"/></Col>
            <Col lg="6" className="bg-bluelo d-flex align-items-center justify-content-center"><h5 className="footertxt py-3">LOPEZ & ORTEGA®, DERECHOS RESERVADOS 2022 • AVISO DE PRIVACIDAD</h5></Col>
            <Col lg="2" className="bg-greenlo">
                <div className='d-flex ms-2 text-white align-items-center py-3'>
                    <FontAwesomeIcon icon={['fab', 'whatsapp']} size={'2x'} />
                    <div className='text-start mx-2'>
                        <small>Escríbenos:</small>
                        <h6 className='small'>5520656468</h6>
                    </div>
                </div>
            </Col>
        </Row>

    </div>
);

export default Footer;