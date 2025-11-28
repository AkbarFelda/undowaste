import React from "react";
import TrashWaste from "../../../assets/images/trash-waste.svg";
import Map from "../../../assets/images/map.svg";
import Earth from "../../../assets/images/earth.svg";
import { useNavigate } from "react-router-dom";

export default function ExploreCard() {
  const navigate = useNavigate();

  const navigateWasteTracker = () => navigate("/wastetracker");
  const navigateWasteCategory = () => navigate("/wastecategory");
  const navigateWasteInsight = () => navigate("/wasteinsight");

  const cards = [
    {
      title: "Waste",
      subtitle: "Tracker",
      img: Map,
      position: "-bottom-8 lg:-bottom-15 md:-bottom-8 left-35 lg:left-70 -translate-x-1/2",
      onClick: navigateWasteTracker
    },
    {
      title: "Waste",
      subtitle: "Category",
      img: TrashWaste,
      position: "-bottom-18 lg:-bottom-35 right-3",
      onClick: navigateWasteCategory
    },
    {
      title: "Waste",
      subtitle: "Insight",
      img: Earth,
      position: "lg:-bottom-15 -bottom-9 lg:-left-15 -left-10 lg:scale-110",
      onClick: navigateWasteInsight
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5 mx-auto relative content-center items-center justify-center">
      {cards.map((item, index) => (
        <div
          key={index}
          onClick={item.onClick}
          className="lg:pt-12 lg:pl-8 relative bg-white rounded-[50px] shadow-md p-6 h-75 md:h-90 lg:h-150 w-3/5 lg:w-full md:w-full overflow-hidden cursor-pointer"
        >
          <h1 className="text-2xl lg:text-4xl font-leaguespartanmedium text-black">
            {item.title}
            <br />
            {item.subtitle}
          </h1>

          <img
            src={item.img}
            alt={item.title}
            className={`absolute ${item.position} w-full object-contain transition-all`}
          />
        </div>
      ))}
    </div>
  );
}