import React from "react";
import { useTranslation } from "react-i18next";
import videoMp4 from "/assets/videos/tvbg.mp4";
import videoWebm from "/assets/videos/tvbg.webm";
import AnimatedComponent from "../../component/animations/AnimatedComponent";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    name: "INSTAGRAM",
    url: "https://www.facebook.com/share/19pAjXfhq5/",
  },
  {
    name: "FACEBOOK",
    url: "https://www.instagram.com/tawela_ceramics?igsh=MWV3cnoxazJieGd5aw==",
  },
  {
    name: "TIKTOK",
    url: "https://www.tiktok.com/@tawela.ceramic?fbclid=PAY2xjawIODxNleHRuA2FlbQIxMQABpqIjyzjP8V9LH-E1ZZvbjzWSaHFA5Moo0ppmW6p-hDjeodaFhbYuVNxypg_aem_X61Lm_VqawVpY93bE00m6g",
  },
];

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section name="hero" className="section text-white h-screen">
      <div className="relative overflow-hidden bg-transparent flex h-screen">
        {/* Social Media Links */}
        <aside className="w-24 h-screen hidden lg:block border border-b-0 bg-transparent absolute left-0 border-gray-500 z-10">
          <ul className="size-full flex flex-col justify-center gap-y-32">
            {socialLinks.map((link, index) => (
              <li key={index} className="hover:text-orange-300 -rotate-90 cursor-pointer">
                <Link to={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-screen object-cover brightness-40"
          style={{ aspectRatio: "16/9" }}
          preload="metadata"
          loading="eager"
        >
          <source src={videoWebm} type="video/webm" />
          <source src={videoMp4} type="video/mp4" />
        </video>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-6 px-4">
          <AnimatedComponent animationType="fade-up" dataAosDuration="500">
            <h2 className="text-sm md:text-lg font-light font-jost uppercase tracking-widest text-yellow-500">
              &#9866; {t("welcome")} &#9866;
            </h2>
          </AnimatedComponent>

          <AnimatedComponent animationType="fade-up" dataAosDuration="700">
<h1 className="text-4xl md:text-6xl xl:text-8xl font-medium font-jost leading-tight">
  {t("high_quality_ceramics")}
</h1>
          </AnimatedComponent>

          <AnimatedComponent animationType="fade-up" dataAosDuration="1000">
            <div dir="ltr" className="flex space-x-4 border border-gray-400 cursor-pointer">
              <LinkScroll
                to="about"
                smooth={true}
                duration={500}
                className="bg-yellow-500  hover:bg-yellow-600 text-white lg:px-6 px-2 lg:py-3 py-1.5 whitespace-nowrap text-md font-jost text-lg flex items-center space-x-2"
              >
                {t("explore_more")} <span className="px-2"> → </span>
              </LinkScroll>
              <LinkScroll
                to="contacts"
                smooth={true}
                duration={500}
                className="hover:bg-gray-100 text-gray-400 lg:px-6 px-2 lg:py-3 py-1.5 whitespace-nowrap font-jost text-lg flex items-center space-x-2"
              >
                {t("contact_us")} <span className="px-2">→</span>
              </LinkScroll>
            </div>
          </AnimatedComponent>
        </div>
      </div>
    </section>
  );
};

export default Hero;
