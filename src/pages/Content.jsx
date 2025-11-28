import React from 'react';
import { BoxContent } from '../assets';
import { Arrow } from '../assets';
import { TrueReality } from '../assets';
import { BottleIcon, LeafIcon, WasteIcon } from '../assets';
import ExploreCard from '../components/card/content/ExploreCard';
import ActionSection from '../components/card/content/ActionSection';
import { WasteTypeCard } from "../components";

function Content() {

  return (
    <div className="relative z-10 py-12 lg:py-10 lg:ml-15 lg:mr-16 md:ml-8 gap-12 flex flex-col">
      <div className=' text-center md:text-left w-full flex flex-col md:flex-row relative items-center'>
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-primary text-black mb-6 leading-tight">
            Waste
            <br />
            Portal
          </h1>

          <p className="text-black font-medium text-lg sm:text-xl w-5/6 md:w-full mb-10 font-secondary max-w-xs mx-auto md:max-w-none md:mx-0 text-center md:text-left">
            Portal ini menghadirkan semua hal tentang pengelolaan limbah: weekly tracker, insight, dan data lapangan untuk memahami kondisi nyata dan mengambil langkah nyata menuju lingkungan yang lebih bersih.
          </p>
        </div>
        <img 
          src={BoxContent} 
          alt="BoxContent" 
          className="w-full max-w-sm md:max-w-55 lg:max-w-4xl p-6 md:p-0 md:ml-20 md:mr-0 mb-0"
        />
      </div>

      <div className='relative items-center w-full'>
        <div className='flex flex-row gap-5 items-center justify-center cursor-pointer w-fit'>
          <h2 className='font-primary text-black font-medium text-3xl'>
            Eksplor Lebih Jauh
          </h2>
          <img 
            src={Arrow} 
            alt="Arrow"
            className="h-5 mt-1"
          />
        </div>
          <ExploreCard />
      </div>

      <div className='relative items-center w-full'>
        <div className='flex flex-row gap-5 items-center justify-center md:justify-start cursor-pointer w-fit mb-10'>
          <h2 className='font-primary text-black font-medium text-3xl'>
            The True Reality
          </h2>
          <img 
            src={Arrow} 
            alt="Arrow"
            className="h-5 mt-1"
          />
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center w-full h-full py-25" style={{ backgroundImage: `url(${TrueReality})` }}>
          <div className="absolute inset-0 bg-opacity-30"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
            <h1 className=" text-center items-center justify-center relative flex text-white font-extrabold text-xl lg:text-3xl font-secondary md:text-3xl mb-6 leading-tight max-w-xl">
              Wajah Sungai Citarum Hari Ini Masihkah Jadi Tempat Sampah Raksasa?
            </h1>
          </div>
        </div>
      </div>

      <div className='relative items-center w-full'>
        <div className='flex flex-row gap-5 items-center justify-center md:justify-start cursor-pointer w-fit'>
          <h2 className='font-primary text-black font-medium text-3xl'>
            Waste Category
          </h2>
          <img 
            src={Arrow} 
            alt="Arrow"
            className="h-5 mt-1"
          />
        </div>
        <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5 max-w-[1400px] mx-auto"
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

      <ActionSection />
    </div>
  );
}
export default Content;