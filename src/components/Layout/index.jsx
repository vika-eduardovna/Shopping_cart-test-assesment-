import React from 'react';
import MainHeader from '../MainHeader';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const Layout = ({orders, filter, searchText}) => {
  return (
    <>
      <MainHeader orders={orders} filter={filter} searchText={searchText}/>
      <div style={{minHeight: '100vh'}}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;