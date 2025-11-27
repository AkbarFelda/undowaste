import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { UndowasteLogo } from "../assets";
import { useHeaderLogic } from "../hooks/useHeaderLogic";

function Header({ isLanding = false }) {
  const { isOpen, location, navLinks, handleToggle, handleClose, handleJoinClick } = useHeaderLogic();
  const currentPath = location.pathname;

  return (
    <header className="bg-white px-4 lg:px-[66px] shadow-md sticky top-0 z-20 ">
      <div className="container mx-auto flex justify-between items-center py-3">
 
        <Link to="/" className="flex items-center gap-2">
          <img src={UndowasteLogo} alt="Logo" className="h-auto w-auto" />
        </Link>

        {!isLanding ? (
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium transition ${
                  currentPath === link.to
                    ? "text-black"
                    : "text-gray-700 hover:font-bold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : (
          <div className="hidden md:flex">
            <Link
              onClick={handleJoinClick}
              className="bg-black text-white px-6 py-2 rounded-xl font-semibold shadow hover:opacity-80 transition"
            >
              Gabung Komunitas
            </Link>
          </div>
        )}

        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={handleToggle}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>
    <div
        className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        {!isLanding ? (
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleClose}
                className={`px-4 py-3 text-sm transition ${
                  currentPath === link.to
                    ? "text-black hover:bg-gray-100"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : (
          <div className="py-3 px-4">
            <Link
              to="/community"
              onClick={handleClose}
              className="block w-full text-center bg-black text-white py-3 rounded-xl font-semibold shadow hover:opacity-80 transition"
            >
              Gabung Komunitas
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
