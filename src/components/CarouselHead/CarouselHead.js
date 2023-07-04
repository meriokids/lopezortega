import React from 'react';
import { Carousel, CarouselItem, Container} from 'react-bootstrap';
import './CarouselHead.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BgPrimary from '../../img/bg-primary.jpg';



const CarouselHead = () => (
  <div>
    <Carousel>
      <CarouselItem>
      <img
          className="d-block vh-100"
          src={BgPrimary}
          alt="First slide"
        />
        <Container>
          <div className='position-absolute top-50'>
            <div className='CarouselTitle'>
              <h1 className='fw-bold'>Bienvenido a Lopez & Ortega.</h1>
                  Estamos trabajando para que tengas una mejor experiencia al visitar nuestro sitio
            </div>
            <div className='CarouselSubtitle my-3 '>
              <a href='https://wa.me/+525520656468' target='_blank' rel="noreferrer">Escríbenos en Whatsapp <FontAwesomeIcon icon={['fa', 'chevron-right']} className='mx-2' /></a>
            </div>
          </div>
        </Container>
        <div className='CarouselDownbar w-100'></div>
      </CarouselItem>
    </Carousel>
  </div>
);


export default CarouselHead;
