import React, { useEffect, useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { scroller } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const MobileMenu = ({ isOpenMenu, setOpenMenu, color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("selectedLanguage", lng);
    // Set the direction based on the selected language
    document.body.dir = lng === "ar" || lng === "ku" ? "rtl" : "ltr";
    setIsOpen(false);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    changeLanguage(savedLanguage);
  }, []);

  // Handle smooth scrolling for sections
  const scrollToSection = (section) => {
    setOpenMenu(false);
    scroller.scrollTo(section, {
      smooth: true,
      offset: section === "hero" ? -200 : 40,
      duration: 500,
    });
  };

  return (
    <header className={`lg:hidden fixed top-0 left-0 w-full h-14  z-50 ${!color && location.pathname === "/portfolio" || !color && location.pathname === "/video" ? 'text-gray-900': "text-white"}`}>
      <div className="container flex justify-end p-4">
        <Hamburger
          toggled={isOpenMenu}
          toggle={setOpenMenu}
          size={28}
          duration={0.3}
          rounded
        />
        <div
          className={`fixed top-0 inset-0 bg-white transform ${
            isOpenMenu ? "translate-y-0 top-20" : "translate-y-full"
          } transition-transform duration-500 ease-in-out z-40`}
        >
          <nav className="flex text-gray-800 flex-col items-center justify-center h-full space-y-2">
            <Link
              to="/"
              onClick={() => scrollToSection("hero")}
              className="text-2xl hover:text-yellow-500"
            >
              {t("home")}
            </Link>
            <Link
              to="/about"
              onClick={() => {setOpenMenu(false);  window.scrollTo(0,0)}}
              className="text-2xl hover:text-yellow-500"
            >
              {t("about")}
            </Link>
            <Link
              to="/portfolio"
              onClick={() => {setOpenMenu(false);  window.scrollTo(0,0)}}
              className="text-2xl hover:text-yellow-500"
            >
             Portfolio
            </Link>
            <Link
              to="/video"
              onClick={() => {setOpenMenu(false); window.scrollTo(0,0)}}
              className="text-2xl hover:text-yellow-500"
            >
              Video
            </Link>
            <Link
              to="/"
              onClick={() => scrollToSection("contacts")}
              className="text-2xl hover:text-yellow-500"
            >
              {t("contacts")}
            </Link>

            {/* Language Dropdown */}
            <div className="relative text-center block lg:hidden">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(!isOpen);
                }}
                className="cursor-pointer py-2 px-4 rounded-lg hover:text-yellow-500"
              >
                {/* <GrLanguage size={25} className="mx-10" /> */}
                <div
                  className={`text-center mt-2 py-2 w-28 bg-white border-2 border-yeltext-yellow-500 rounded-lg shadow-xl text-black z-50 transform transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-full pointer-events-none"
                  }`}
                >
                  <div
                    className="block px-4 py-2 text-sm hover:bg-yellow-500 cursor-pointer"
                    onClick={() => changeLanguage("en")}
                  >
                    English
                  </div>
                  <div
                    className="block px-4 py-2 text-sm hover:bg-yellow-500 cursor-pointer"
                    onClick={() => changeLanguage("ar")}
                  >
                    Arabic
                  </div>
                  <div
                    className="block px-4 py-2 text-sm hover:bg-yellow-500 cursor-pointer"
                    onClick={() => changeLanguage("ku")}
                  >
                    Kurdish
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Footer */}
            <div className="flex flex-col px-2 text-center items-center justify-center">
              <div className="flex text-sm">
                <span className="flex gap-x-1 items-start">
                  <span className="text-yellow-500">{t("opening_hours")}</span> :
                  <span>8:00 am - 5:00 pm</span>
                </span>
              </div>
              <div className="flex gap-x-1 text-sm">
                <span className="text-yellow-500">
                  {t("location")} :{" "}
                  <Link to={`https://maps.app.goo.gl/q8bb7uuiiToyCF1x8`}className="text-gray-800">FFCJ+WRX, Sulaymaniyah, Sulaymaniyah Governorate</Link>
                </span>
              </div>
              <div className="flex pt-5 space-x-3">
                <a
                  href="https://www.facebook.com/share/19pAjXfhq5/"
                  className="text-gray-400 hover:text-teal-500"
                >
                  <FaFacebookF size={16} />
                </a>
                <a
                  href="https://www.instagram.com/tawela_ceramics?igsh=MWV3cnoxazJieGd5aw=="
                  className="text-gray-400 hover:text-teal-500"
                >
                  <AiFillInstagram size={20} />
                </a>
                <a
                  href="https://www.tiktok.com/@tawela.ceramic?fbclid=PAY2xjawIODxNleHRuA2FlbQIxMQABpqIjyzjP8V9LH-E1ZZvbjzWSaHFA5Moo0ppmW6p-hDjeodaFhbYuVNxypg_aem_X61Lm_VqawVpY93bE00m6g"
                  className="text-gray-400 hover:text-teal-500"
                >
                  <FaTiktok size={20} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MobileMenu;
