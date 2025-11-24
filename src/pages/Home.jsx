import React from "react";
import { TrashHero, TrashIcon, RecycleIcon, EarthIcon } from "../assets";

function Home() {
  return (
    <div className="min-h-full py-12 lg:py-20 relative">
      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row gap-10 items-start w-full relative z-10">
        <div className="text-center md:text-left order-2 md:order-1 w-full md:w-3/5 self-start">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-primary text-black mb-6 leading-tight">
            Gabung&nbsp;Gerakan,
            <br />
            Bersih&nbsp;Bersama
          </h1>

          <p className="text-black font-medium text-lg sm:text-xl mb-10 font-secondary max-w-xs mx-auto md:max-w-none md:mx-0 text-center md:text-left">
            Bergabunglah dengan ribuan orang lainnya dalam misi untuk mengurangi
            limbah dan menciptakan lingkungan yang lebih bersih dan sehat.
            Setiap tindakan kecil berdampak besar bagi bumi
          </p>

          <button className="bg-black text-white font-bold rounded-3xl shadow-lg transition duration-300 hover:opacity-80 py-3 px-8 text-base sm:py-4 sm:px-10 sm:text-lg md:py-2 md:px-4 md:text-base lg:py-3 lg:px-8 lg:text-xl">
            Bergabung Sekarang
          </button>
        </div>

        <div className="flex justify-center mt-10 order-1 md:order-2 w-full md:w-2/5 self-start translate-y-8 md:translate-y-0 lg:translate-y-8">
          <img
            src={TrashHero}
            alt="ImageHero"
            className="w-full max-w-sm md:w-[450px] md:mt-16 lg:w-[700px] md:-translate-x-8 lg:translate-x-[60px]"
          />
        </div>
      </div>

      {/* EDUKASI SECTION */}
      <div className="py-12 lg:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-[66px] text-center">
          <h2 className="text-3xl lg:text-4xl font-primary text-black mb-12">
            Edukasi Sampah
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Kolom 1 */}
            <div className="p-4">
              <img
                src={TrashIcon}
                alt="Jenis Sampah"
                className="mx-auto mb-4 w-18 sm:w-16 md:w-35"
              />
              <h3 className="text-xl font-bold text-black mb-2">
                Jenis Sampah
              </h3>
              <p className="text-black text-sm mx-auto max-w-xs">
                Kenali perbedaan antara sampah organik, anorganik, dan B3 untuk
                pengelolaan yang tepat.
              </p>
            </div>

            {/* Kolom 2 */}
            <div className="p-4">
              <img
                src={RecycleIcon}
                alt="Proses Daur Ulang"
                className="mx-auto mb-4 w-14 sm:w-16 md:w-20"
              />
              <h3 className="text-xl font-bold text-black mb-2">
                Proses Daur Ulang
              </h3>
              <p className="text-gray-600 text-sm mx-auto max-w-xs">
                Pelajari cara sampah diproses dan diolah kembali menjadi bahan
                baku yang berguna.
              </p>
            </div>

            {/* Kolom 3 */}
            <div className="p-4">
              <img
                src={EarthIcon}
                alt="Dampak Lingkungan"
                className="mx-auto mb-4 w-14 sm:w-16 md:w-20"
              />
              <h3 className="text-xl font-bold text-black mb-2">
                Dampak Lingkungan
              </h3>
              <p className="text-gray-600 text-sm mx-auto max-w-xs">
                Pahami konsekuensi serius dari pencemaran sampah terhadap
                ekosistem dan kesehatan kita.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-8 sm:p-12 lg:p-20 bg-white text-center">
        {/* 1. Bagian Judul Utama */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-black">
          Siap Menjadi Bagian Dari Perubahan?
        </h1>

        {/* 2. Bagian Deskripsi */}
        <p className="max-w-3xl text-base sm:text-lg lg:text-xl mb-8 text-gray-700">
          bergabunglah dengan ratusan orang lainnya dalam komunitas peduli
          lingkungan. Dapatkan informasi kegiatan, panduan praktis, dan
          kesempatan untuk beraksi nyata bersama kami
        </p>

        {/* 3. Bagian Angka dan Avatar */}
        <div className="flex flex-col-3 items-center mb-10">
          {/* Kontainer Avatar */}
          <div className="flex -space-x-4 mb-2">
            {/* Avatar 1 (Sesuaikan dengan gambar/komponen avatar Anda) */}
            <div
              className="w-10 h-10 rounded-full bg-pink-300 border-2 border-white "
              role="img"
              aria-label="Avatar member 1"
            ></div>
            {/* Avatar 2 */}
            <div
              className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white "
              role="img"
              aria-label="Avatar member 2"
            ></div>
            {/* Avatar 3 */}
            <div
              className="w-10 h-10 rounded-full bg-blue-600 border-2 border-white "
              role="img"
              aria-label="Avatar member 3"
            ></div>

            {/* Teks Angka */}
            <p className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-gray-900 leading-none">
              100+
            </p>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              Orang Sudah Bergabung & Beraksi
            </p>

            {/* Kelompok Avatar Kecil di Kanan (Mungkin ada lebih banyak, saya ambil 3 lagi sebagai contoh) */}
            {/* Avatar 4 */}
            <div
              className="w-10 h-10 rounded-full bg-indigo-500 border-2 border-white  "
              role="img"
              aria-label="Avatar member 4"
            ></div>
            {/* Avatar 5 */}
            <div
              className="w-10 h-10 rounded-full bg-green-500 border-2 border-white "
              role="img"
              aria-label="Avatar member 5"
            ></div>
            {/* Avatar 6 */}
            <div
              className="w-10 h-10 rounded-full bg-sky-500 border-2 border-white "
              role="img"
              aria-label="Avatar member 6"
            ></div>
          </div>
        </div>

        {/* 4. Tombol Aksi (Call to Action) */}
        <button className="bg-black text-white px-10 py-3 sm:px-12 sm:py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg">
          Segera Gabung Komunitas
        </button>
      </div>
    </div>
  );
}

export default Home;
