import React, {useContext} from 'react';
import { Context } from '../../context';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cart from '../../img/cart.svg'
import './style.css'

const TopBar = () => {

  const { orders, filter, searchText } = useContext(Context);

  const count = orders.reduce((prev, { count }) => prev + count, 0);
  return (
    <Container fluid>
      <Row className='top-header'>
      <Col xs={12} xl={3} className='col-push-4 order-3 order-xl-1'>
          <div className='header-search'>
          <input
              type='text'
              name='search'
              value={filter}
              placeholder={'Zoek een product'}
              onChange={searchText.bind(this)} />
            </div>
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