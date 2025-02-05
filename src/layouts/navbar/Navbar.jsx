import React, { useState } from "react";
import { scroller } from "react-scroll";
import tawela_ceramic_logo from "/logoTawela.png";
import MobileMenu from "../MobileMenu";
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom
import LanguageSwitcher from "../../component/languageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

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
  const textColorClass = location === "/portfolio" || location === "/video" ? "text-gray-800" : "text-white";

  return (
    <div className={`Navbar ${textColorClass} flex justify-between lg:flex-col`}>
      {/* Main Navbar */}
      <div
        className={`fixed top-0 ${location === "/portfolio" || location === "/video" ? 'border-none': "border border-gray-500"}  z-50 flex justify-between items-center h-20 w-full px-6 lg:px-10 ${
          color && `fixed top-0 py-4 ease-in transition-all z-30 bg-black/50 ${location === "/portfolio" || location === "/video" ? 'text-white': ""}`
        }`}
      >
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src={tawela_ceramic_logo}
              alt="tawela Logo"
              className="size-16 mt-3 -translate-x-7 mx-3 lg:px-0"
            />
          </Link>
        </div>

        {/* Navigation Menu - Hidden on Mobile */}
        <ul
          className={`hidden lg:flex justify-center items-center text-xl space-x-8 rtl:space-x-8 h-full font-jost font-medium`}
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
              onClick={() => window.scrollTo(0,0)}
              className="hover:text-yellow-500 cursor-pointer"
            >
              {t("about")}
            </Link>
          </li>

          {/* Menu */}
          <li
            onMouseMove={() => setMenuOpen(false)}
            onClick={() => window.scrollTo(0, 0)}
            className="group relative"
          >
            <Link to="/portfolio" className="hover:text-yellow-500">
              Portfolio
              <i className="las la-angle-down ml-1"></i>
            </Link>
          </li>

          {/* Video */}
          <li
            onMouseMove={() => setMenuOpen(true)}
            onClick={() => window.scrollTo(0, 0)}
          >
            <Link to="/video" className="hover:text-yellow-500">
              Video
              <i className="las la-angle-down ml-1"></i>
            </Link>
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

        <LanguageSwitcher />
      </div>
      {/* Mobile Menu */}
      <MobileMenu setOpenMenu={setOpenMenu} isOpenMenu={isOpenMenu} color={color} />
    </div>
  );
};

export default Navbar;
