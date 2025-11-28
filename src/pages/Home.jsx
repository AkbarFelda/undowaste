import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HomeHero,
  LeafIcon,
  BottleIcon,
  WasteIcon,
  Profil1,
  Profil2,
  Profil3,
  Profil4,
  Profil5,
  Profil6,
  BottleHalf,
} from "../assets";
import { WasteTypeCard, JoinCommunitySection } from "../components";

function Home() {
  const navigate = useNavigate();
  const profileImages = [Profil1, Profil2, Profil3, Profil4, Profil5, Profil6];
  const handleJoinClick = () => {
    window.open("https://chat.whatsapp.com/HxzzkSXHZNo8vjWHKYfGN6");
  };

  const handleLearnMoreClick = () => {
    navigate("/content"); 
  };
  return (
    <>
      <div className="relative z-10 py-12 lg:py-10 lg:ml-8 lg:mr-16 md:ml-8 md:mr-5">
        <div
          className="hero-bg bg-no-repeat relative flex items-center "
          style={{
            backgroundImage: `url(${HomeHero})`,
            backgroundPosition: "calc(50% + 250px) bottom",
            backgroundSize: "75%",
          }}
        >
          <div className="relative z-10  max-w-4xl text-center lg:px-8 lg:text-left md:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-leaguespartansemibold text-black mb-4  leading-tight">
              Undo Your
              <br />
              Waste
            </h1>

            <p className="text-black font-poppinsmedium text-lg sm:text-xl mb-10 max-w-sm mx-auto lg:mx-0">
              Bersama UndoWaste, kami memulihkan dan mengubah setiap limbah
              menjadi langkah kecil menuju masa depan yang lebih hijau.
            </p>

            <button
              onClick={handleLearnMoreClick}
              className="bg-black text-white font-poppinsregular rounded-full shadow-lg transition duration-300 hover:opacity-80 py-3 px-8"
            >
              Pelajari Lebih Jauh
            </button>
          </div>
        </div>
        <div className="text-center md:ml-5 items-center py-12">
          <h1 className="text-black text-3xl font-leaguespartanmedium">
            Tentang Gerakan Hijau
          </h1>
          <p className="text-black font-poppinsmedium text-lg max-w-4xl mx-auto mt-4 p-2">
            Kami adalah inisiatif yang lahir dari kepedulian terhadap krisis
            limbah nasional. Kami percaya, solusi terbaik adalah edukasi yang
            mudah diakses dan aksi nyata di tingkat individu.
          </p>

          <div className="relative w-full max-w-[1400px] mx-auto my-12 md:my-12 content-center ">
            <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                <div className="w-full lg:w-2/5 flex justify-center relative h-[350px] lg:h-[450px]">
                  <img
                    src={BottleHalf}
                    alt="Bottle illustration"
                    className="w-full max-w-xs lg:max-w-none object-contain  scale-[1.5] lg:scale-[1.8] z-10"
                  />
                </div>

                <div className="w-full lg:w-3/5 text-black text-left space-y-8 lg:space-y-12 py-4">
                  <section>
                    <h1 className="text-4xl font-leaguespartanmedium mb-4">Our Vision</h1>
                    <ul className="list-disc pl-6 font-poppinsmedium text-lg space-y-3">
                      <li>
                        Menyajikan konten edukasi yang mudah dicerna,
                        inspiratif, pemilihan sampah daur ulang, dan
                        memanfaatkan pelestarian lingkungan.
                      </li>
                      <li>
                        Menyediakan peta interaktif yang akurat dan
                        user-friendly untuk memandu menemukan fasilitas
                        pengelolaan limbah.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h1 className="text-4xl font-leaguespartanmedium mb-4">
                      Our Mission
                    </h1>
                    <ul className="list-disc pl-6 font-poppinsmedium text-lg space-y-3">
                      <li>
                        Menjadi katalisator utama dalam mewujudkan Indonesia
                        bebas sampah.
                      </li>
                      <li>
                        Membangun kesadaran dan kemampuan setiap individu untuk
                        mengelola limbah secara bertanggung jawab demi
                        keberlanjutan bumi.
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="text-black mt-16 px-4">
            <h1 className="font-leaguespartanmedium text-3xl mb-8">
              Kenali Jenis Limbahmu
            </h1>

            <div
              className="grid grid-cols-1 md:grid-cols-3 
            gap-8 md:gap-5
            max-w-[1400px] mx-auto"
            >
              <WasteTypeCard
                icon={LeafIcon}
                title="Limbah Organik"
                description="limbah yang berasal dari makhluk hidup yang mudah diuraikan secara alami dan mudah membusuk."
              />
              <WasteTypeCard
                icon={BottleIcon}
                title="Limbah Anorganik"
                description="limbah yang berasal dari sisa-sisa aktivitas manusia dan limbah ini sangat susah terurai secara alami dan pembusukan secara alami."
              />
              <WasteTypeCard
                icon={WasteIcon}
                title="Limbah B3"
                description="“B3” merupakan Bahan Berbahaya dan Beracun, limbah ini dapat mengancam lingkungan dan makhluk hidup."
              />
            </div>
          </div>
          <div className="py-5 px-4">
            <JoinCommunitySection
              profileImages={profileImages}
              memberCount="100+"
              onButtonClick={handleJoinClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
