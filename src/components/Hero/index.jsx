import React from 'react';
import heroCover from '../../img/hero.jpg'
import './style.css'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={heroCover} alt=''/>
      <div className={'hero__title'}>
        <h1>Er is ruimte</h1>
        <p>voor een quote</p>
      </div>
    </div>
  );
};

export default Hero;