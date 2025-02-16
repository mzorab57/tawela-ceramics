import React, { useState } from "react";
import { scroller } from "react-scroll";
import tawela_ceramic_logo from "/logoTawela.png";
import MobileMenu from "../MobileMenu";
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom
import LanguageSwitcher from "../../component/languageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import AnimatedComponent from "../../component/animations/AnimatedComponent";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Navbar = ({ setMenuOpen }) => {
  const { t } = useTranslation(); // Destructure the translation function
  const [color, setColor] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const location = useLocation().pathname;

  const changeHeaderColor = () => {
    window.scrollY >= 20 ? setColor(true) : setColor(false);
  };
  window.addEventListener("scroll", changeHeaderColor);

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      offset: section === "hero" ? -200 : 40,
      duration: 500,
    });
  };

  // Determine the text color: if on portfolio page, use gray; otherwise, use white.
  const textColorClass =
    location === "/portfolio" || location === "/video"
      ? "text-gray-800"
      : "text-white";

  return (
    <div
      className={`Navbar ${textColorClass} flex justify-between lg:flex-col overflow-hidden`}
    >
      {/* Main Navbar */}
      <div
        className={`fixed top-0 ${
          location === "/portfolio" || location === "/video"
            ? "border-none"
            : "border border-gray-500"
        }  z-50 flex justify-between items-center h-20 w-full px-6 lg:px-10 ${
          color &&
          `fixed top-0 py-4 ease-in transition-all z-30 bg-black/50 ${
            location === "/portfolio" || location === "/video"
              ? "text-white"
              : ""
          }`
        }`}
      >
        {/* Logo */}
        <AnimatedComponent
          animationType="fade-right"
          dataAosDuration="1000"
          dataAosDelay="1000"
        >
          <div>
            <Link to="/">
              <img
                src={tawela_ceramic_logo}
                alt="tawela Logo"
                className="size-16 mt-3 -translate-x-7 mx-3 lg:px-0"
              />
            </Link>
          </div>
        </AnimatedComponent>

        {/* Navigation Menu - Hidden on Mobile */}

        <AnimatedComponent
          animationType="fade-down"
          dataAosDuration="1000"
          dataAosDelay="1000"
        >
          <ul
            className={`hidden lg:flex justify-center items-center text-lg space-x-8 rtl:space-x-8 h-full font-jost `}
          >
            <li onMouseMove={() => setMenuOpen(false)}>
              <Link
                to="/"
                onClick={() => scrollToSection("hero")}
                className="hover:text-yellow-500 cursor-pointer h-full px-6"
              >
                {t("home")}
              </Link>
            </li>

            <li onMouseMove={() => setMenuOpen(false)}>
              <Link
                to="/about"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:text-yellow-500 cursor-pointer"
              >
                {t("about")}
              </Link>
            </li>

            {/* Pages Dropdown */}
            <li
              onMouseMove={() => setMenuOpen(true)}
              onClick={() => window.scrollTo(0, 0)}
              className="group relative "
            >
              <span className="hover:text-yellow-500 cursor-pointer flex justify-center items-center   py-7 ">
                Pages
                <MdOutlineKeyboardArrowDown className="pt-1" size={25} />
              </span>
              <ul className="absolute hidden group-hover:block w-32 text-nowrap  top-[5.09rem] border border-gray-500 border-t-0 bg-black/80 duration-700 transition-all transform ease-in-out text-white shadow-lg  p-2 space-y-2">
                <li>
                  <Link to="/portfolio" className="hover:text-yellow-500 duration-300 transition-all transform ease-in-out ">
                     Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/video" className="hover:text-yellow-500 duration-300 transition-all transform ease-in-out">
                    Video
                  </Link>
                </li>
                <li>
                  <Link to="/ourhistory" className="hover:text-yellow-500 duration-300 transition-all transform ease-in-out">
                    Our History
                  </Link>
                </li>
              </ul>
            </li>

            {/* Contacts */}
            <li onMouseMove={() => setMenuOpen(false)}>
              <Link
                to="/"
                onClick={() => scrollToSection("contacts")}
                className="hover:text-yellow-500 cursor-pointer"
              >
                {t("contacts")}
              </Link>
            </li>
          </ul>
        </AnimatedComponent>

        <AnimatedComponent
          animationType="fade-left"
          dataAosDuration="1000"
          dataAosDelay="1000"
        >
          <LanguageSwitcher />
        </AnimatedComponent>
      </div>
      {/* Mobile Menu */}
      <MobileMenu
        setOpenMenu={setOpenMenu}
        isOpenMenu={isOpenMenu}
        color={color}
      />
    </div>
  );
};

export default Navbar;
