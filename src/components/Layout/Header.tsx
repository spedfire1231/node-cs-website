import React, { useState } from 'react';
import Navigation from '../Navigation';
import './Header.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;