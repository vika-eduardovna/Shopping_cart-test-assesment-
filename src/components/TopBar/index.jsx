import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cart from '../../img/cart.svg'
import './style.css'

const TopBar = ({ orders, filter, searchText }) => {
  const count = orders.reduce((prev, { count }) => prev + count, 0);
  return (
    <Container fluid>
      <Row className='top-header'>
      <Col xs={12} xl={4} className='col-push-4 order-3 order-xl-1'>
          <div className='header-search'><input type='text' placeholder={'Zoek een product'} /></div>
        </Col>
        <Col xs={12} xl={2} className='mx-5 order-2  order-xl-2 mb-4 mb-xl-0'>
          <div className='direct-contact'><span>Direct contact?</span></div>
        </Col>
        <Col xs={2} lg={1} className='p-0 order-1 order-xl-3'>
          <div className='cart'>
            <NavLink to='/cart'>
              <span><img src={cart} alt="" /></span>
            </NavLink>
            {count}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TopBar;