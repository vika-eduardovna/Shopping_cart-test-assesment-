import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'

const Hero = () => {
  return (
    <div className='hero'>
      <Container>
        <Row>
          <Col>
            <div className={'hero__title'}>
              <h1>Er is ruimte</h1>
              <p>voor een quote</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;