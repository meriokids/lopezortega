import React from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import './Contact.css';

const Contact = () => {
    const [formStatus, setFormStatus] = React.useState('Enviar')
    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Enviando')
      const { name, email, phone, service, privacy } = e.target.elements
      let conFom = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        service: service.value,
        privacy: privacy.value,
      }
      console.log(conFom)
    }

    return (
    <div id="Contact" className="bg-map">
        <Container>
        <form onSubmit={onSubmit}>
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
                        <Form.Control type="text" placeholder="Juan Hernández" id="name" />
                    </Form.Group>
                </Col>

                <Col lg="6" className="">
                    <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
                        <Form.Label>Correo Electónico</Form.Label>
                        <Form.Control type="text" placeholder="correo@empresa.com" id="email" />
                    </Form.Group>
                </Col>

                <Col lg="6" className="">
                    <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="number" placeholder="55 4044 4044" id="phone" />
                    </Form.Group>
                </Col>

               
                <Col lg="6">
                <Form.Label>Como se enteró de nuestra empresa</Form.Label>
                    <Form.Select aria-label="Seleccione la Opción deseada" id="service">
                        <option>Seleccione la Opción deseada</option>
                        <option value="1">Asesoría Financiera</option>
                        <option value="2">Asesoría Laboral</option>
                        <option value="3">Consultoría Fiscal</option>
                    </Form.Select>
                </Col>

                <Col lg="12" className="my-3">
                    <Form.Check id="privacy"
                        inline
                        label="Acepto Términos y Condiciones de Lopez & Ortega S. C."
                        name="group1"
                        value="Acepto términos y condiciones y aviso de privacidad"
                    />
                </Col>

                <Col lg="12" className="mt-3 mb-5 text-center">
                <Button variant="ortega" size="lg" type="submit" className="mt-3">{formStatus}</Button> 
                </Col>
            </Row>
            </form>
        </Container>
    </div>
)

    };

export default Contact;