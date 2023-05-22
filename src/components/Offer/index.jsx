import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import images from '../../img/image.jpg';
import './style.css'

const Offer = () => {
  return (
    <section className='offer pt-5 mt-5 mb-5 pb-5'>
      <Container>
        <Row className='align-items-center'>
          <Col sm={12} lg={6} >
            <div className='offer__image'>
              <img src={images} alt=''/>
            </div>
          </Col>
          <Col sm={12} lg={6} >
            <div className='offer__content text-start'>
              <h3>Uitgelicht</h3>
              <p>Alibus volesti atiatusa dolor aut eostibus veriore, omniendis sitae pedi dolupta dolupti antiis et as et sita conet adit laut lique nobit. Mintem istios solori apis maiore maximus aecabor esenduc iistinc itiassi odi reperfe rsperro comnit.  </p>
              <button className='offer__button'>Met een button</button>
            </div>
          </Col>
        </Row>
      </ Container>
    </section>
  );
};

export default Offer;