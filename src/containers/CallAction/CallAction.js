import React from 'react';
import './CallAction.css';
import { Container, Col, Row, Button} from 'react-bootstrap';

const  CallAction = () => (
    <div className='py-5 bg-gradientcta'>
        <Container>
            <Row>
                <Col lg="8" className='d-flex align-items-center'>
                    <h2 className='callToAction'>¿Problemas con el SAT?</h2>
                </Col>
                <Col lg="4" className='d-flex align-items-center'>
                <Button variant="ortega" size="lg" className="mt-3">Envíanos un mensaje</Button>
                </Col>
            </Row>
        </Container>
        

    </div>
)

export default CallAction;