import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/mainLayout.jsx';
import { Landing, Home, About, Content, Contact, NotFound} from './pages';
import { WasteTracker, WasteCategory, WasteInsight } from './pages';

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
      <Route path="/wastetracker" element={<WasteTracker />} />
      <Route path="/wastecategory" element={<WasteCategory />} />
      <Route path="/wasteinsight" element={<WasteInsight />} />
    </Routes>
  );
}

export default App;