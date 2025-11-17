// src/layout/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const navLinks = [
    { to: '/home', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/content', label: 'Edukasi' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    // Header akan menempel di atas (sticky) dan memiliki warna latar
    <header className="bg-green-700 shadow-lg p-4 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo / Brand Name */}
        <Link to="/home" className="text-3xl font-bold text-white hover:text-green-200 transition duration-200">
          EcoDigital
        </Link>
        
        {/* Navigasi Utama (Hanya terlihat di layar besar) */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className="text-white hover:text-green-300 font-medium transition duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Anda bisa tambahkan Tombol Menu Burger di sini untuk mobile */}
        {/* <button className="md:hidden text-white text-2xl">☰</button> */}
      </div>
    </header>
  );
}

export default Header;