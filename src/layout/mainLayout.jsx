import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer'; 

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4">
        {/* Outlet adalah tempat halaman (Home, About, dll) akan dirender */}
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}
export default MainLayout;