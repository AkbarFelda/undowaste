import React from "react";
import { Boxes } from "../../../assets";

export default function ReuseSection() {
  return (
    <div className="bg-[#FAFAFA] rounded-3xl shadow-lg p-14 flex flex-col md:flex-row gap-[124px] items-center">
      
      <div className="flex-1">
        <h2 className="text-5xl font-semibold font-primary text-black mb-5">Reuse</h2>
        <p className="font-primary font-medium text-xl text-black leading-[38px] mb-6 text-justify w-5/6">
          Reuse berarti menggunakan kembali barang atau bahan agar tidak langsung menjadi limbah dan dapat memperpanjang umur pakainya.
        </p>
        <img 
          src={Boxes}
          alt="Boxes"
          className="w-90"
        />
      </div>

      <div className="flex-1 bg-[#527133] rounded-[50px] py-14 px-18 pr-48">
        <h3 className="font-primary font-medium text-white leading-10 text-[40px] mb-[30px]">
          Actionable 
          <br />
          Guides and Tips
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-white font-secondary font-medium leading-10 text-2xl">
          <li>Menggunakan wadah berulang kali</li>
          <li>Alih fungsi barang bekas</li>
          <li>Melakukan donasi</li>
          <li>Menjual/membeli barang bekas (Thrifting)</li>
        </ul>
      </div>
    </div>
  );
}
