import React from "react";
import { BackButton } from '../components';

function NotFound() {
  return (
    <div className="p-8 bg-background-notfound min-h-screen content-center flex flex-col items-center justify-center relative overflow-hidden text-center">
      <img
        src="src/assets/icons/BlobL.svg"
        alt="Decorative Blob Left"
        className="absolute bottom-0 left-0 w-40 sm:w-10 md:w-48 h-auto"
      />
      <img
        src="src/assets/icons/BlobR.svg"
        alt="Decorative Blob Right"
        className="absolute top-0 right-0 w-20 sm:w-10 md:w-48 h-auto opacity-50"
      />
      <img
        src="src/assets/icons/404.svg"
        alt="404 Not Found"
        className="z-10 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl" 
      />
      <h1 className="text-lg sm:text-xl md:text-2xl font-secondary font-bold text-white z-10 max-w-md">
        Oops! Halaman Ini Ikut Tersesat dalam Tumpukan Limbah.
      </h1>
      <BackButton />
    </div>
  );
}
export default NotFound;