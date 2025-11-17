import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();
  const handleEnterWebsite = () => {
    navigate('/home'); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-extrabold mb-6">Landing Page Proyek</h1>
      <p className="text-xl mb-10">Fokus pada ajakan masuk (CTA).</p>
      
      <button 
        onClick={handleEnterWebsite}
        className="bg-green-500 hover:bg-green-600 py-3 px-8 rounded-full shadow-xl transition"
      >
        ENTER WEBSITE →
      </button>
    </div>
  );
}
export default Landing;