import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoPlaySkipForwardOutline } from "react-icons/io5";

const projects = [
  {
    id: 1,
    category: "porcelain",
    title: <IoPlaySkipForwardOutline size={40} />, // You can adjust the icon size here
    video: ["/assets/videos/tv1.mp4?url"],
    poster: "/assets/images/poster/poster1.jpg"
  },
  {
    id: 5,
    category: "ceramics",
    title: <IoPlaySkipForwardOutline size={40} />,
    video: ["/assets/videos/tv5.MP4?url"],
    poster: "/assets/images/poster/poster2.jpg"
  },
  {
    id: 2,
    category: "ceramics",
    title: <IoPlaySkipForwardOutline size={40} />,
    video: ["/assets/videos/tv2.mp4?url"],
    poster: "/assets/images/poster/poster5.jpg"
  },
  {
    id: 3,
    category: "granit",
    title: <IoPlaySkipForwardOutline size={40} />,
    video: ["/assets/videos/tv3.MP4?url"],
    poster: "/assets/images/poster/poster4.jpg"
  },
  {
    id: 4,
    category: "porcelain",
    title: <IoPlaySkipForwardOutline size={40} />,
    video: ["/assets/videos/tv4.MP4?url"],
    poster: "/assets/images/poster/poster3.jpg"
  },
 
];

const Video = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setSelectedVideo(project.video[0]);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedVideo(null);
  };

  return (
    <div className="py-24 font-jost">
      {/* Top video Section */}
      <section className="navigation">
        <div className="relative">
          <img
            src="/assets/images/gallery/bgVideo.webp"
            alt="background"
            className="object-cover h-[500px] w-full"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-white/80 via-transparent to-transparent">
           
            <ul className="flex justify-center space-x-2 text-gray-300 mt-4  p-2 px-5">
              <li>
                <Link
                  to="/"
                  className="text-white text-xl font-jost font-medium"
                >
                  Home
                </Link>
              </li>
              <li className="text-white text-xl font-jost font-medium">
                - - Video
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className=" w-full text-center py-10">
        <h1 className="text-2xl text-slate-400 py-3 pb-5">[ our Video ]</h1>
        <p className="text-4xl lg:text-5xl text-gray-600 font-medium" >Some of Our Works and <br/> Case Studies for Clients</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  border-sky-200 px-4 mt-10 lg:mt-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden  border-2 border-white cursor-pointer"
            onClick={() => openModal(project)}
          >
            {/* Video Thumbnail */}
            <video
            poster={project.poster}
              src={project.video[0]}
              className="w-full h-auto  rounded-sm relative"
              muted
              playsInline
            />
            {/* bo away aw bg black la sarw xwar video kanan dar nakwe am dw div */}
            {/* <div className="bg-white z-20 absolute top-0 h-32 w-full"></div>
            <div className="bg-white z-20 absolute bottom-0 h-32 w-full"></div> */}
            {/* Overlay with Play Icon */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="bg-black bg-opacity-40 w-full h-full absolute top-0 left-0"></div>
              <div className="relative text-white">{project.title}</div>
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
