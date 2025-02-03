import React from "react";
import services_vide from "/assets/videos/tvbg.mp4";
import AnimatedComponent from "../../component/animations/AnimatedComponent";
import { Link } from "react-scroll";

const Hero = () => {
  // Define the text you want to display
  const text = "Award Winning Flooring Company";

 
  return (
    <section
      name="hero"
      className="section text-white"
    >

   

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-transparent  flex ">
        {/* right line */}
      <div className="w-24 h-screen hidden lg:block border border-b-0 bg-transparent absolute left-0 border-gray-500 z-10">
        <ul className="size-full  flex flex-col justify-center gap-y-32 ">
        <li className="-rotate-90"><Link to="/">INSTAGRAM</Link></li>
        <li className="-rotate-90"><Link to="/">FACEBOOK</Link></li>
        <li className="-rotate-90"><Link to="/">TIKTOK</Link></li>
        </ul>
      </div>
        <video
          src={services_vide}
          autoPlay
          loop
          muted
          className="w-full h-screen object-cover brightness-40  "
        ></video>
        {/* Centered Content */}
        <div className="absolute translate-y-20  bg-gradient-to-t from-black/60 via-transparent to-transparent inset-0 flex flex-col items-center justify-center text-center text-white space-y-6 px-4">
         
          <h2 className="text-sm md:text-lg font-light font-jost uppercase tracking-widest text-yellow-400  ">
        <AnimatedComponent animationType="fade-up" dataAosDuration="500" >
            &#9866; Welcome to Tawela Ceramic &#9866;
        </AnimatedComponent>
          </h2>
          <h1 className="text-4xl md:text-6xl xl:text-8xl font-medium font-jost leading-tight ">
          <AnimatedComponent animationType="fade-up" dataAosDuration="700" >
            High Quality <br /> Ceramics Products
            </AnimatedComponent>
          </h1>
            <AnimatedComponent animationType="fade-up" dataAosDuration="1000" >
          <div className="flex space-x-4  border border-gray-400">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3  text-md font-jost text-lg flex items-center space-x-2">
              <Link to="about" smooth={true} duration={500}>Read More</Link>
              <span>→</span>
            </button>
            <button className=" hover:bg-gray-100 text-gray-400 px-6 py-3   font-jost text-lg flex items-center space-x-2">
           <Link to="contacts" smooth={true} duration={500}>Get in Touch</Link>
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
