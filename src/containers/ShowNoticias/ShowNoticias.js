import React from "react";
import { Col, Row, Container, Card, Button } from "react-bootstrap";
import NavbarLight from './components/Navbar/Navbar';
import Footer from "../Footer/Footer";

const Noticias = () => (
    <div>
        <NavbarLight></NavbarLight>

        <Container>
            <Row>
                
                <Col lg='4'>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>

        <Footer></Footer>
    </div>
)

export default Noticias;