import React from "react";
import { useTranslation } from "react-i18next";
import logo from "/logoTawela.png";


const locations = [
  {
    city: "Kirkuk",
    cityKurdish: "کەرکوک",
    address: "New Court Street, near Fourth Bridge, opposite Kirkuk Jawhary",
    addressKurdish: "شەقامی دادگای نوێ، نزیک پردی چوارەم، بەرامبەر جەوهەری کەرکوک",
    phones: ["07706631010", "07516631010"],
    mapLink: "https://maps.google.com/?q=35.421844,44.381432"
  },
  {
    city: "Mosul",
    cityKurdish: "موسڵ",
    address: "Al-Zuhour Street - before Al-Muthanna Bridge - opposite the archaeological hill",
    addressKurdish: "شەقامی الزهور - پێش پردی المثنى - بەرامبەر التل الأثرى",
    phones: ["0770 140 0877", "0750 140 0877"],
    mapLink: "https://maps.google.com/?q=36.360767,43.172226"
  },
  {
    city: "Sulaymaniyah",
    cityKurdish: "سلێمانی",
    addresses: [
      {
        main: "Before Sulaymaniyah-Arbat checkpoint",
        mainKurdish: "ناونیشانی سەرەکی: سلێمانی پێش خاڵی پشکنینی سلێمانی عەربەت"
      },
      {
        secondary: "Malik Mahmood Street, near Kobani Bridge",
        secondaryKurdish: "ناونیشانی دووەم: سلێمانی شەقامی مەلیک مەحموود نزیک پردی کۆبانی"
      }
    ],
    phones: ["07701535934", "07501132720"],
    mapLink: "https://maps.app.goo.gl/q8bb7uuiiToyCF1x8"
  }
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      name="contacts"
      className="min-h-[600px] text-slate-100 opacity-90 font-jost lg:py-20  relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
          url('https://magenta-lemur-647050.hostingersite.com/assets/images/footerBg/footer-bg.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
          {/* Company Info Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="Tawela Ceramics" className="w-24 h-24" />
              <h3 className="text-2xl font-bold">Tawela Ceramics</h3>
            </div>
            <p className="text-gray-300">
            Tawela Ceramic Company is one of the largest ceramic distribution companies in Iraq.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <i className="fas fa-envelope text-teal-500"></i>
              Email: 
              <a 
                href="mailto:info@tawelaceramic.com"
                className="hover:text-teal-500 transition-colors"
              >
                info@tawelaceramic.com
              </a>
            </div>
          </div>

          {/* Locations Grid */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold mb-6 border-b border-gray-600 pb-2">
            Our locations 
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {locations.map((location, index) => (
                <div key={index} className="space-y-3">
                  <h5 className="text-lg font-semibold px-2 rounded bg-gray-500/30 text-gray-300">
                    {location.city} / {location.cityKurdish}
                  </h5>
                  <div className="text-sm text-gray-300">
                    {location.addresses ? (
                      <>
                        <p className="mb-2">{location.addresses[0].mainKurdish}</p>
                        <p className="mb-2">{location.addresses[1].secondaryKurdish}</p>
                      </>
                    ) : (
                      <p className="mb-2">{location.addressKurdish}</p>
                    )}
                    {location.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone}`}
                        className="block hover:text-teal-500 transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                    <a
                      href={location.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-teal-500 hover:underline"
                    >
                      View On Map
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Working Hours Section */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b border-gray-600 pb-2">
              {t("working_hours")}
            </h4>
            <ul className="space-y-4">
              <li>
                <span className="block font-medium">{t("sunday_thursday")}</span>
                <span className="text-gray-300">8:00 am - 5:00 pm</span>
              </li>
              <li>
                <span className="block font-medium">{t("friday")}</span>
                <span className="text-gray-300">{t("closed")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {t("company_name")}. {t("all_rights_reserved")}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
