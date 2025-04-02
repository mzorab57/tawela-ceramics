import React from "react";
import { useTranslation } from "react-i18next";
import logo from "/logoTawela.png"; // Convert to WebP
import { Link } from "react-router-dom";

// Convert gallery images to WebP and optimize them
const galleryImages = [
  "/assets/images/gallery/g1.webp",
  "/assets/images/gallery/g2.webp",
  "/assets/images/gallery/g3.webp",
  "/assets/images/gallery/g14.webp",
  "/assets/images/gallery/g5.webp",
  "/assets/images/gallery/g6.webp",
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      name="contacts"
      className="min-h-[600px] text-slate-100 font-jost lg:py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), 
          url('/assets/images/footerBg/footer-bg.webp')`, // Convert to WebP
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 max-w-[1400px]">
        {/* Left shape with WebP format and loading optimization */}
        <picture>
          <source
            srcSet="/assets/images/footer/left-shape.webp"
            type="image/webp"
          />
          <source
            srcSet="/assets/images/footer/left-shape.png"
            type="image/png"
          />
          <img
            src="/assets/images/footer/left-shape.png"
            alt="Decorative footer shape"
            className="absolute bottom-0 left-0 w-80 lg:w-[400px] h-auto"
            width={400}
            height={600}
            loading="lazy"
            decoding="async"
          />
        </picture>

        <div className="flex flex-col md:flex-row justify-between pt-10 items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Logo Section */}
          <div className="md:w-1/4 min-h-[200px]">
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
            <h5 className="text-xl font-jost font-medium mb-4 border-b  pb pb-2 border-b-gray-500">
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
            <h5 className="text-xl font-jost font-medium mb-4 border-b pb-2 border-b-gray-500">
              {t("contact_us")}
            </h5>
            <ul>
              <li className="flex items-center mb-2 cursor-pointer">
                <i className="fas fa-map-marker-alt text-primary mr-2 "></i>
                <span className="font-jost font-medium text-lg pr-1">
                  Location:{" "}
                </span>
                <Link
                  to={`https://maps.app.goo.gl/q8bb7uuiiToyCF1x8`}
                  className="text-gray-400"
                >
                  FFCJ+WRX, Sulaymaniyah, Sulaymaniyah Governorate
                </Link>
              </li>
              <li className="flex items-center mb-2 cursor-pointer ">
                <i className="fas fa-envelope text-primary mr-2"></i>
                <span className="font-jost text-lg font-medium pr-1">
                  Email:
                </span>
                <Link
                  to={`mailto:${"info@tawelaceramic.com"}`}
                  className="text-gray-400"
                >
                  info@tawelaceramic.com
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
                  className="text-gray-400 hover:underline"
                >
                  +9467701411893
                </a>
              </li>
            </ul>
          </div>

          {/* Gallery Section with optimized images */}
          <div className="md:w-1/4 w-full">
            <h5 className="text-xl font-jost font-medium mb-4 border-b pb-2 border-b-gray-500">
              {t("gallery")}
            </h5>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((image, index) => (
                <picture key={index}>
                  <source srcSet={image} type="image/webp" />
                  <img
                    src={image.replace(".webp", ".jpg")}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-20 object-cover rounded-sm"
                    width={120}
                    height={80}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              ))}
            </div>
          </div>
        </div>

        <div className=" border-t-gray-300 mt-10 pt-4 text-center text-gray-400">
          &copy; 2024 {t("company_name")}. {t("all_rights_reserved")}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
