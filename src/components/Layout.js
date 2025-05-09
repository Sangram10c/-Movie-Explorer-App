// Layout.js
import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = ({ onSearch }) => {
  return (
    <>
      <Header onSearch={onSearch} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
