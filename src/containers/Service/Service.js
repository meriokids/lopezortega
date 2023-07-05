import React from "react";
import {Container, Row, Col} from "react-bootstrap";
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

            <Row><h3 className="my-3">Servicios de asesoría financiera</h3></Row>

            <Row>
            <Col lg={6} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas',  'magnifying-glass-dollar']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Análisis e interpretación</h5>
                            <h6 className="SubitleService">de estados financieros</h6>
                            
                        </div>
                    </div>
                </Col>

                <Col lg={6} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'file-circle-check']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Auditoría</h5>
                            <h6 className="SubitleService">de estados financieros (opinión)</h6>
                            
                        </div>
                    </div>
                </Col>

                <Col lg={6} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'file-waveform']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Elaboración de estados financieros</h5>
                            <h6 className="SubitleService">para usuarios internos y externos.</h6>
                            
                        </div>
                    </div>
                </Col>

                <Col lg={6} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas',  'rotate']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Actualización de estados financieros</h5>
                            <h6 className="SubitleService">conforme a boletín B-10 (reexpresión de estados financieros).</h6>
                            
                        </div>
                    </div>
                </Col>
  
            </Row>


            <hr className="my-5"></hr>



            <Row><h3 className="my-3">Servicios de asesoría laboral</h3></Row>

            <Row>
            <Col lg={6} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'star']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Cumplimiento de obligaciones</h5>
                            <h6 className="SubitleService">en materia de seguridad social</h6>
                            
                        </div>
                    </div>
                </Col>

                <Col lg={6} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'handshake-angle']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Planeación fiscal</h5>
                            <h6 className="SubitleService">en materia de seguridad social y laboral</h6>
                            
                        </div>
                    </div>
                </Col>

                <Col lg={6} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'calculator']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Cálculo y revisión</h5>
                            <h6 className="SubitleService">de la correcta determinación de prestaciones y de previsión social.</h6>
                            
                        </div>
                    </div>
                </Col>

                <Col lg={6} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'receipt']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Cálculo de impuestos</h5>
                            <h6 className="SubitleService">locales y federales derivados de la nómina</h6>
                            
                        </div>
                    </div>
                </Col>


                <Col lg={6} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'notes-medical']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Dictámenes de IMSS, INFONAVIT</h5>
                            <h6 className="SubitleService">e impuestos locales</h6>
                            
                        </div>
                    </div>
                </Col>



                <Col lg={6} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'helmet-safety']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Servicio Integral de Registro</h5>
                            <h6 className="SubitleService">de Obras de Construcción (SIROC) y su cumplimiento</h6>
                            
                        </div>
                    </div>
                </Col>



                <Col lg={6} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'book']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Trámites</h5>
                            <h6 className="SubitleService">de REPSE ante el STPS.</h6>
                            
                        </div>
                    </div>
                </Col>


                <Col lg={6} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'file-lines']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Informativas</h5>
                            <h6 className="SubitleService">ICSOE y SISUB (trimestralmente).</h6>
                            
                        </div>
                    </div>
                </Col>


  
            </Row>


            <hr className="my-5"></hr>



            <Row><h3 className="my-3">Servicios de consultoría fiscal</h3></Row>

            <Row>
            <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'circle-info']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Asesoría</h5>
                            <h6 className="SubitleService">y planeación fiscal</h6>
                            
                        </div>
                    </div>
                </Col>

                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'money-bill-transfer']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Tratamiento fiscal en aumentos de capital</h5>
                            <h6 className="SubitleService">reembolsos y disminuciones de capital</h6>
                            
                        </div>
                    </div>
                </Col>

                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'circle-check']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Servicios de cumplimiento</h5>
                            <h6 className="SubitleService">fiscal (compliance)</h6>
                            
                        </div>
                    </div>
                </Col>

                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas',  'eye']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Diagnóstico fiscal</h5>
                            <h6 className="SubitleService">revisión de documentación y procedimientos contables y fiscales</h6>
                            
                        </div>
                    </div>
                </Col>


                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas',  'bell']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Avisos de inicio de liquidación</h5>
                            <h6 className="SubitleService">y cancelación de R.F.C. Por liquidación de sociedades</h6>
                            
                        </div>
                    </div>
                </Col>



                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas',  'tags']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Estudio de precios</h5>
                            <h6 className="SubitleService">de transferencia (partes relacionadas)</h6>
                            
                        </div>
                    </div>
                </Col>



                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'circle-dollar-to-slot']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Solicitud de devoluciones</h5>
                            <h6 className="SubitleService">de saldos a favor de impuestos</h6>
                            
                        </div>
                    </div>
                </Col>


                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'hand-holding-dollar']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Compensaciones de impuestos</h5>
                            <h6 className="SubitleService">cantidades que tengan a su favor</h6>
                            
                        </div>
                    </div>
                </Col>


                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fab', 'searchengin']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Cálculo y revisión</h5>
                            <h6 className="SubitleService">de la correcta determinación de impuestos</h6>
                            
                        </div>
                    </div>
                </Col>



                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'folder-open']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Dictámenes</h5>
                            <h6 className="SubitleService">de enajenación de acciones y fiscales por contador público inscrito</h6>
                            
                        </div>
                    </div>
                </Col>


                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'file-invoice-dollar']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Impuestos en liquidaciones</h5>
                            <h6 className="SubitleService">fusiones y escisiones</h6>
                            
                        </div>
                    </div>
                </Col>


                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'file-circle-question']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Trámites</h5>
                            <h6 className="SubitleService">ante las autoridades fiscales </h6>
                            
                        </div>
                    </div>
                </Col>


                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'envelope-open-text']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Aclaración de carta invitación</h5>
                            <h6 className="SubitleService">o exhortos por incumplimiento a las disposiciones fiscales</h6>
                            
                        </div>
                    </div>
                </Col>


                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fab', 'adversal']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Promoción de medios alternativos</h5>
                            <h6 className="SubitleService">(controversias fiscales) llevados ante la PRODECON sobre actos cometidos por las autoridades fiscales.</h6>
                            
                        </div>
                    </div>
                </Col>


                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'person-circle-question']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Aclaración de irregularidades detectadas</h5>
                            <h6 className="SubitleService">por las que se dejó sin efectos el CSD</h6>
                            
                        </div>
                    </div>
                </Col>



                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'circle-question']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Aclaración de irregularidades</h5>
                            <h6 className="SubitleService">derivadas por actos de fiscalización</h6>
                            
                        </div>
                    </div>
                </Col>


                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'rectangle-xmark']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Avisos de cancelación</h5>
                            <h6 className="SubitleService">de R.F.C. Por fusión</h6>
                            
                        </div>
                    </div>
                </Col>


                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'credit-card']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Procedimientos para garantizar créditos fiscales</h5>
                            <h6 className="SubitleService">condonaciones y pagos en parcialidades (Art. 66 y 66-A C.F.F.)</h6>
                            
                        </div>
                    </div>
                </Col>


                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'file-circle-minus']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Aviso de disminución</h5>
                            <h6 className="SubitleService">de coeficiente de utilidad</h6>
                            
                        </div>
                    </div>
                </Col>


                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'passport']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Reconocimiento de impuestos</h5>
                            <h6 className="SubitleService">pagados en el extranjero y doble tributación</h6>
                            
                        </div>
                    </div>
                </Col>


                <Col lg={4} className="my-3">
                    <div className="ServiceContainer d-flex">
                        <FontAwesomeIcon icon={['fas', 'book-bookmark']} size={'3x'} color={'#8E8F92'}  />
                        <div className="ms-4">
                            <h5 className="TitleService">Eliminación de listado de publicaciones Art. 69 Y 69-B de C.F.F.</h5>
                            <h6 className="SubitleService"><small>(contribuyentes no localizados, incumplidos, con créditos fiscales firmes a cargo, con revisiones en proceso, con operaciones inexistentes, EFOS y EDOS)</small></h6>
                            
                        </div>
                    </div>
                </Col>















  
            </Row>


        </Container>

    </div>
);

export default Service;