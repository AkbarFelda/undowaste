import React from 'react';
import { Bottle } from '../assets';
import { Edukasi } from '../assets';
import { Keberlanjutan } from '../assets';
import { Kolaborasi } from '../assets';
import { Magnifier } from '../assets';

function About() {
  return (
    <div className="relative z-10 py-12 lg:py-10 lg:ml-15 lg:mr-16 md:ml-8 gap-12 flex flex-col">
        <div className='text-center md:text-left w-full self-start flex flex-col md:flex-row items-center'>
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-primary text-black mb-6 leading-tight">
              About
              <br />
              Undowaste
              </h1>
            <p className="text-black font-medium text-sm md:text-lg sm:text-xl w-full md:w-4/5 mb-10 font-secondary max-w-xs mx-auto md:max-w-none md:mx-0 text-center md:text-left">
              Undowaste adalah sebuah gerakan sosial dan platform komunitas yang berdedikasi untuk mengatasi masalah sampah di Indonesia. Kami percaya bahwa perubahan besar dimulai dari langkah kecil setiap individu. Melalui edukasi, kolaborasi, dan aksi nyata. Kami mengajak masyarakat untuk lebih bijak dalam mengelola sampah, mengurangi limbah, dan menciptakan lingkungan yang lebih bersih dan lestari untuk generasi mendatang.
            </p>
          </div>
          <img 
            src={Bottle} 
            alt="Bottle" 
            className=" w-1/2 md:w-1/4 lg:w-full max-w-sm md:max-w-md p-6 md:p-0 lg:ml-20 md:mr-0 mb-6 md:mb-0"
          />
        </div>

        <div className="flex flex-col items-center relative md:flex-row bg-[#F6F8F9] rounded-[50px] justify-between w-full">
                  <img
                    src={Magnifier}
                    alt="ImageHero"
                    className="w-1/2 md:w-1/5 lg:w-full max-w-sm md:max-w-md p-6 md:p-0 lg:ml-20 md:mr-0 mb-6 md:mb-0"
                  />

                <div className="flex-1 md:w-24 md:ml-20 md:mr-20 p-6">
                  <div className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-primary text-black">
                      Our Vision
                    </h2>
                    <p className="text-sm md:text-lg font-secondary text-black leading-relaxed mb-4">
                      Menyajikan konten edukasi yang mudah dicerna, inspiratif, 
                      penelitian, sampah dan daur ulang, dan mempromosikan 
                      pesentasi lingkungan.
                    </p>
                    <p className="text-sm md:text-lg font-secondary text-black leading-relaxed">
                      Menyediakan putri interaktif yang dibanfi dari user friendly 
                      untuk memotivasi dan mendidik para pengguna tentang isu- 
                      isu terkait.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 font-secondary">
                      Our Mission
                    </h2>
                    <p className="text-sm md:text-lg font-secondary text-black leading-relaxed">
                      Menjadi kataluisatur utama dalam mewujudkan Indonesia 
                      bebas sampah di masa sekaup maupun nanti, dengan 
                      kesadaran dan kemampuan untuk mengelola sampah 
                      secara bertanggung jawab demi keberlanjutan bumi.
                    </p>
                  </div>
                </div>
        </div>

        <h2 className="text-3xl font-medium font-primary text-black mb-2 mt-5 justify-center flex md:mt-30 md:mb-15">Hal yang Kami Utamakan</h2>
        <div className="flex flex-col gap-12 md:gap-25 items-center w-full relative justify-center">
          <div className="flex flex-col gap-0 md:gap-30 items-center w-full relative justify-center md:flex-row md:justify-between">
            <img
              src={Kolaborasi}
              alt="ImageHero"
              className="w-full max-w-24 p-6 md:p-0 md:ml-0 md:mr-0 mb-0"
            />
            <div className='flex flex-col w-full gap-2 md:gap-8 mt-0'>
              <h3 className='font-secondary text-black text-2xl md:text-4xl font-semibold'>Kolaborasi</h3>
              <p className='font-secondary text-black text-sm md:text-xl font-medium'>
                Kami percaya sinergi antara individu, komunitas, pemerintah, dan sektor swasta adalah kunci untuk menciptakan dampak yang luas dan berkelanjutan
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-0 md:gap-30 items-center w-full relative justify-center md:flex-row md:justify-between">
            <img
              src={Edukasi}
              alt="ImageHero"
              className="w-full max-w-24 p-6 md:p-0 md:ml-0 md:mr-0 mb-0"
            />
            <div className='flex flex-col w-full gap-2 md:gap-8 mt-0'>
              <h3 className='font-secondary text-black text-2xl md:text-4xl font-semibold'>Edukasi</h3>
              <p className='font-secondary text-black text-sm md:text-xl font-medium'>
                Kami berkomitmen menyediakan edukasi lingkungan yang mudah diakses agar setiap pengguna mengetahui cara pilah sampah yang benar dan dampak positifnya.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-0 md:gap-30 items-center w-full relative justify-center md:flex-row md:justify-between">
            <img
              src={Keberlanjutan}
              alt="ImageHero"
              className="w-full max-w-24 p-6 md:p-0 md:ml-0 md:mr-0 mb-0"
            />
            <div className='flex flex-col w-full gap-2 md:gap-8 mt-0'>
              <h3 className='font-secondary text-black text-2xl md:text-4xl font-semibold'>Keberlanjutan</h3>
              <p className='font-secondary text-black text-sm md:text-xl font-medium'>
                Kami bertujuan memastikan keberlanjutan lingkungan melalui solusi digital yang dapat mengurangi volume limbah dan mendorong praktik zero-waste lifestyle jangka panjang.
              </p>
            </div>
          </div>
        </div>
        
    </div>
    
  );
}
export default About;