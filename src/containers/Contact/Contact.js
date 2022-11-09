import React from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import './Contact.css';

const Contact = () => (
    <div id="Contact" className="bg-map">
        <Container>
            <Row className="py-5">
                <Col lg="3" className='d-flex align-items-center'>
                    <div className='paralelogramo'></div>
                    <div className='sectionTitle ms-4'>Contacto</div>
                </Col>
            </Row>

            <Row>
                <Col lg="6" className="">

                    <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre Completo</Form.Label>
                        <Form.Control type="text" placeholder="Juan Hernández" />
                    </Form.Group>
                </Col>

                <Col lg="6" className="">
                    <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
                        <Form.Label>Correo Electónico</Form.Label>
                        <Form.Control type="text" placeholder="correo@empresa.com" />
                    </Form.Group>
                </Col>

                <Col lg="6" className="">
                    <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="number" placeholder="55 4044 4044" />
                    </Form.Group>
                </Col>

               
                <Col lg="6">
                <Form.Label>Como se enteró de nuestra empresa</Form.Label>
                    <Form.Select aria-label="Seleccione la Opción deseada">
                        <option>Seleccione la Opción deseada</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>

                <Col lg="12" className="my-3">
                    <Form.Check
                        inline
                        label="Acepto Términos y Condiciones de Lopez & Ortega S. C."
                        name="group1"
                    />
                </Col>

                <Col lg="12" className="mt-3 mb-5 text-center">
                <Button variant="ortega" size="lg" className="mt-3">Envíar mensaje</Button> 
                </Col>



            </Row>
        </Container>
    </div>
);

export default Contact;