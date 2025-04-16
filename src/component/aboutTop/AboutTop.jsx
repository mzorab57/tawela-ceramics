import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AboutTop = ({img, title}) => {
  const { t } = useTranslation();
  return (
    <section className="navigation">
      <div className="relative">
        <img
          src={img}
          alt="background"
          className=" object-left object-cover brightness-50 h-[600px] w-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-white via-transparent to-transparent">
          <h2 className="text-3xl lg:text-4xl text-white  font-jost">
            {t(title) || t("about")}
          </h2>
          <ul className="flex justify-center space-x-2 text-gray-300 mt-4  p-2 px-5">
            <li>
              <Link to="/" className="text-gray-200 text-xl font-jost font-medium">
                {t("home")}
              </Link>
            </li>
            <li className="text-gray-200 text-xl font-jost font-medium">
              - -    {t(title)||  t("about")}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutTop;
