import React from "react";
import videoMp4 from "/assets/videos/tvbg.mp4";
import videoWebm from "/assets/videos/tvbg.webm"; // Ensure you have this file in the correct directory
import AnimatedComponent from "../../component/animations/AnimatedComponent";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section name="hero" className="section text-white">
      <div className="relative overflow-hidden bg-transparent flex">
        {/* Right social media links */}
        <div className="w-24 h-screen hidden lg:block border border-b-0 bg-transparent absolute left-0 border-gray-500 z-10">
          <ul className="size-full flex flex-col justify-center gap-y-32">
            <li className="hover:text-orange-300 -rotate-90 cursor-pointer">
              <Link to="https://www.facebook.com/share/19pAjXfhq5/">INSTAGRAM</Link>
            </li>
            <li className="hover:text-orange-300 -rotate-90">
              <Link to="https://www.instagram.com/tawela_ceramics?igsh=MWV3cnoxazJieGd5aw==">FACEBOOK</Link>
            </li>
            <li className="hover:text-orange-300 -rotate-90">
              <Link to="https://www.tiktok.com/@tawela.ceramic?fbclid=PAY2xjawIODxNleHRuA2FlbQIxMQABpqIjyzjP8V9LH-E1ZZvbjzWSaHFA5Moo0ppmW6p-hDjeodaFhbYuVNxypg_aem_X61Lm_VqawVpY93bE00m6g">TIKTOK</Link>
            </li>
          </ul>
        </div>

        {/* Updated video element with multiple sources */}
        <video autoPlay loop muted playsInline className="w-full h-screen object-cover brightness-40">
          <source src={videoWebm} type="video/webm" />
          <source src={videoMp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Centered content */}
        <div className="absolute translate-y-20 bg-gradient-to-t from-black/60 via-transparent to-transparent inset-0 flex flex-col items-center justify-center text-center text-white space-y-6 px-4">
          <h2 className="text-sm md:text-lg font-light font-jost uppercase tracking-widest text-yellow-500">
            <AnimatedComponent animationType="fade-up" dataAosDuration="500">
              &#9866; Welcome to Tawela Ceramic &#9866;
            </AnimatedComponent>
          </h2>
          <h1 className="text-4xl md:text-6xl xl:text-8xl font-medium font-jost leading-tight">
            <AnimatedComponent animationType="fade-up" dataAosDuration="700">
              High Quality <br /> Ceramics Products
            </AnimatedComponent>
          </h1>
          <AnimatedComponent animationType="fade-up" dataAosDuration="1000">
            <div className="flex space-x-4 border border-gray-400">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white lg:px-6 px-2 lg:py-3 py-1.5 whitespace-nowrap text-md font-jost text-lg flex items-center space-x-2">
                <LinkScroll to="about" smooth={true} duration={500}>Read More</LinkScroll>
                <span>→</span>
              </button>
              <button className="hover:bg-gray-100 text-gray-400 lg:px-6 px-2 lg:py-3 py-1.5 whitespace-nowrap font-jost text-lg flex items-center space-x-2">
                <LinkScroll to="contacts" smooth={true} duration={500}>Get in Touch</LinkScroll>
                <span>→</span>
              </button>
            </div>
          </AnimatedComponent>
        </div>
      </div>
    </section>
  );
};

export default Hero;
