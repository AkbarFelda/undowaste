import React from "react";
import { BackButton } from '../components';
import  { BlobL, BlobR, Icon404 } from '../assets';

function NotFound() {
  return (
    <div className="p-8 bg-background-notfound min-h-screen content-center flex flex-col items-center justify-center relative overflow-hidden text-center">
      <img
        src={BlobL}
        alt="Decorative Blob Left"
        className="absolute bottom-0 left-0 w-40 sm:w-10 md:w-48 h-auto"
      />
      <img
        src={BlobR}
        alt="Decorative Blob Right"
        className="absolute top-0 right-0 w-20 sm:w-10 md:w-48 h-auto opacity-50"
      />
      <img
        src={Icon404}
        alt="404 Not Found"
        className="z-10 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl" 
      />
      <h1 className="text-lg sm:text-xl md:text-2xl font-poppinsbold text-white z-10 max-w-md">
        Oops! Halaman Ini Ikut Tersesat dalam Tumpukan Limbah.
      </h1>
      <BackButton />
    </div>
  );
}
export default NotFound;