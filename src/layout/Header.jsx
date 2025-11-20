import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { UndowasteLogo } from '../assets';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/home', label: 'Beranda' },
    { to: '/about', label: 'Tentang' },
    { to: '/content', label: 'Konten' },
    { to: '/contact', label: 'Kontak' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={UndowasteLogo} 
            alt="Logo"
            className="h-auto w-auto"
          />
          {/* <span className="text-green-600 font-bold text-lg">Undowaste</span> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-medium transition ${
                location.pathname === link.to 
                  ? "text-green-600" 
                  : "text-gray-700 hover:text-green-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(prev => !prev)}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div 
        className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col py-2">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 text-sm transition ${
                location.pathname === link.to
                  ? "bg-gray-100 text-green-600 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
