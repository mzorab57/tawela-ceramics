import React from 'react';

const AboutColor = () => (
  <div className="container mx-auto px-4 py-12 max-w-[1650px] font-jost">
    <div className="flex flex-col md:flex-row gap-20 items-center">
      {/* Left Column – Text Content */}
      <div className="w-full md:w-1/2 md:pr-8">
        <h5 className="mt-2 lg:text-4xl text-3xl font-medium text-gray-800">
          Choose your color what you want for your home
        </h5>
        <p className="mt-4 text-gray-500 lg:text-2xl">
          Consider the existing elements in the room: When choosing colors for a room,
          consider the existing elements such as furniture, artwork, and flooring, and
          choose colors that complement these elements.
        </p>
        <hr className="my-6 border-t-2 border-orange-300 w-16" />

        <div className="grid grid-cols-2 gap-8">
          {/* List Column */}
          {[
            [
              'More expensive',
              'red alicante marble',
              'less maintenance',
            ],
            [
              'elegant vein patterns',
              'heat-resistant',
              'stargate gold marble',
            ],
          ].map((list, i) => (
            <ul key={i} className="space-y-3">
              {list.map((item, j) => (
                <li key={j} className="flex items-center">
                  <svg
                    className="w-3 h-3 text-orange-300 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Right Column – Image */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/about-2.png"
          alt="About Us"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  </div>
);

export default AboutColor;
