import React from "react";
import { Col, Card, Button } from "react-bootstrap";

import ToText from "../../utils/toText";


const ShowNoticias = (props, p) => (


     
                
                <Col lg='4'>
                    <Card >
                        <Card.Img variant="top" src={props.thumbnail} />
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                                {`${ToText(
                                    props.description.substring(0, 100)
                                )}...`}
                            </Card.Text>
                            <Button variant="primary" href={props.title}>Ver más</Button>
                        </Card.Body>
                    </Card>
                </Col>

      

        
 
)

export default ShowNoticias;