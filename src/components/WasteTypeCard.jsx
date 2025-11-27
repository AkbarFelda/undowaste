import React from "react";

const WasteTypeCard = ({ icon: Icon, title, description, className = "" }) => {
  const titleLines = title.split(" ");

  return (
    <div
      className={`
        flex flex-col items-center text-center p-6 sm:p-12 md:p-8
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
          <div className="w-full h-full text-green-600" />
        )}
      </div>


      <h1 className="text-xl sm:text-2xl font-primary font-medium text-gray-900 mb-3 leading-tight">
        {titleLines[0]} <br />
        {titleLines.slice(1).join(" ")}
      </h1>

      <p className="text-sm text-black text-center font-secondary leading-relaxed max-w-[200px]">
        {description}
      </p>
    </div>
  );
};

export default WasteTypeCard;
