import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const VideoText = () => {
  const { t } = useTranslation();
  const projectCategories = t('projectCategories', { returnObjects: true });

  // Ensure projectCategories is an array, or provide a fallback
  const categoriesArray = [
        "Ceramics",
        "Porcelain",
        "Granet",
        "View all video"
      ];

  return (
    <div className="video-text flex px-4 font-jost">
      <div className="uppercase -rotate-90 hidden  lg:-translate-x-10 lg:block place-self-center text-gray-200 font-bold text-3xl md:text-4xl lg:text-7xl">
        {t('Projects')}
      </div>
      <aside className="w-[200px]  relative h-full lg:-translate-x-10">
        <hr className="h-[500px] absolute ltr:left-1   ltr:border-l rtl:border-r rtl:right-1 " />
       
        <ul className="lg:space-y-20 space-y-6 ">
          {categoriesArray.map((category, index) => (
            <li key={index} className="text-lg text-gray-500 flex items-center -space-x-1 ">
              <span className="w-2 h-2 bg-[#1b6379] rounded-full z-[1]"></span>
              <Link to={`/video`} className={`pb-0.5 pl-2 ${category === "View all video" && 'cursor-pointer'}`}>{category}</Link>
            </li>
          ))}
        </ul>
      
      </aside>
    </div>
  );
};

export default VideoText;
