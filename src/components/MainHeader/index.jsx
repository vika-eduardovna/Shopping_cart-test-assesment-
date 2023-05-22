import React from 'react';
import Hero from '../Hero';
import NavBar from '../NavBar';
import TopBar from '../TopBar';
import './style.css'

const MainHeader = ({orders, filter, searchText}) => {
  return (
    <>
      <TopBar orders={orders} filter={filter} searchText={searchText}/>
      <NavBar />
      <Hero />
    </>
  );
};

export default MainHeader;