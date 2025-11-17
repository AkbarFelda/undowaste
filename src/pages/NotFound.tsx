import React from "react";
import BackButton from "../components/button/backButton";

function NotFound() {
  return (
    // Pastikan min-h-screen agar mencakup seluruh layar pada semua perangkat
    <div className="p-8 bg-background-notfound min-h-screen content-center flex flex-col items-center justify-center relative overflow-hidden text-center">
      
      {/* 🟢 Blob Kiri: Ukuran yang lebih kecil di HP, membesar di MD/LG */}
      <img
        src="src/assets/icons/BlobL.svg"
        alt="Decorative Blob Left"
        className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 h-auto"
      />

      {/* 🟢 Blob Kanan: Ukuran yang lebih kecil di HP, membesar di MD/LG */}
      <img
        src="src/assets/icons/BlobR.svg"
        alt="Decorative Blob Right"
        className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 h-auto"
      />

      {/* 🖼️ Gambar 404: Gunakan lebar relatif (w-full / max-w-sm) */}
      <img
        src="src/assets/icons/404.svg"
        alt="404 Not Found"
        // Ganti width={667.36} dengan ukuran relatif dan maksimum
        className="z-10 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl" 
      />
      
      {/* 📢 Teks H1: Sesuaikan ukuran teks menggunakan breakpoint */}
      <h1 className="mt-4 text-lg sm:text-xl md:text-2xl font-secondary font-bold text-white z-10 max-w-md">
        Oops! Halaman Ini Ikut Tersesat dalam Tumpukan Limbah.
      </h1>

      <BackButton />
    </div>
  );
}
export default NotFound;