import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartItem from '../../components/CartItem/index'
import './style.css'

const CartPage = ({ orders }) => {

  const sum_result = orders.reduce((prev, { price, count }) => prev + price * count, 0);

  return (
    <>
      <Container className='cart-page'>
        <Row className="cart-page__title text-start">
          <Col>
            <h2>Aantal keer toegevoegd in winkelwagen</h2>
            <p>Alibus volesti atiatusa dolor aut eostibus veriore, omniendis sitae pedi dolupta dolupti antiis et as et
              sita conet adit laut lique nobit. Mintem istios solori apis maiore maximus aecabor esenduc iistinc itiassi
              odi reperfe rsperro comnit. </p>
          </Col>
        </Row>
        <Row className='cart-page__product-list mt-5 g-0 g-sm-4'>
          {
            orders.length === 0
              ? <p>Geen bestellingen</p>
              : orders.map(order => (
                <Col sm={12} md={6} lg={3} className='mb-5 mb-sm-0' key={order.id}>
                  <CartItem {...order} isCart/>
                </Col>
              ))
          }
        </Row>
        <h6 className='total'>In total: {sum_result}€</h6>
      </Container>
    </>
  );
};

export default CartPage;
