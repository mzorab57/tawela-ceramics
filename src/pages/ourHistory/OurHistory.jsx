import React from 'react'

import AboutTop from '../../component/aboutTop/AboutTop';


const OurHistory = () => {

    const timelineData = [
        {
            title: "Marble flooring",
            description:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through",
            image:
              
              "https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/11-e1668051633286.jpg",
            year: "2003",
          },
      
        {
          title: "industrial flooring",
          description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through",
          image:
            "https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/3-1.jpg",
          year: "2007",
        },
        {
            title: "laminate flooring",
            description:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through",
            image:
              "https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/9.jpg",
            year: "2013",
          },
        {
            title: "oak flooring",
            description:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through",
            image:
            "https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/10.jpg",
          year: "2018",
        },
        {
            title: "wooden flooring",
            description:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through",
            image:
        
            
            "https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/7-1.jpg",
          year: "2023",
        },
      ];

  return (
    <>
    <AboutTop img='/assets/images/about/history2.webp' />
    <div className="bg-white py-40">
      <div className="container mx-auto relative ">
        {/* Vertical timeline bar */}
        <span className="absolute left-1/2 hidden lg:block top-0 h-full w-1 bg-yellow-500 transform -translate-x-1/2"></span>

        <div className="space-y-12">
          {timelineData.map((item, index) => {
            // Determine layout order: even => text left, image right; odd => reverse
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative w-full flex flex-col lg:flex-row gap-x-44 items-center ${
                  !isEven && "lg:flex-row-reverse"
                }`}
              >
                {/* Content Section with fixed height */}
                <div className="lg:w-1/2 p-4 flex items-center justify-center py-3  h-80">
                  <div className="bg-slate-50 p-6 border-b-yellow-500 border-b-4  h-full w-full flex flex-col justify-center">
                    <h4 className="text-3xl font-bold mb-2 capitalize ">{item.title}</h4>
                    <p className="text-gray-600 text-lg leading-9 line-clamp-5">{item.description}</p>
                  </div>
                </div>
                {/* Image Section with fixed height */}
                <div className="lg:w-1/2 w-full p-4 flex items-center justify-center h-80">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover  shadow"
                  />
                </div>
                {/* Year Icon (centered on vertical bar) */}
                <div className="absolute text-xl left-1/2 top-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 bg-gray-800 border-4 border-yellow-500 text-white font-jost  rounded-full size-20 flex items-center justify-center shadow-xl">
                  {item.year}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default OurHistory
