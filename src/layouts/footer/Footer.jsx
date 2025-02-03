import React from "react";
import { useTranslation } from "react-i18next";

import logo from "/logoTawela.png";
import { Link } from "react-router-dom";

const galleryImages = [
  "/assets/images/gallery/g(1).JPG",
  "/assets/images/gallery/g(2).JPG",
  "/assets/images/gallery/g(3).JPG",
  "/assets/images/gallery/g(14).JPG",
  "/assets/images/gallery/g(5).JPG",
  "/assets/images/gallery/g(6).JPG",
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      name="contacts"
      className=" text-gray-800 font-jost bg-slate-50 py-20 border-t-2  border-b-2 "
    >
      <div className="container mx-auto px-4 max-w-[1400px] overflow-hidden ">
        <img
          src="https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/1.png"
          alt="footer"
          className="absolute right-0 lg:w-56 w-32 animate-custom-bounce"
        />
        <div className="flex flex-col md:flex-row justify-between pt-10 items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Logo Section */}
          <div className="md:w-1/4">
            <div className="flex items-center space-x-2">
              <div className="flex flex-col space-y-5">
                <span className="text-3xl font-jost font-medium ">
                  Tawela Ceramics
                </span>
                <img src={logo} alt="logo" className="size-40" />
              </div>
            </div>
          </div>

          {/* Working Hours Section */}
          <div className="md:w-1/4">
            <h5 className="text-xl font-jost font-medium mb-4 border-b-2">
              {t("working_hours")}
            </h5>
            <ul>
              <li className="mb-2">
                <span className="block font-jost text-lg font-medium">
                  {t("sunday_thursday")}
                </span>
                <span className="text-gray-400">8:00 am - 5:00 pm</span>
              </li>
              <li className="mb-2">
                <span className="block font-jost text-lg font-medium">
                  Only Friday
                </span>
                <span className="text-gray-400">Close</span>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="md:w-1/4 ">
            <h5 className="text-xl font-jost font-medium mb-4 border-b-2">
              {t("contact_us")}
            </h5>
            <ul>
              <li className="flex items-center mb-2 cursor-pointer">
                <i className="fas fa-map-marker-alt text-primary mr-2 "></i>
                <span className="font-jost font-medium text-lg pr-1">
                  Location:{" "}
                </span>
                <span className="text-gray-500">FFCJ+XRJ Yakmalla</span>
              </li>
              <li className="flex items-center mb-2 cursor-pointer ">
                <i className="fas fa-envelope text-primary mr-2"></i>
                <span className="font-jost text-lg font-medium pr-1">
                  Email:
                </span>
                <Link
                  to={`mailto:${"info@tawelaceramic.com"}`}
                  className="text-gray-500"
                >
                  info@tawelaceramic
                </Link>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-primary mr-2"></i>
                <span className="font-jost text-lg font-medium pr-1">
                  Phone:
                </span>
                <a
                  href="https://wa.me/9467701411893"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:underline"
                >
                  +9467701411893
                </a>
              </li>
            </ul>
          </div>

          {/* Gallery Section */}
          <div className="md:w-1/4 w-full">
            <h5 className="text-xl font-jost font-medium mb-4 border-b-2">
              {t("gallery")}
            </h5>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Gallery Image"
                  className="w-full  h-20 object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t-2 border-t-gray-300 mt-14 pt-4 text-center text-gray-500">
          &copy; 2024 {t("company_name")}. {t("all_rights_reserved")}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
