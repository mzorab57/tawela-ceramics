import React, { useState } from "react";
import CategoryFilter from "../../component/categoryFilter/CategoryFilter ";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 16,
    category: "porcelain",
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(13).JPG?url"],
  },
  {
    id: 17,
    category: "ceramics",
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(14).JPG?url"],
  },
  {
    id: 18,
    category: "granit",
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(15).JPG?url"],
  },
  {
    id: 19,
    category: "porcelain",
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(16).JPG?url"],
  },
  {
    id: 2,
    category: "ceramics", // remains the same key for filtering
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(2).JPG?url"],
  },

  {
    id: 4,
    category: "porcelain", // corrected spelling
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(8).JPG?url"],
  },
  {
    id: 5,
    category: "granit",
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(6).JPG?url"],
  },
  {
    id: 6,
    category: "ceramics",
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(5).JPG?url"],
  },
  {
    id: 7,
    category: "granit",
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(1).JPG?url"],
  },
  {
    id: 8,
    category: "porcelain",
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(3).JPG?url"],
  },
  {
    id: 9,
    category: "granit",
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(4).JPG?url"],
  },
  {
    id: 10,
    category: "granit",
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(7).JPG?url"],
  },
  {
    id: 11,
    category: "ceramics",
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(8).JPG?url"],
  },
  {
    id: 12,
    category: "granit",
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(9).JPG?url"],
  },
  {
    id: 13,
    category: "granit",
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(10).JPG?url"],
  },
  {
    id: 14,
    category: "porcelain",
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(11).JPG?url"],
  },
  {
    id: 15,
    category: "granit",
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(12).JPG?url"],
  },
  {
    id: 16,
    category: "porcelain",
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(13).JPG?url"],
  },
  {
    id: 17,
    category: "granit",
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(14).JPG?url"],
  },
  {
    id: 18,
    category: "ceramics",
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(15).JPG?url"],
  },
  {
    id: 19,
    category: "porcelain",
    title: "Tawela Ceramics",
    image: ["/assets/images/gallery/g(16).JPG?url"],
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Now only projects in ceramics, granit, and porcelain will be filtered
  // Projects with category "garden" will still show under "all"
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const openModal = (project) => {
    setSelectedProject(project);
    setSelectedImage(project.image[0]);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedImage(null);
  };

  // Helper function to return display name based on project category
  const getCategoryLabel = (category) => {
    switch (category) {
      case "ceramics":
        return "Ceramics";
      case "granit":
        return "Granite";
      case "porcelain":
        return "Porcelain";
      // For "garden" (which used to be Bsrawa), we now return an empty string.
      // You could also choose to return a different label if desired.
      default:
        return "";
    }
  };

  return (
    <div className="py-24 ">
      {/* Top Image Section */}
      <section className="navigation">
        <div className="relative">
          <img
            src="/assets/images/gallery/bgProtfolio.webp"
            alt="background"
            className="object-cover h-[500px] w-full"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-white via-transparent to-transparent">
          
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
                - - Portfolio
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className=" w-full text-center py-10">
        <h1 className="text-2xl text-slate-400 py-3">[ our portfolio ]</h1>
        <p className="text-4xl lg:text-5xl text-gray-600 font-medium" >Some of Our Works and <br/> Case Studies for Clients</p>
      </div>
      {/* Filter Options */}
      <CategoryFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      {/* Projects Grid */}
      <div className="font-jost grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border-sky-200">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden shadow-xl border-2 border-white"
            onClick={() => openModal(project)}
          >
            <img
              src={project.image[0]}
              alt={project.title}
              className="w-full h-auto object-cover rounded-sm"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
              <h4 className="text-white text-lg font-bold">{project.title}</h4>
              {/* Only show a category label if one exists */}
              {getCategoryLabel(project.category) && (
                <p className="text-white italic">
                  {getCategoryLabel(project.category)}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center overflow-auto">
          <div className="relative bg-white/80 p-4 rounded w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%]">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 text-black font-bold text-2xl"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt={selectedProject.title}
              className="w-full h-auto max-h-[90vh] object-cover rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
