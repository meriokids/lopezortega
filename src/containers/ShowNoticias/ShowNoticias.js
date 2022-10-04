import React from "react";
import { Col, Card, Button} from "react-bootstrap";
import moment from "moment";
import ToText from "../../utils/toText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ShowNoticias = (props, p) => (


     
                
    <Col lg='3'>
        <Card >
            <Card.Img variant="top" src={props.thumbnail} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {`${ToText(
                        props.description.substring(0, 100)
                    )}...`}

                    <div className="d-flex text-muted mt-2">
                        <small>
                        <FontAwesomeIcon icon={['fas', 'calendar']} size={'xs'} className={"mx-1"}/> {moment(props.pubDate).format("MMM DD, YYYY hh:mm")}
                        </small>
                    </div>
                    <div className="d-flex text-muted">
                        <small>
                        <FontAwesomeIcon icon={['fas', 'calendar']} size={'xs'} className={"mx-1"}/> {props.author}
                        </small>
                    </div>
                </Card.Text>

                <Button size="sm" variant="primary"><Link to={props.title} className="text-white text-decoration-none">LEER MÁS</Link></Button>
                
            </Card.Body>
        </Card>
    </Col>

      

        
 
)

export default ShowNoticias;