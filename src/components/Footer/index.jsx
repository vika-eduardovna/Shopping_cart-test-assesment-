import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../img/logo.svg';
import fb from '../../img/icons/facebbok.svg'
import ig from '../../img/icons/ig.svg'
import twitter from '../../img/icons/twitter.svg'
import linkdin from '../../img/icons/linkin.svg'
import './style.css'

const Footer = () => {
  return (
   <div className="footer">
    <Container>
     <Row className='justify-content-between'>
       <Col md={12} xl={4} className="mb-4 mb-xl-0">
         <img className="footer__logo" src={logo} alt=''/>
       </Col>
       <Col md={12} xl={1} className="mb-4 mb-xl-0">
         <div className='footer__title'>Contacts</div>
         <ul>
           <li><a href=''>Contactgegevens</a></li>
           <li><a href=''>Telefoon</a></li>
           <li><a href=''>E-mail</a></li>
         </ul>
       </Col>
       <Col md={12} xl={1} className="mb-4 mb-xl-0">
         <div className='footer__title'>
           Snel naar
         </div>
         <ul>
           <li><a href=''>Hyperlink 1</a></li>
           <li><a href=''> Hyperlink 2</a></li>
           <li><a href=''>Hyperlink 3</a></li>
         </ul>
       </Col>
       <Col md={12} xl={2} className="mb-4 mb-xl-0">
         <div className='footer__title'>Volg ons op</div>
         <ul className='social-list'>
           <li className='social-item'><a href=''><img src={fb} alt=''/></a></li>
           <li className='social-item'><a href=''><img src={ig} alt=''/></a></li>
           <li className='social-item'><a href=''><img src={linkdin} alt=''/></a></li>
           <li className='social-item'><a href=''><img src={twitter} alt=''/></a></li>
         </ul>
       </Col>
       <Col lg={12} xl={1}>
         <ul>
           <li><a href=''>Cookies</a></li>
           <li><a href=''>Privacy</a></li>
         </ul>
       </Col>
     </Row>
   </Container>
   </div>
  );
};

export default Footer;