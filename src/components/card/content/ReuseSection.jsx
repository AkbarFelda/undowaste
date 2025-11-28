import React from "react";
import { Boxes } from "../../../assets";

export default function ReuseSection() {
  return (
    <div className="bg-[#FAFAFA] rounded-3xl md:rounded-[65px] shadow-lg p-5 lg:p-14 flex flex-col md:flex-row gap-7 lg:gap-[124px] items-start justify-center">
      <div className="flex-1">
        <h2 className="text-3xl lg:text-5xl font-leaguespartansemibold text-black mb-5">Reuse</h2>
        <p className="font-leaguespartanmedium text-sm lg:text-xl text-black leading-5 lg:leading-[38px] mb-6 text-justify w-5/6">
          Reuse berarti menggunakan kembali barang atau bahan agar tidak langsung menjadi limbah dan dapat memperpanjang umur pakainya.
        </p>
        <img 
          src={Boxes}
          alt="Boxes"
          className="w-90"
        />
      </div>

      <div className="flex-1 bg-[#527133] rounded-3xl md:rounded-[50px] py-8 lg:py-14 px-10 lg:px-18 lg:pr-48">
        <h3 className="font-leaguespartanmedium text-white leading-8 lg:leading-10 text-2xl lg:text-[40px] mb-5 lg:mb-[30px]">
          Actionable 
          <br />
          Guides and Tips
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-white font-poppinsmedium leading-5 lg:leading-10 text-sm lg:text-2xl">
          <li>Menggunakan wadah berulang kali</li>
          <li>Alih fungsi barang bekas</li>
          <li>Melakukan donasi</li>
          <li>Menjual/membeli barang bekas (Thrifting)</li>
        </ul>
      </div>
    </div>
  );
}
