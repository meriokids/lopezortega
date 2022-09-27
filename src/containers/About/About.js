import React from 'react';
import { Container, Col, Row} from 'react-bootstrap';
import './About.css';
import Logosymbol from '../../img/logosymbol.jpg';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutUs = () => (

    <div id='AboutUs' className='py-5'>
        <Container>
            <Row className='my-5'>
                <Col lg="3" className='d-flex align-items-center'>
                    <div className='paralelogramo'></div>
                    <div className='sectionTitle ms-4'>Quienes <br /> Somos</div>
                </Col>
               
                <Col lg="6" className='my-3'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce volutpat, libero ac condimentum condimentum, elit urna accumsan
                    leo, sed posuere mi massa vitae ligula. Vivamus luctus interdum nisi,
                    et laoreet tempus, nisi nisi gravida lectus, non convallis lectus dui id justo.
                    Suspendisse non ultrices velit, sed maximus velit.</p>

                    <p>Curabitur porttitor mattis blandit. Donec non faucibus velit. Sed semper finibus quam,
                    vel congue massa fringilla eu. Ut ex quam, tempor quis eros ac, feugiat sagittis ex.
                    Maecenas mattis urna eleifend, imperdiet urna ut, convallis ex.</p></Col>
                <Col lg="3" className='p-4'>
                    <img src={Logosymbol} width='100%' height='auto' alt='logosymbol'/>
                </Col>
            </Row>
        </Container>
    </div>
)

export default AboutUs;