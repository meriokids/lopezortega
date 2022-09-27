import React from 'react';
import './ParallaxCTA.css';
import { Container, Col, Row} from 'react-bootstrap';

const  ParallaxCTA = () => (
    <div className='py-5 bg-parallax'>
        <Container>
            <Row>
                <Col lg="8">
                    <h1 className='my-5 callToAction'>Call to Action</h1>
                </Col>
            </Row>
        </Container>
        

    </div>
)

export default ParallaxCTA;