import React from "react";
import { useNavigate } from "react-router-dom";
import {
  TrashHero,
  TrashIcon,
  RecycleIcon,
  EarthIcon,
  Profil1,
  Profil2,
  Profil3,
  Profil4,
  Profil5,
  Profil6,
} from "../assets";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { TestimonialSlider, JoinCommunitySection } from "../components";

function Landing() {
  const profileImages = [Profil1, Profil2, Profil3, Profil4, Profil5, Profil6];
  const handleJoinClick = () => {
    alert("Mengarah ke halaman pendaftaran komunitas!");
  };
  const navigate = useNavigate();
  const handleEnterWebsite = () => {
    navigate("/home");
  };

  return (
    <>
      <Header isLanding={true} />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="min-h-full py-12 lg:py-10 lg:ml-15 lg:mr-16 relative">
          <div className="flex flex-col md:flex-row gap-10 items-start w-full relative z-10">
            <div className="text-center md:text-left order-2 md:order-1 w-full md:w-3/5 self-start">
              <h1 className="text-4xl sm:text-4xl sm:ml-4 lg:text-7xl font-extrabold font-primary text-black mb-6 leading-tight">
                Gabung&nbsp;Gerakan,
                <br />
                Bersih Bersama
              </h1>

              <p className="text-black font-medium text-lg sm:text-xl mb-10 font-secondary max-w-xs mx-auto md:max-w-none md:mx-0 text-center md:text-left ml-0 sm:ml-4 md:ml-4">
                Bergabunglah dengan ribuan orang lainnya dalam misi untuk
                mengurangi limbah dan menciptakan lingkungan yang lebih bersih
                dan sehat. Setiap tindakan kecil berdampak besar bagi bumi.
              </p>
              <button className="bg-black text-white font-bold rounded-full shadow-lg transition duration-300 hover:opacity-80 py-3 px-8 ml-0 sm:ml-4 md:ml-4" onClick={handleEnterWebsite}>
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
                  <h3 className="text-xl font-bold text-black mb-2">
                    Jenis Sampah
                  </h3>
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
                  <h3 className="text-xl font-bold text-black mb-2">
                    Proses Daur Ulang
                  </h3>
                  <p className="text-black text-sm max-w-xs mx-auto">
                    Pelajari cara sampah diproses dan diolah kembali menjadi
                    bahan baku.
                  </p>
                </div>

                <div>
                  <img
                    src={EarthIcon}
                    alt="Dampak Lingkungan"
                    className="mx-auto mb-4 w-16 md:w-20"
                  />
                  <h3 className="text-xl font-bold text-black mb-2">
                    Dampak Lingkungan
                  </h3>
                  <p className="text-black text-sm max-w-xs mx-auto">
                    Pahami konsekuensi serius dari pencemaran sampah terhadap
                    ekosistem.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 px-4">
            <JoinCommunitySection
              profileImages={profileImages}
              memberCount="100+"
              onButtonClick={handleJoinClick}
            />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <TestimonialSlider />
      </div>
      <Footer />
    </>
  );
}

export default Landing;
