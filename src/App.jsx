// src/App.jsx (PASTIKAN KODE INI BENAR)
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout.jsx';
import { Landing, Home, About, Content, Contact, NotFound} from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} /> 
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/content" element={<Content />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;