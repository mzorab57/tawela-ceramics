import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const VideoText = () => {
  const { t } = useTranslation();
  const projectCategories = t("projectCategories", { returnObjects: true });

  // Ensure projectCategories is an array, or provide a fallback
  const categoriesArray = ["Ceramics", "Porcelain", "Granet", "View all video"];

  return (
    <div className="font-jost">
     

      {/* Categories List */}
      <div className="relative pl-4 translate-y-5 border-l border-gray-300">
        <ul className="xl:space-y-24  space-y-10">
          {categoriesArray.map((category, index) => (
            <li key={index} className="group">
              <Link
                to="/video"
                className="flex items-center space-x-4 text-gray-600 hover:text-teal-600 transition-colors"
              >
                <span className="w-2.5 h-2.5 bg-teal-500 rounded-full group-hover:ring-4 ring-teal-500/20 transition-all duration-300" />
                <span className="text-lg font-medium">{category}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoText;
