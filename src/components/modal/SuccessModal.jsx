import React from "react";
import ReactDOM from "react-dom";

/**
  @param {boolean} isOpen 
  @param {function} onClose 
 */
const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const modalContent = (
    <div
      className="fixed inset-0 bg-white/70 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        // Tutup modal jika klik di latar belakang (overlay), bukan di dalam konten
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-[#F7F7F7] rounded-xl w-full max-w-md shadow-lg flex flex-col relative pt-16 md:pt-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-14 md:h-20 bg-[#527133]"></div>
        <button
          className="absolute top-4 right-4 text-gray-800 text-3xl font-bold cursor-pointer z-10"
          onClick={onClose}
          aria-label="Tutup"
        >
          &times;
        </button>

        <div className="text-center p-6 md:p-8 space-y-2">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mt-4">
            Terima Kasih, Anda Telah Menghubungi Contact Support Kami!
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Kami akan segera menghubungi tim, mohon untuk menunggu balasan dari tim kami.
          </p>
        </div>

        <div className="p-6 pt-0 text-center">
          <button
            className="bg-black text-white py-3 px-8 rounded-full text-base font-semibold hover:bg-gray-800 transition-colors duration-200 w-40"
            onClick={onClose}
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
};

export default SuccessModal;
