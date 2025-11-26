import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

const SliderNavigation = ({ onPrev, onNext }) => (
  <div className="flex justify-center mt-8 space-x-6">
    <button
      onClick={onPrev}
      className="bg-white p-3 rounded-full shadow-md text-gray-700 hover:bg-gray-100 transition-colors"
      aria-label="Previous testimonial"
    >
      <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6" />
    </button>

    <button
      onClick={onNext}
      className="bg-white p-3 rounded-full shadow-md text-gray-700 hover:bg-gray-100 transition-colors"
      aria-label="Next testimonial"
    >
      <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
    </button>
  </div>
);

export default SliderNavigation;
