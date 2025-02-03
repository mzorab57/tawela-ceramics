import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoPlaySkipForwardOutline } from "react-icons/io5";

const projects = [
  {
    id: 1,
    category: "porcelain",
    title: <IoPlaySkipForwardOutline size={40} />, // You can adjust the icon size here
    image: ["/assets/videos/tv1.mp4?url"],
  },
  {
    id: 2,
    category: "ceramics",
    title: <IoPlaySkipForwardOutline size={40} />,
    image: ["/assets/videos/tv2.mp4?url"],
  },
  {
    id: 3,
    category: "granit",
    title: <IoPlaySkipForwardOutline size={40} />,
    image: ["/assets/videos/tv3.MP4?url"],
  },
  {
    id: 4,
    category: "porcelain",
    title: <IoPlaySkipForwardOutline size={40} />,
    image: ["/assets/videos/tv1.mp4?url"],
  },
  {
    id: 5,
    category: "ceramics",
    title: <IoPlaySkipForwardOutline size={40} />,
    image: ["/assets/videos/tv2.mp4?url"],
  },
  {
    id: 6,
    category: "granit",
    title: <IoPlaySkipForwardOutline size={40} />,
    image: ["/assets/videos/tv3.MP4?url"],
  },
];

const Video = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setSelectedVideo(project.image[0]);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedVideo(null);
  };

 

  return (
    <div className="py-24 font-jost">
      {/* Top Image Section */}
      <section className="navigation">
        <div className="relative">
          <img
            src="/assets/images/gallery/g(5).JPG?url"
            alt="background"
            className="object-cover h-[500px] w-full"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-white via-transparent to-transparent">
            <h2 className="text-3xl lg:text-4xl text-white font-jost">
              Our Project
            </h2>
            <ul className="flex justify-center space-x-2 text-gray-300 mt-4">
              <li>
                <Link
                  to="/"
                  className="text-yellow-500 text-xl font-jost font-medium"
                >
                  Home
                </Link>
              </li>
              <li className="text-yellow-500 text-xl font-jost font-medium">
                / Gallery
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border-sky-200 px-4 mt-10 lg:mt-32">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden shadow-xl border-2 border-white cursor-pointer"
            onClick={() => openModal(project)}
          >
            {/* Video Thumbnail */}
            <video
              src={project.image[0]}
              className="w-full h-auto object-cover rounded-sm"
              muted
              playsInline
            />
            {/* Overlay with Play Icon */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="bg-black bg-opacity-40 w-full h-full absolute top-0 left-0"></div>
              <div className="relative text-white">
                {project.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
        <div className="relative bg-black rounded shadow-lg overflow-hidden max-w-3xl w-full">
          {/* Video */}
          <video
            loading="lazy"
            preload="none"
            controls
            autoPlay
            className="w-full max-h-[80vh] rounded"
          >
            <source src={selectedVideo} type="video/mp4" />
          </video>

          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-800 rounded-full w-8 h-8 flex items-center justify-center text-lg"
            onClick={closeModal}
          >
            X
          </button>
        </div>
      </div>
      )}
    </div>
  );
};

export default Video;
