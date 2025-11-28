import React from "react";

const TestimonialCard = ({ quote, author, location, context, isActive }) => {
  const cardBgColor = isActive ? "bg-green-50" : "bg-white";
  const quoteColor = isActive ? "text-green-600/90" : "text-green-500/70";

  return (
    <div
      className={`flex flex-col justify-between flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px] p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 h-full ${cardBgColor} scroll-snap-align-start transition-all duration-300 relative`}
    >
      <div>
        <div
          className={`absolute top-0 left-0 pt-4 pl-4 text-7xl leading-none font-serif transition-colors duration-300 ${quoteColor}`}
        >
          ❝
        </div>

        <div className="relative pt-6 mb-4">
          <p className="text-xl sm:text-2xl font-poppinsmedium text-gray-800 leading-relaxed">
            {quote}
          </p>
        </div>
      </div>

      <div className="text-sm pt-4">
        <p className="font-poppinssemibold text-gray-900">
          {author}, {location}
        </p>
        <p className="text-gray-500 font-poppinsregular mt-1">{context}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
