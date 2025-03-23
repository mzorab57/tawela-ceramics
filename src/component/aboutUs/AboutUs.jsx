import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const { t } = useTranslation(); // Destructure the translation function
  const { scrollYProgress } = useScroll();

  // Define translations for each card
  const card1TranslateY = useTransform(scrollYProgress, [0.01, 1], [1, 300]);
  const card2TranslateY = useTransform(scrollYProgress, [0.01, 1], [0.01, 800]);
  const card3TranslateY = useTransform(scrollYProgress, [0.01, 1], [1, 600]);

  return (
    <section name="about" className="relative  bg-gray-100 overflow-hidden  ">
      <div className="container mx-auto px-4 lg:flex justify-between lg:items-start py-40 max-w-[1650px]   ">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/3 mb-10  lg:mb-0 relative md:static  ">
          <h5 className="text-4xl leading-relaxed font-semibold  uppercase text-gray-800 -translate-y-5 ">
            Since 2003
          </h5>
          <h5 className="text-8xl absolute -top-20 lg:top-20 -translate-x-7  leading-relaxed font-bold  uppercase text-gray-500 opacity-5  ">
            Since
          </h5>
          <p className="text-gray-600 lg:my-5 w-full  lg:text-2xl  leading-8 ">
            Ceramic Tawella, a limited building materials trading company, has
            been operating since 2003. This company specializes in the import
            and export of all types of ceramic tiles, in all sizes and
            dimensions. It acts as an agent for many large international ceramic
            manufacturing companies.
          </p>
          <p className="text-gray-600  w-full  lg:text-2xl leading-8 ">
            The company owns the largest tile warehouse in all of Iraq,
            importing 2 million square meters of product annually. It also
            operates several modern branches and showrooms in most Iraqi cities,
            such as: Sulaymaniyah, Erbil, Kirkuk, and Mosul, where it serves
            customers.
          </p>
          <Link
            to="/about"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block translate-y-10 z-[1] text-gray-800 bg-white border px-4 py-2 uppercase tracking-wide hover:bg-yellow-500 hover:text-white transition"
          >
            About Us →
          </Link>
          {/* Background Pattern */}


          <picture>
            <source
              srcSet="/assets/images/aboutBg/about_pat.png, /assets/images/aboutBg/about_pat.png 2x, /assets/images/aboutBg/about_pat.png 3x"
              media="(min-width: 561px)"
            />
            <source
              srcSet="/assets/images/aboutBg/about_pat.png 1x, /assets/images/aboutBg/about_pat.png 2x"
              media="(max-width: 560px)"
            />
            <img
              src="/assets/images/aboutBg/about_pat.png"
              alt="Background Pattern"
              loading="lazy"
              width="800"
              height="400"
              className="absolute bottom-0 right-0 w-full lg:w-1/2 opacity-80"
            />
          </picture>

          <picture>
            <source
              srcSet="/assets/images/aboutBg/quality-work-shape-4.png, /assets/images/aboutBg/quality-work-shape-4.png 2x, /assets/images/aboutBg/quality-work-shape-4.png 3x"
              media="(min-width: 561px)"
            />
            <source
              srcSet="/assets/images/aboutBg/quality-work-shape-4.png 1x, /assets/images/aboutBg/quality-work-shape-4.png 2x"
              media="(max-width: 560px)"
            />
            <img
              src="/assets/images/aboutBg/quality-work-shape-4.png"
              alt="About Image"
              width="500"
              height="500"
              loading="lazy"
              className="absolute bottom-0 left-0 w-full lg:w-1/2 opacity-50"
            />
          </picture>
        </div>

        {/* Numbers/Stats Section */}
        <div className="flex flex-wrap lg:flex-nowrap gap-2 w-full justify-start lg:justify-end  lg:-translate-y-14 -translate-y-3">
          <div className="flex sm:flex-row flex-col my-10">
            {/* Card 1 */}
            <motion.div
              style={{ translateY: card1TranslateY }}
              className="flex flex-col items-start justify-center mt-9 lg:mt-10 border-2 border-emerald-600/50  mb-9 sm:mb-0 p-6 text-start size-52"
            >
              <h4 className="text-6xl font-bold text-gray-900 mb-4 shadow-lg ">
                52
              </h4>
              <p className="text-sm uppercase leading-snug text-gray-600">
                Awards & <br />
                Recognitions
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 15%, 100% 85%, 50% 100%, 0% 85%, 0% 15%)",
                translateY: card2TranslateY,
              }}
              className={` flex flex-col items-start justify-center border-2  pl-4 lg:mt-56  text-center w-64 h-72  bg-white shadow-lg`}
            >
              <h3 className="text-6xl font-bold text-gray-900 mb-4 shadow-lg">
                154
              </h3>
              <p className="text-sm uppercase leading-snug text-gray-600">
                Completed Projects <br className="hidden lg:block" />
                in 26+ Cities
              </p>
            </motion.div>
          </div>

          {/* Card 3 */}
          <motion.div
            style={{
              clipPath:
                "polygon(0% 0%, 100% 0%, 100% 100%, 30% 100%, 0% 75%, 0% 15%)",
              translateY: card3TranslateY,
            }}
            className="relative  h-80 overflow-y-auto lg:w-80 w-full bg-orange-400 text-white"
          >
            <h2 className="text-8xl shadow-lg font-bold text-white absolute left-5 top-1/4">
              25
            </h2>
            <div className="text-xl uppercase leading-snug absolute right-5 bottom-5 font-bold md:text-xl flex-wrap">
              Years of <br className="hidden lg:block" /> Experience
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
