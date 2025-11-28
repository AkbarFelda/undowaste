import React from "react";
import Footer from "../layout/Footer";
import { useNavigate } from "react-router-dom";
import { Earth, Glass, Lamp, Question } from "../assets";

const WasteInsight = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col min-h-screen bg-white">
        <div className="flex-1 container mx-auto">
          <div className="relative z-10 py-12 px-4 md:px-8 lg:px-16 gap-12 flex flex-col">
            <button onClick={() => navigate(-1)} className="text-2xl text-black items-start flex">
              ←
            </button>

            <div className="md:px-16 flex flex-row items-center justify-between gap-6 md:gap-12">
              <img
                src={Earth}
                alt="Earth Illustration"
                className="w-35 md:w-72 lg:w-2/5"
              />
              <div className="w-full md:w-1/3">
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-leaguespartansemibold text-black mb-4 leading-tight">
                  Waste <br /> Insight
                </h1>
                <p className="mt-4 text-black font-poppinsmedium">
                  Pelajari dampak nyata dari sampah terhadap planet kita. Dapatkan wawasan tentang jenis-jenis limbah yang dihasilkan, dan mulailah langkah nyata menuju ekosistem pengelolaan yang lebih bertanggung jawab.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl md:rounded-[45px] shadow p-8 flex flex-col md:flex-row items-center gap-10">
              <img src={Lamp} alt="Lightbulb" className="w-40 md:w-1/2" />
              <div className="flex-1">
                <h2 className="text-3xl md:text-6xl font-leaguespartanmedium mb-3">Do You<br />Know?</h2>
                <p className="text-sm md:text-xl text-justify leading-tight md:leading-10 font-poppinsmedium text-black">
                  Sebotol plastik membutuhkan waktu lebih dari 450 tahun untuk terurai sepenuhnya di lingkungan.
                  <br /><br />
                  Mendaur ulang satu ton kertas dapat menyelamatkan hingga 17 pohon dan menghemat energi yang cukup untuk menyalakan satu rumah selama enam bulan penuh!
                  <br /><br />
                  Mencabut pengisi daya (charger) dari stopkontak saat tidak digunakan dapat mengurangi konsumsi energi 'vampire power' yang diam-diam menghabiskan listrik di rumah Anda.              </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl md:rounded-[45px] shadow p-8 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <h2 className="text-3xl md:text-6xl font-leaguespartanmedium mb-3">Why It Matters?</h2>
                <p className="text-sm md:text-xl text-justify leading-tight md:leading-10 font-poppinsmedium text-black">
                  Menjaga Kesehatan Planet. Pengelolaan limbah yang buruk berkontribusi pada polusi tanah, air, dan udara, yang secara langsung mengancam keanekaragaman hayati dan mempercepat perubahan iklim global. Mengambil tindakan adalah penting untuk masa depan ekosistem kita.
                  <br /><br />
                  Menciptakan Ekonomi Sirkular. Mengubah limbah menjadi sumber daya baru (daur ulang) membuka peluang kerja baru, mengurangi ketergantungan pada bahan baku primer, dan menghemat biaya produksi jangka panjang. Ini adalah investasi cerdas bagi pertumbuhan berkelanjutan.
                  <br /><br />
                  Meningkatkan Kualitas Hidup. Dengan mengelola sampah secara bertanggung jawab, kita mengurangi risiko penyakit menular, menciptakan lingkungan yang lebih bersih dan sehat, serta memenuhi tanggung jawab moral kita terhadap generasi mendatang.
                </p>
              </div>
              <img src={Question} alt="Question Illustration" className="w-40 md:w-2/5" />
            </div>

            <div className="bg-white rounded-3xl md:rounded-[45px] shadow p-8 flex flex-col items-center gap-10">
              <div className="flex-1">
                <h2 className=" text-3xl md:text-6xl font-leaguespartanmedium mb-3">How To Reduce<br />Waste?</h2>
                <p className="text-sm md:text-xl text-justify leading-tight md:leading-10 font-poppinsmedium text-black">
                  Prioritaskan pengurangan konsumsi secara keseluruhan, terutama barang sekali pakai. Selalu bawa botol minum dan tas belanja sendiri, serta hindari produk dengan kemasan berlebihan. Tanyakan pada diri sendiri, "Apakah saya benar-benar membutuhkan ini?" sebelum membeli.
                  <br /><br />
                  Perpanjang Usia Barang (Reuse). Cari cara kreatif untuk menggunakan kembali wadah, botol (seperti yang ada di gambar), atau pakaian lama sebelum membuangnya. Berikan barang yang masih layak pakai kepada orang lain atau donasikan daripada langsung membuangnya ke tempat sampah.
                  <br /><br />
                  Belanja Cerdas dan Kompos. Pilih produk yang tahan lama (durability) dan mudah diperbaiki. Selain itu, alihkan limbah organik seperti sisa makanan dan potongan sayuran (yang merupakan bagian besar dari sampah rumah tangga) menjadi kompos, mengurangi jumlah sampah yang berakhir di TPA.
                </p>
              </div>
              <img src={Glass} alt="Glass Bottles" className="w-full md:w-1/2 self-end" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WasteInsight;