import React from 'react';
import MainHeader from '../MainHeader';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const Layout = () => {
  return (
    <>
      <MainHeader />
      <div style={{minHeight: '100vh'}}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;