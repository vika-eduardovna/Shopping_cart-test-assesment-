import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../../img/image.jpg';
import './style.css'

const Products = ({addToCart, productsBySearch}) => {
  return (
    <section className='products pt-5 mt-5'>
      <Container>
        <Row className='row mb-5'>
          <Col sm={9} >
            <div className='text-start'>
              <h2>Introductietekst</h2>
              <p>Alibus volesti atiatusa dolor aut eostibus veriore, omniendis sitae pedi dolupta dolupti antiis et as
                et sita conet adit laut lique nobit. Mintem istios solori apis maiore maximus aecabor esenduc iistinc
                itiassi odi reperfe rsperro comnit. </p>
            </div>
          </Col>
        </Row>
        <Row className='g-0 g-sm-4'>
          {
            productsBySearch.map(item => {
              return (
                <Col sm={12} md={6} lg={3} className='mb-5 mb-sm-0'>
                  <div className='card'>
                    <div className='card__image'>
                      <img src={image}/>
                      <div className='card_price'>€{item.price}</div>
                    </div>
                    <div className='card__wrapper-content'>
                      <div className='card__content'>
                        <div className='px-4 mt-4 text-start'>
                          {item.title}
                        </div>
                        <div className='p-4 text-start'>
                          {item.description}
                        </div>
                        <button 
                        onClick={() => addToCart(item.title, item.price, item.description)}
                        className='card__footer'>
                          Product bestellen
                        </button>
                      </div>
                    </div>
                    {item.special && (
                      <div className='card_special text-uppercase'>
                        Speсial
                      </div>
                    )}

                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  );
};

export default Products;