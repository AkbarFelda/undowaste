import React from "react";
import { useNavigate } from "react-router-dom";
import { TrashHero, TrashIcon, RecycleIcon, EarthIcon, Profil1, Profil2, Profil3, Profil4, Profil5, Profil6 } from "../assets";
import Header from "../layout/Header";

function Landing() {
  const navigate = useNavigate();
  const handleEnterWebsite = () => {
    navigate("/home");
  };

  return (
    <>
      <Header isLanding={true}/>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="min-h-full py-12 lg:py-10 lg:ml-15 lg:mr-16 relative">
          <div className="flex flex-col md:flex-row gap-10 items-start w-full relative z-10">
            <div className="text-center md:text-left order-2 md:order-1 w-full md:w-3/5 self-start">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-primary text-black mb-6 leading-tight">
                Gabung&nbsp;Gerakan,
                <br />
                Bersih Bersama
              </h1>

              <p className="text-black font-medium text-lg sm:text-xl mb-10 font-secondary max-w-xs mx-auto md:max-w-none md:mx-0 text-center md:text-left">
                Bergabunglah dengan ribuan orang lainnya dalam misi untuk
                mengurangi limbah dan menciptakan lingkungan yang lebih bersih
                dan sehat. Setiap tindakan kecil berdampak besar bagi bumi.
              </p>

              <button
                onClick={handleEnterWebsite}
                className="bg-black text-white font-bold rounded-3xl shadow-lg transition duration-300 hover:opacity-80 py-3 px-8 text-base sm:py-4 sm:px-10 sm:text-lg md:py-2 md:px-4 md:text-base lg:py-3 lg:px-8 lg:text-xl"
              >
                Pelajari Selengkapnya
              </button>
            </div>

            <div className="flex justify-center mt-10 order-1 md:order-2 w-full md:w-2/5 self-start translate-y-8 md:translate-y-0 lg:translate-y-8">
              <img
                src={TrashHero}
                alt="ImageHero"
                className="w-full max-w-sm md:w-[450px] md:mt-16 lg:w-[700px] md:-translate-x-8 lg:translate-x-[60px]"
              />
            </div>
          </div>
           {/* EDUCATION SECTION */}
          <div className="py-15">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 text-black">
                Edukasi Sampah
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                  <img
                    src={TrashIcon}
                    alt="Jenis Sampah"
                    className="mx-auto mb-4 w-16 md:w-35"
                  />
                  <h3 className="text-xl font-bold text-black mb-2">Jenis Sampah</h3>
                  <p className="text-black text-sm max-w-xs mx-auto">
                    Kenali perbedaan antara sampah organik, anorganik, dan B3
                    untuk pengelolaan yang tepat.
                  </p>
                </div>

                <div>
                  <img
                    src={RecycleIcon}
                    alt="Proses Daur Ulang"
                    className="mx-auto mb-4 w-16 md:w-20"
                  />
                  <h3 className="text-xl font-bold text-black mb-2">Proses Daur Ulang</h3>
                  <p className="text-black text-sm max-w-xs mx-auto">
                    Pelajari cara sampah diproses dan diolah kembali menjadi bahan baku.
                  </p>
                </div>

                <div>
                  <img
                    src={EarthIcon}
                    alt="Dampak Lingkungan"
                    className="mx-auto mb-4 w-16 md:w-20"
                  />
                  <h3 className="text-xl font-bold text-black mb-2">Dampak Lingkungan</h3>
                  <p className="text-black text-sm max-w-xs mx-auto">
                    Pahami konsekuensi serius dari pencemaran sampah terhadap ekosistem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* JOIN SECTION */}
          <div className="py-10 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-black">
              Siap Menjadi Bagian Dari Perubahan?
            </h1>

            <p className="max-w-3xl text-base sm:text-lg lg:text-xl mb-10 text-gray-700 mx-auto">
              Bergabunglah dengan komunitas peduli lingkungan. Dapatkan informasi
              kegiatan, panduan praktis, dan kesempatan untuk beraksi nyata bersama kami.
            </p>

            <div className="flex items-center justify-center mb-10">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-pink-300 border-2 border-white">
                  <img src={Profil1} alt="profil1" />
                </div>
                <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white">
                  <img src={Profil2} alt="profil2" />
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-white">
                  <img src={Profil3} alt="profil3" />
                </div>
              </div>
              <div className="flex flex-col ml-6">
                <p className="text-6xl font-extrabold text-gray-900 leading-none">
                  100+
                </p>
                <p className="text-sm text-gray-600">Orang Sudah Bergabung</p>
              </div>

              <div className="flex -space-x-4 ml-6">
                <div className="w-10 h-10 rounded-full bg-indigo-500 border-2 border-white">
                  <img src={Profil4} alt="profil4" />
                </div>
                <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-white">
                  <img src={Profil5} alt="profil5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-200 border-2 border-white">
                  <img src={Profil6} alt="profil6" />
                </div>
              </div>
            </div>

            <button className="bg-black text-white px-12 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg">
              Segera Gabung Komunitas
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
