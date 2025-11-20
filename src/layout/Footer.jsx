// src/layout/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Footer menggunakan warna gelap dan padding yang nyaman
    <footer className="bg-gray-900 text-white p-8 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        
        {/* Kolom 1: Tentang Proyek */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-green-400">Undowaste</h3>
          <p className="text-gray-400">
            Platform edukasi dan kontribusi lingkungan digital. 
            Dibuat untuk Lomba Web Design Technoversary {currentYear}.
          </p>
        </div>

        {/* Kolom 2: Navigasi Cepat */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-green-400">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/features" className="text-gray-400 hover:text-white">Tentang Kami</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white">Kontak</Link></li>
            {/* <li><Link to="/pricing" className="text-gray-400 hover:text-white">Donasi</Link></li> */}
          </ul>
        </div>

        {/* Kolom 3: Kontak & Sosial */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-green-400">Kontak</h3>
          <p className="text-gray-400">Email: sk3d@example.com</p>
        </div>

      </div>
      
      <div className="mt-8 pt-4 border-t border-gray-700 text-center">
         <p className="text-xs text-gray-500">© {currentYear} Tim SK3D</p>
      </div>
    </footer>
  );
}

export default Footer;