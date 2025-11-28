import React from "react";
import { Boxes } from "../../../assets";

export default function ReduceSection() {
  return (
    <div className="bg-[#FAFAFA] rounded-[65px] shadow-lg p-5 lg:p-14 flex flex-col md:flex-row gap-7 lg:gap-[124px] items-end justify-center">
      <div className="flex-1">
        <h2 className="text-3xl lg:text-5xl font-semibold font-primary text-black mb-5">Reduce</h2>
        <p className="font-primary font-medium text-sm lg:text-xl text-black leading-5 lg:leading-[38px] mb-6 text-justify w-5/6">
          Reduce berarti mengurangi jumlah barang yang dibeli agar dampak terhadap lingkungan bisa lebih minimal.
        </p>
        <img 
          src={Boxes}
          alt="Boxes"
          className="w-90"
        />
      </div>

      <div className="flex-1 bg-[#527133] rounded-[50px] py-8 lg:py-14 px-10 lg:px-18 lg:pr-48">
        <h3 className="font-primary font-medium text-white leading-8 lg:leading-10 text-2xl lg:text-[40px] mb-5 lg:mb-[30px]">
          Actionable 
          <br />
          Guides and Tips
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-white font-secondary font-medium leading-5 lg:leading-10 text-sm lg:text-2xl">
          <li>Kurangi pembelian dan pemakaian barang</li>
          <li>Pilih yang lebih minim kemasan</li>
          <li>Gunakan tas belanjaan</li>
          <li>Rencanakan pembelian dan catat volume</li>
        </ul>
      </div>
    </div>
  );
}
