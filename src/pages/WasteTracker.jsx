import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";
import { Map } from "../assets";
import { Doughnut, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const WasteTracker = () => {
  const navigate = useNavigate();

  const doughnutData = {
    labels: ["Limbah Rumah Tangga", "Limbah Industri", "Limbah Pertanian", "Limbah Medis", "Limbah Pertambangan"],
    datasets: [
      {
        data: [30, 25, 15, 10, 20],
        backgroundColor: ["#4CAF50", "#6EC1E4", "#555", "#F5D54E", "#E57373"],
        borderWidth: 0,
      },
    ],
  };

  const barData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        data: [20, 15, 35, 25],
        backgroundColor: ["#D9D9D9", "#D9D9D9", "#93B890", "#D9D9D9"],
        borderRadius: 500,
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-white">
        <div className="relative z-10 py-12 px-4 md:px-8 lg:px-16 gap-12 flex flex-col">
            <button onClick={() => navigate(-1)} className="text-2xl text-black items-start flex">
              ←
            </button>

            <div className="md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="w-full md:w-1/3">
                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-leaguespartansemibold text-black mb-4 leading-tight">
                        Waste <br /> Tracker
                    </h1>
                    <p className="mt-4 text-black font-poppinsmedium">
                        Jangan hanya membuang, saat nya melacak! Saksikan langsung peta aliran limbah mu, sekaligus liat data category limbah terbanyak!
                    </p>
                </div>

                <img
                    src={Map}
                    alt="Map Illustration"
                    className="
                        absolute top-33 right-15
                        md:static md:top-auto md:right-auto 
                        w-35 md:w-72 lg:w-1/2
                    "
                    />
            </div>

            <div className="bg-white shadow-md rounded-3xl md:rounded-[45px]">
                <div className="w-full">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.49131650807!2d106.6647043584382!3d-6.229720928695747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta!5e0!3m2!1sen!2sid!4v1764249267531!5m2!1sen!2sid"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full rounded-3xl md:rounded-[45px] shadow-md"
                    ></iframe>
                </div>

                <div className="flex items-center justify-center gap-6 my-8">
                    {["bg-[#71B469]", "bg-[#63ABD2]", "bg-[#655C5C]", "bg-[#DBBB3A]", "bg-[#EA755E]"].map((color, i) => (
                    <span key={i} className={`w-5 h-5 rounded-full ${color}`}></span>
                    ))}
                </div>
            </div>

            <div className="bg-white shadow-md rounded-3xl md:rounded-[45px] p-10">
                    <h2 className="text-center font-leaguespartanmedium text-4xl text-black mb-6">Waste Category Distribution</h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                        <div className="w-60 md:w-72">
                        <Doughnut 
                            data={doughnutData} 
                            options={{
                                plugins: {
                                    legend: {display: false,},
                                    tooltip: {enabled: false,}
                                },
                            }}
                        />
                        </div>
                        
                        <ul className="space-y-2 text-black text-sm font-poppinsmedium">
                            <li><span className="inline-block w-4 h-4 bg-[#71B469] mr-2"></span> Limbah Rumah Tangga</li>
                            <li><span className="inline-block w-4 h-4 bg-[#63ABD2] mr-2"></span> Limbah Industri</li>
                            <li><span className="inline-block w-4 h-4 bg-[#655C5C] mr-2"></span> Limbah Pertanian</li>
                            <li><span className="inline-block w-4 h-4 bg-[#DBBB3A] mr-2"></span> Limbah Medis</li>
                            <li><span className="inline-block w-4 h-4 bg-[#EA755E] mr-2"></span> Limbah Pertambangan</li>
                        </ul>
                    </div>
            </div>

            <div className="bg-white shadow-md rounded-3xl md:rounded-[45px] p-10">
                <h2 className="text-center font-leaguespartanmedium text-4xl text-black mb-6">Weekly Waste</h2>

                <Bar data={barData} />
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WasteTracker;
