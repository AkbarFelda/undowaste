import React from "react";
import { TrashHero } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faRecycle } from "@fortawesome/free-solid-svg-icons";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
 

function Home() {
  return (
      <div className="min-h-full py-12 lg:py-20 relative">
        <div className="flex flex-col md:flex-row gap-10 items-start w-full relative z-10">
          <div className="text-center md:text-left order-2 md:order-1 w-full md:w-3/5 self-start">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-primary text-black mb-6 leading-tight">
              Gabung&nbsp;Gerakan,
              <br />
              Bersih&nbsp;Bersama
            </h1>

            <p className="text-black font-medium text-lg sm:text-xl mb-10 font-secondary max-w-xs mx-auto md:max-w-none md:mx-0 text-center md:text-left">
              Bergabunglah dengan ribuan orang lainnya dalam misi untuk
              mengurangi limbah dan menciptakan lingkungan yang lebih bersih dan
              sehat. Setiap tindakan kecil berdampak besar bagi bumi
            </p>

            <button className="bg-black text-white font-bold rounded-3xl shadow-lg transition duration-300 hover:opacity-80 py-3 px-8 text-base sm:py-4 sm:px-10 sm:text-lg md:py-2 md:px-4 md:text-base lg:py-4 lg:px-10 lg:text-xl">
              Bergabung Sekarang
            </button>
          </div>

          <div className="flex justify-center mt-10 order-1 md:order-2 w-full md:w-2/5 self-start translate-y-8 md:translate-y-0 lg:translate-y-8 ">
            <img
              src={TrashHero}
              alt="ImageHero"
              className="w-full max-w-sm md:w-[450px] md:mt-16 lg:w-[700px] md:-translate-x-8 lg:translate-x-15"
            />
          </div>
        </div>
        <div className="py-12 lg:py-20">
        {/* Konten ini diwariskan container dan mx-auto dari MainLayout/AppLayout */}
        <div className="container mx-auto px-4 md:px-8 lg:px-[66px] text-center">
          
          <h2 className="text-3xl lg:text-4xl font-extrabold font-primary text-black mb-12">
            Edukasi Sampah
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            
            {/* Kolom 1: Jenis Sampah */}
            <div className="p-4">
              <FontAwesomeIcon icon={faTrash} className="text-black text-4xl mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">Jenis Sampah</h3>
              <p className="text-gray-600 text-sm mx-auto max-w-xs">
                Kenali perbedaan antara sampah organik, anorganik, dan B3 untuk pengelolaan yang tepat
              </p>
            </div>

            {/* Kolom 2: Proses Daur Ulang */}
            <div className="p-4">
              <FontAwesomeIcon icon={faRecycle} className="text-black text-4xl mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">Proses Daur Ulang</h3>
              <p className="text-gray-600 text-sm mx-auto max-w-xs">
                Pelajari cara sampah diproses dan diolah kembali menjadi bahan baku yang berguna
              </p>
            </div>

            {/* Kolom 3: Dampak Lingkungan */}
            <div className="p-4">
              <FontAwesomeIcon icon={faEarthAsia} className="text-black text-4xl mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">Dampak Lingkungan</h3>
              <p className="text-gray-600 text-sm mx-auto max-w-xs">
                Pahami konsekuensi serius dari pencemaran sampah terhadap ekosistem dan kesehatan kita
              </p>
            </div>

          </div>
        </div>
      </div>
      </div>
      
  );
}

export default Home;
