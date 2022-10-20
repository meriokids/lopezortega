import React from "react";
import { Col, Card, Button} from "react-bootstrap";
import moment from "moment";
import ToText from "../../utils/toText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, withRouter } from "react-router-dom";





const ShowBlog = (props, p) => (


                
    <Col lg='4'>
        <Card className="my-2">
            <Card.Img variant="top" src={props.thumbnail} />
            
            <Card.Body>
                <Card.Title className="h3">{props.title}</Card.Title>
                <Card.Body>
                <small>
                        {`${ToText(
                            props.description.substring(0, 200)
                        )}...`}
                    </small>
                    <div className="d-flex text-muted mt-2">
                        <small>
                        <FontAwesomeIcon icon={['fas', 'calendar']} size={'xs'} className={"mx-1"}/> {moment(props.pubDate).format("MMM DD, YYYY hh:mm")}
                        </small>
                    </div>
                    <div className="d-flex text-muted">
                        <small>
                        <FontAwesomeIcon icon={['fas', 'user']} size={'xs'} className={"mx-1"}/>{props.author}
                        </small>
                    </div>
                </Card.Body>

                <Button><Link to={props.title} className="text-white text-decoration-none">LEER MÁS</Link></Button>
                
            </Card.Body>
        </Card>
    </Col>

      

        
 
)

export default withRouter(ShowBlog);
