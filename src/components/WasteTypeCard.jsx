import React from "react";

const WasteTypeCard = ({ icon: Icon, title, description, className = "" }) => {
  return (
    <div
      className={`
        flex flex-col items-center text-center p-6 sm:p-12
        bg-white rounded-3xl shadow-lg border border-gray-100 
        max-w-xs mx-auto h-full ${className}
    `}
    >
      <div className="mb-6 h-16 w-16 flex items-center justify-center">
        {Icon ? (
          <img 
               src={Icon} 
               alt={`${title} Icon`}
               className="w-full h-full object-contain" 
            />
        ) : (
          <div className="w-full h-full text-green-600">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM5.3 4.7A8.001 8.001 0 0115.3 14.7L10 9.4 4.7 4.7z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>

      <h1 className="text-xl sm:text-2xl font-primary font-medium text-gray-900 mb-3">
        {title}
      </h1>

      <p className="text-sm text-black text-center font-secondary leading-relaxed max-w-[200px]">
        {description}
      </p>
    </div>
  );
};

export default WasteTypeCard;
