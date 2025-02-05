import React from "react";


const CategoryFilter = ({ activeFilter, setActiveFilter }) => {
  // If you use translation files, you could also update those.
  // For this example, the labels are hard-coded.
  return (
    <div className="text-center my-12">
      <ul className="flex justify-start text-xl font-jost lg:justify-center space-x-6 overflow-x-auto whitespace-nowrap px-4 sm:px-0 w-full">
        <li
          className={`px-3 border cursor-pointer ${activeFilter === "all" ? "bg-yellow-500 text-white" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          All
        </li>
        <li
          className={`cursor-pointer border px-3 hover:bg-yellow-500 hover:text-white text-gray-700 ${activeFilter === "ceramics" ? "bg-yellow-500 text-white" : ""}`}
          onClick={() => setActiveFilter("ceramics")}
        >
          Ceramics
        </li>
        <li
          className={`cursor-pointer border px-3 hover:bg-yellow-500 hover:text-white text-gray-700 ${activeFilter === "granit" ? "bg-yellow-500 text-white" : ""}`}
          onClick={() => setActiveFilter("granit")}
        >
          Granite
        </li>
        <li
          className={`cursor-pointer border px-3 hover:bg-yellow-500 hover:text-white text-gray-700 ${activeFilter === "porcelain" ? "bg-yellow-500 text-white" : ""}`}
          onClick={() => setActiveFilter("porcelain")}
        >
          Porcelain
        </li>
      </ul>
    </div>
  );
};

export default CategoryFilter;
