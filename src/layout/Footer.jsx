import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { UndowasteLogo } from '../assets';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white lg:px-[66px] lg:py-[31px] p-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm mt-2 mb-2">
        <div>          
          <h3 className="font-semibold text-4xl mb-4 inline-flex items-baseline">
            Undowas
            <img 
              src={UndowasteLogo} 
              alt="Logo" 
              className="h-7 mx-0.5 svg-filter" 
            />
            e
          </h3>
          <p className="text-gray-400">
            Platform edukasi dan kontribusi lingkungan digital. 
            Dibuat untuk Lomba Web Design Technoversary {currentYear}.
          </p>
        </div>

        <div className='lg:ml-24'>
          <ul className="space-y-5">
            <li><Link to="/home" className="text-white hover:text-gray-400"> | Home</Link></li>
            <li><Link to="/about" className="text-white hover:text-gray-400"> | About</Link></li>
            <li><Link to="/content" className="text-white hover:text-gray-400"> | Content</Link></li>
            <li><Link to="/contact" className="text-white hover:text-gray-400"> | Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm mb-2 text-white">Contact</h3>
          <div className="space-y-2">
            
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 w-4 h-4" />
              <p className="text-gray-400">undowaste@gmail.com</p>
            </div>
            
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="text-white w-4 h-4" />
              <p className="text-white">Indonesia</p>
            </div>
            
          </div>
        </div>

      </div>
      
      <div className="ml-1.8 mt-8 pt-4 text-left">
         <p className="text-xs text-white">© 2025 UndoWaste</p>
      </div>
    </footer>
  );
}

export default Footer;