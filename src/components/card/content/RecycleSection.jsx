import React from "react";
import { Boxes } from "../../../assets";

export default function RecycleSection() {
  return (
    <div className="bg-[#FAFAFA] rounded-[65px] shadow-lg p-14 flex flex-col md:flex-row gap-[124px] items-center">
      
      <div className="flex-1">
        <h2 className="text-5xl font-leaguespartansemibold text-black mb-5">Recycle</h2>
        <p className="font-leaguespartanmedium text-xl text-black leading-[38px] mb-6 text-justify w-5/6">
          Recycle berarti mengolah kembali barang atau bahan bekas menjadi produk baru agar dapat digunakan kembali.
        </p>
        <img 
          src={Boxes}
          alt="Boxes"
          className="w-90"
        />
      </div>

      <div className="flex-1 bg-[#527133] rounded-[50px] py-14 px-18 pr-48">
        <h3 className="font-leaguespartanmedium text-white leading-10 text-[40px] mb-[30px]">
          Actionable 
          <br />
          Guides and Tips
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-white font-poppinsmedium leading-10 text-2xl">
          <li>Cuci & Keringkan Wadah Bekas</li>
          <li>Pilah Sesuai Jenis Material</li>
          <li>Ikuti Kode Segitiga Plastik</li>
          <li>Setor ke Bank Sampah / Mitra Daur Ulang</li>
        </ul>
      </div>
    </div>
  );
}
