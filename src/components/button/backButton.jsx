import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function BackButton() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleGoBack}
      className="mt-4 px-6 py-2 bg-white text-background-notfound rounded-full font-poppinsmedium shadow-lg flex items-center gap-2 z-10 hover:bg-gray-100 transition duration-300"
    >
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="text-background-notfound text-base "
      />
      Kembali
    </button>
  );
}

export default BackButton;
