import React from "react";
import { useTranslation } from "react-i18next";

const CategoryFilter = ({ activeFilter, setActiveFilter }) => {
  const { t } = useTranslation();

  return (
    <div className="text-center my-12">
      <ul className="flex justify-start lg:justify-center font-sans space-x-6 overflow-x-auto whitespace-nowrap px-4 sm:px-0 w-full">
        <li
          className={`px-3 cursor-pointer ${
            activeFilter === "all" ? "text-yellow-500" : ""
          }`}
          onClick={() => setActiveFilter("all")}
        >
          {t("gallery.categories.all")}
        </li>
        <li
          className={`cursor-pointer ${
            activeFilter === "interior" ? "text-yellow-500" : ""
          }`}
          onClick={() => setActiveFilter("interior")}
        >
          {t("gallery.categories.interior")}
        </li>
        <li
          className={`cursor-pointer ${
            activeFilter === "exterior" ? "text-yellow-500" : ""
          }`}
          onClick={() => setActiveFilter("exterior")}
        >
          {t("gallery.categories.exterior")}
        </li>
        <li
          className={`cursor-pointer ${
            activeFilter === "garden" ? "text-yellow-500" : ""
          }`}
          onClick={() => setActiveFilter("garden")}
        >
          {t("gallery.categories.garden")}
        </li>
        <li
          className={`cursor-pointer ${
            activeFilter === "roundAbout" ? "text-yellow-500" : ""
          }`}
          onClick={() => setActiveFilter("roundAbout")}
        >
          {t("gallery.categories.roundAbout")}
        </li>
      </ul>
    </div>
  );
};

export default CategoryFilter;
