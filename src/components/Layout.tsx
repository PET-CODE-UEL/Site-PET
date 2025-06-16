import React from 'react';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="page-container">
      <div className="content-container">
        {children}
      </div>
    </main>
  );
};

export default Layout;
