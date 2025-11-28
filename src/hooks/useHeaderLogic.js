import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/home', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/content', label: 'Content' },
  { to: '/contact', label: 'Contact' },
];

export function useHeaderLogic() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleJoinClick = () => {
    window.open(
      "https://chat.whatsapp.com/HxzzkSXHZNo8vjWHKYfGN6",
    );
  }
  const handleToggle = () => setIsOpen(prev => !prev);
  const handleClose = () => setIsOpen(false);

  return { 
    isOpen, 
    location, 
    navLinks, 
    handleToggle, 
    handleClose, 
    handleJoinClick
  };
}