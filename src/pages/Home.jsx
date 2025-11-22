import React from "react";
import { TrashHero } from "../assets";

function Home() {
  return (
    <div className="bg-white min-h-full py-12 lg:py-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold font-primary text-black mb-6 leading-tight">
            Gabung Gerakan,
            <br />
            Bersih Bersama
          </h1>
          <p className="text-black font-medium text-xl mb-10 font-secondary max-w-xl lg:mx-0 text-left">
            Bergabunglah dengan ribuan orang lainnya dalam misi untuk mengurangi
            limbah dan menciptakan lingkungan yang lebih bersih dan sehat.
            Setiap tindakan kecil berdampak besar bagi bumi
          </p>
          <button className="bg-black text-white py-4 px-14 rounded-lg font-bold shadow-lg hover:bg-gray-800 transition duration-300">
            Bergabung Sekarang
          </button>
        </div>
        <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
          <img src={TrashHero} alt="Logo" className="h-auto w-auto" />
          <div className="w-full max-w-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
