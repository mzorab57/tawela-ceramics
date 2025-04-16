import React from "react";
import { useTranslation } from "react-i18next";


const CategoryFilter = ({ activeFilter, setActiveFilter }) => {
  const { t } = useTranslation();
  // If you use translation files, you could also update those.
  // For this example, the labels are hard-coded.
  return (
    <div className="text-center my-12">
      <ul dir="ltr" className="flex justify-start pb-1 text-xl font-jost lg:justify-center  space-x-6 overflow-x-auto whitespace-nowrap px-4  w-full">
        <li
          className={`px-3 border cursor-pointer ${activeFilter === "all" ? "bg-yellow-500  text-white" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
         
         {t("all")}
        </li>
        <li
          className={`cursor-pointer border px-3 hover:bg-yellow-500  hover:text-white text-gray-700 ${activeFilter === "ceramics" ? "bg-yellow-500 text-white" : ""}`}
          onClick={() => setActiveFilter("ceramic")}
        >
          {t("ceramic")}
        </li>
        <li
          className={`cursor-pointer border px-3 hover:bg-yellow-500 hover:text-white text-gray-700 ${activeFilter === "granit" ? "bg-yellow-500 text-white" : ""}`}
          onClick={() => setActiveFilter("granite")}
        >
          {t("granite")}
        </li>
        <li
          className={`cursor-pointer border px-3 hover:bg-yellow-500 hover:text-white text-gray-700 ${activeFilter === "porcelain" ? "bg-yellow-500 text-white" : ""}`}
          onClick={() => setActiveFilter("porcelain")}
        >
          {t("porcelain")}
        </li>
      </ul>
    </div>
  );
};

export default CategoryFilter;
