import React from 'react';
import Products from '../../components/Products';
import Offer from '../../components/Offer';

const Home = ({ addToCart, productsBySearch }) => {
  return (
    <>
      <Products
        addToCart={addToCart}
        productsBySearch={productsBySearch} />
      <Offer />
    </>
  );
};

export default Home;