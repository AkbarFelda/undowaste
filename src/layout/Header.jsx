import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { UndowasteLogo } from "../assets";
import { useHeaderLogic } from "../hooks/useHeaderLogic";

function Header() {
  const { isOpen, location, navLinks, handleToggle, handleClose } = useHeaderLogic();
  const currentPath = location.pathname;

  return (
    // 1. Terapkan padding horizontal default (mobile first)
    // 2. Ganti lg:pl-12 lg:pr-12 dengan lg:px-[66px] jika ingin presisi 66px di desktop
    //    Saat ini saya ganti ke px-4 (16px) untuk mobile agar tidak terlalu rapat.
    <header className="bg-white px-4 lg:px-[66px] shadow-md sticky top-0 z-20 ">
      {/* 3. Hapus lg:p-4 di sini, dan ganti dengan py-3/py-4 untuk padding vertikal konsisten.
        Padding horizontal sudah ditangani oleh elemen <header> di atas.
      */}
      <div className="container mx-auto flex justify-between items-center py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={UndowasteLogo} alt="Logo" className="h-auto w-auto" />
        </Link>
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
        <nav className="flex flex-col py-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={handleClose}
              // Tambahkan px-4 di sini agar menu mobile juga memiliki padding horizontal
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
      </div>
    </header>
  );
}

export default Header;