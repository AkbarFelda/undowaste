import { useState } from "react";
import React from "react";
import ReduceSection from "./ReduceSection.jsx";
import ReuseSection from "./ReuseSection.jsx";
import RecycleSection from "./RecycleSection.jsx";

export default function ActionsSection() {
  const [activeTab, setActiveTab] = useState("reduce");

  return (
    <div className="w-full flex text-start flex-col items-center justify-center">
      <h1 className="font-leaguespartanmedium text-black text-3xl mb-2 lg:mb-6">Apa yang bisa kita lakukan?</h1>

      <div className="flex gap-4 -100 p-3 rounded-full w-fit mb-6 lg:mb-10">
        <button
          onClick={() => setActiveTab("reduce")}
          className={`px-4 lg:px-8 py-2 lg:py-4 rounded-full font-poppinsmedium text-xs lg:text-xl transition 
            ${activeTab === "reduce" ? "bg-black text-white" : "bg-[#F0F0F0] text-[#3C3C3C]"}`}
        >
          R1 : Reduce
        </button>

        <button
          onClick={() => setActiveTab("reuse")}
          className={`px-4 lg:px-8 py-2 lg:py-4 rounded-full font-poppinsmedium text-xs lg:text-xl transition 
            ${activeTab === "reuse" ?  "bg-black text-white" : "bg-[#F0F0F0] text-[#3C3C3C]"}`}
        >
          R2 : Reuse
        </button>

        <button
          onClick={() => setActiveTab("recycle")}
          className={`px-4 lg:px-8 py-2 lg:py-4 rounded-full font-poppinsmedium text-xs lg:text-xl transition 
            ${activeTab === "recycle" ? "bg-black text-white" : "bg-[#F0F0F0] text-[#3C3C3C]"}`}
        >
          R3 : Recycle
        </button>
      </div>

      {activeTab === "reduce" && <ReduceSection />}
      {activeTab === "reuse" && <ReuseSection />}
      {activeTab === "recycle" && <RecycleSection />}
    </div>
  );
}
