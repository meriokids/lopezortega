import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Service.css';

const Service = () => (
    <div id="Service" className="py-5">
        <Container>
            <Row className="my-5">
                <Col lg={{ span: 3, offset: 9 }} className='d-flex align-items-center'>
                    <div className='paralelogramo'></div>
                    <div className='sectionTitle ms-4'>Servicios</div>
                </Col>
            </Row>

            <Row>
            <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fab', 'creative-commons-nd']} size={'6x'} color={'#8E8F92'}  />
                        <div className="ms-2">
                            <h5 className="TitleService">Title</h5>
                            <h6 className="SubitleService">Service</h6>
                            <Button variant="lopez" size="sm" className="mt-3">Ver más</Button>
                        </div>
                    </div>
                </Col>

                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fab', 'creative-commons-nd']} size={'6x'} color={'#8E8F92'}  />
                        <div className="ms-2">
                            <h5 className="TitleService">Title</h5>
                            <h6 className="SubitleService">Service</h6>
                            <Button variant="lopez" size="sm" className="mt-3">Ver más</Button>
                        </div>
                    </div>
                </Col>

                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fab', 'creative-commons-nd']} size={'6x'} color={'#8E8F92'}  />
                        <div className="ms-2">
                            <h5 className="TitleService">Title</h5>
                            <h6 className="SubitleService">Service</h6>
                            <Button variant="lopez" size="sm" className="mt-3">Ver más</Button>
                        </div>
                    </div>
                </Col>

                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fab', 'creative-commons-nd']} size={'6x'} color={'#8E8F92'}  />
                        <div className="ms-2">
                            <h5 className="TitleService">Title</h5>
                            <h6 className="SubitleService">Service</h6>
                            <Button variant="lopez" size="sm" className="mt-3">Ver más</Button>
                        </div>
                    </div>
                </Col>

                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fab', 'creative-commons-nd']} size={'6x'} color={'#8E8F92'}  />
                        <div className="ms-2">
                            <h5 className="TitleService">Title</h5>
                            <h6 className="SubitleService">Service</h6>
                            <Button variant="lopez" size="sm" className="mt-3">Ver más</Button>
                        </div>
                    </div>
                </Col>

                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fab', 'creative-commons-nd']} size={'6x'} color={'#8E8F92'}  />
                        <div className="ms-2">
                            <h5 className="TitleService">Title</h5>
                            <h6 className="SubitleService">Service</h6>
                            <Button variant="lopez" size="sm" className="mt-3">Ver más</Button>
                        </div>
                    </div>
                </Col>


                
            </Row>
        </Container>

    </div>
);

export default Service;