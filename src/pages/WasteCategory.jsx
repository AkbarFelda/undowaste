import React from "react";
import { useNavigate } from "react-router-dom";
import { TrashWaste, Daun, Detergent, Hape, Kursi, Tong, BottleHalf } from "../assets";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );

const WasteCategory = () => {
    const navigate = useNavigate();

    const lineData = {
      labels: ['Org', 'Recy', 'Electr', 'Liquid', 'Bulk', 'Hazard'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55],
          fill: false,
          borderColor: '#93B890',
          tension: 0.1,
        },
      ],
    };
    
  return (
    <div className="flex flex-col min-h-screen bg-white">
        <div className="relative z-10 py-12 px-4 md:px-8 lg:px-16 gap-12 flex flex-col">
            <button onClick={() => navigate(-1)} className="text-2xl text-black items-start flex">
              ←
            </button>

            <div className="md:px-16 flex flex-row items-center justify-between gap-6 md:gap-12">
                <img
                    src={TrashWaste}
                    alt="Trash Waste Illustration"
                    className="w-35 md:w-72 lg:w-2/5"
                />
                <div className="w-full md:w-1/3">
                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-leaguespartansemibold text-black mb-4 leading-tight">
                        Waste <br /> Tracker
                    </h1>
                    <p className="mt-4 text-black font-poppinsmedium">
                        Jangan hanya membuang, saat nya melacak! Saksikan langsung peta aliran limbah mu, sekaligus liat data category limbah terbanyak!
                    </p>
                </div>
            </div>

            <div className="space-y-6">
                {sections.map((item, idx) => (
                    <div
                    key={idx}
                    className="bg-white rounded-3xl shadow px-6 md:px-10 pt-8 flex flex-col md:flex-row md:items-start gap-6"
                    >
                    <div className="flex-1 lg:mt-3">
                        <h2 className="text-2xl md:text-3xl font-leaguespartanmedium text-black mb-4">
                        {item.title}
                        </h2>
                        <p className="text-sm md:text-base font-poppinsmedium text-black md:w-3/4">
                        {item.desc}
                        </p>
                    </div>

                    <img
                        src={item.image}
                        alt={item.title}
                        className={`
                        w-40 sm:w-48 md:w-56 lg:w-72 
                        object-contain mx-auto md:mx-0
                        ${item.image === BottleHalf ? "md:mt-10" : "md:mt-5"}
                        `}
                    />
                    </div>
                ))}
            </div>


            <div className="bg-white shadow-md rounded-[45px] p-10">
                <h2 className="text-center font-leaguespartanmedium text-4xl text-black mb-6">Waste Generation</h2>
              <Line data={lineData} />
            </div>
        </div>
    </div>
  );
}

export default WasteCategory;

const sections = [
    {
        title: "Organic Waste",
        desc: "Sampah yang berasal dari makhluk hidup (tanaman), yang dapat mudah terurai secara alami.",
        image: Daun,
    },
    {
        title: "Recyclable Waste",
        desc: "Limbah dan barang bekas seperti plastik, kertas, kaca, dan logam yang diolah kembali menjadi produk baru yang bermanfaat.",
        image: BottleHalf,
    },
    {
        title: "Electronic Waste (E-Waste)",
        desc: "Peralatan listrik dan elektronik yang telah dibuang karena rusak, usang, atau tidak lagi digunakan, seperti komputer, handphone, televisi, kulkas, dan lainnya.",
        image: Hape,
    },
    {
        title: "Liquid Waste",
        desc: "Segala sesuatu yang berwujud cair yang berasal dari aktivitas rumah tangga, industri dan lainnya. Limbah ini bisa berupa air sabun, sisa bahan kimia, minyak, dan lainnya.",
        image: Detergent,
    },
    {
        title: "Bulky Waste",
        desc: "Sabpah berukuran besar dengan berat yang tidak dapat diangkut oleh petugas keberihan biasa.",
        image: Kursi,
    },
    {
        title: "Hazardous Waste",
        desc: "Limbah yang mengandung bahan beracun, korosif, reaktif, dan mudah terbakar. Seperti pelarut, asam, basa, dan lainnya.",
        image: Tong,
    },
];