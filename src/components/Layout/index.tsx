import React from 'react';
import Header from "../Header";

import { Outlet } from "react-router-dom";
import Footer from '../Footer/Footer';

interface LayoutProps {
  children?: React.ReactNode; // Define children as an optional prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col  font-segoe-ui font-Segoe-UI ">
      <Header />
      <main className="flex-grow">
        <Outlet />
        {children} {/* Render children here */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;