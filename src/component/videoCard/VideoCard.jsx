import React, { useState } from "react";
import { FiPlay } from "react-icons/fi";

const VideoCard = ({ number, title, description, videoSrc, poster }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Video Card */}
      <div className="relative overflow-hidden cursor-pointer brightness-90 hover:brightness-110 duration-300 ease-out w-full lg:w-[400px] lg:h-[550px]">
        <img
          src={poster}
          loading="lazy"
          alt={`${title} poster`}
          className="w-full h-full object-cover"
        />
        <div className="absolute bg-gradient-to-t via-transparent from-black/70 to-transparent inset-0"></div>
        <div className="absolute bottom-4 ltr:left-4 rtl:right-4 text-white w-full">
          <h3 className="text-3xl lg:text-4xl font-bold">{number}</h3>
          <p className="text-xs lg:text-sm text-gray-300">{description}</p>
          <h2 className="text-xl lg:text-2xl font-bold">{title}</h2>
        </div>
        <div
          className="absolute inset-0 flex justify-center items-center text-white text-6xl"
          onClick={handlePlayClick}
        >
          <FiPlay className="hover:scale-110 transition duration-300" />
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative bg-black rounded shadow-lg overflow-hidden max-w-3xl w-full">
            {/* Video */}
            <video
              loading="lazy"
              preload="none"
              controls
              autoPlay
              className="w-full max-h-[80vh] rounded"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-800 rounded-full w-8 h-8 flex items-center justify-center text-lg"
              onClick={handleCloseModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
