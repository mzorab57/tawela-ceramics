import React from "react";
import { useTranslation } from "react-i18next";

const CategoryFilter = ({ activeFilter, setActiveFilter }) => {
  // If you use translation files, you could also update those.
  // For this example, the labels are hard-coded.
  return (
    <div className="text-center my-12">
      <ul className="flex justify-start lg:justify-center font-sans space-x-6 overflow-x-auto whitespace-nowrap px-4 sm:px-0 w-full">
        <li
          className={`px-3 cursor-pointer ${activeFilter === "all" ? "text-yellow-500" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          All
        </li>
        <li
          className={`cursor-pointer ${activeFilter === "ceramics" ? "text-yellow-500" : ""}`}
          onClick={() => setActiveFilter("ceramics")}
        >
          Ceramics
        </li>
        <li
          className={`cursor-pointer ${activeFilter === "granit" ? "text-yellow-500" : ""}`}
          onClick={() => setActiveFilter("granit")}
        >
          Granite
        </li>
        <li
          className={`cursor-pointer ${activeFilter === "porcelain" ? "text-yellow-500" : ""}`}
          onClick={() => setActiveFilter("porcelain")}
        >
          Porcelain
        </li>
      </ul>
    </div>
  );
};

export default CategoryFilter;
