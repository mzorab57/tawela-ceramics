import React, { useState } from "react";
import CategoryFilter from "../../component/categoryFilter/CategoryFilter ";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    category: "porcelain",
    title: "Tawela Ceramics",
    image: {
      webp: "/assets/images/gallery/g(1).webp",
      fallback: "/assets/images/gallery/g(1).JPG",
      alt: "Porcelain Showcase 13",
    },
  },
  {
    id: 2,
    category: "porcelain",
    title: "Tawela Ceramics",
    image: {
      webp: "/assets/images/gallery/g(2).webp",
      fallback: "/assets/images/gallery/g(2).JPG",
      alt: "Porcelain Showcase 13",
    },
  },
  {
    id: 3,
    category: "porcelain",
    title: "Tawela Ceramics",
    image: {
      webp: "/assets/images/gallery/g(3).webp",
      fallback: "/assets/images/gallery/g(3).JPG",
      alt: "Porcelain Showcase 13",
    },
  },
  {
    id: 4,
    category: "ceramics",
    title: "Tawela Ceramics",
    image: {
      webp: "/assets/images/gallery/g(4).webp",
      fallback: "/assets/images/gallery/g(4).JPG",
      alt: "Ceramic Showcase 13",
    },
  },
  {
    id: 5,
    category: "granit",
    title: "Tawela Ceramics",
    image: {
      webp: "/assets/images/gallery/g(5).webp",
      fallback: "/assets/images/gallery/g(5).JPG",
      alt: "Granite Showcase 13",
    },
  },
  {
    id: 6,
    category: "granite", // This will be filtered out when selecting ceramics, granit, or porcelain
    title: "Tawela Ceramics",
    image: {
      webp: "/assets/images/gallery/g(6).webp",
      fallback: "/assets/images/gallery/g(6).JPG",
      alt: "granite Showcase 13",
    },
  },
  {
    id: 7,
    category: "granite", // This will be filtered out when selecting ceramics, granit, or porcelain
    title: "Tawela Ceramics",
    image: {
      webp: "/assets/images/gallery/g(7).webp",
      fallback: "/assets/images/gallery/g(7).JPG",
      alt: "granite Showcase 13",
    },
  },
  {
    id: 8,
    category: "granite", // This will be filtered out when selecting ceramics, granit, or porcelain
    title: "Tawela Ceramics",
    image: {
      webp: "/assets/images/gallery/g(8).webp",
      fallback: "/assets/images/gallery/g(8).JPG",
      alt: "granite Showcase 13",
    },
  },
  {
    id: 9,
    category: "granite", // This will be filtered out when selecting ceramics, granit, or porcelain
    title: "Tawela Ceramics",
    image: {
      webp: "/assets/images/gallery/g(9).webp",
      fallback: "/assets/images/gallery/g(9).JPG",
      alt: "granite Showcase 13",
    },
  },
  {
    id: 10,
    category: "ceramics", // This will be filtered out when selecting ceramics, granit, or porcelain
    title: "Tawela Ceramics",
    image: {
      webp: "/assets/images/gallery/g(10).webp",
      fallback: "/assets/images/gallery/g(10).JPG",
      alt: "ceramics Showcase 13",
    },
  },
  {
    id: 11,
    category: "ceramics", // This will be filtered out when selecting ceramics, granit, or porcelain
    title: "Tawela Ceramics",
    image: {
      webp: "/assets/images/gallery/g(11).webp",
      fallback: "/assets/images/gallery/g(11).JPG",
      alt: "ceramics Showcase 13",
    },
  },
  {
    id: 12,
    category: "ceramics", // This will be filtered out when selecting ceramics, granit, or porcelain
    title: "Tawela Ceramics",
    image: {
      webp: "/assets/images/gallery/g(12).webp",
      fallback: "/assets/images/gallery/g(12).JPG",
      alt: "ceramics Showcase 13",
    },
  },
  {
    id: 13,
    category: "ceramics", // This will be filtered out when selecting ceramics, granit, or porcelain
    title: "Tawela Ceramics",
    image: {
      webp: "/assets/images/gallery/g(13).webp",
      fallback: "/assets/images/gallery/g(13).JPG",
      alt: "ceramics Showcase 13",
    },
  },
  {
    id: 14,
    category: "ceramics", // This will be filtered out when selecting ceramics, granit, or porcelain
    title: "Tawela Ceramics",
    image: {
      webp: "/assets/images/gallery/g(14).webp",
      fallback: "/assets/images/gallery/g(14).JPG",
      alt: "ceramics Showcase 13",
    },
  },
  {
    id: 15,
    category: "ceramics", // This will be filtered out when selecting ceramics, granit, or porcelain
    title: "Tawela Ceramics",
    image: {
      webp: "/assets/images/gallery/g(15).webp",
      fallback: "/assets/images/gallery/g(15).JPG",
      alt: "ceramics Showcase 13",
    },
  },
  {
    id: 16,
    category: "ceramics", // This will be filtered out when selecting ceramics, granit, or porcelain
    title: "Tawela Ceramics",
    image: {
      webp: "/assets/images/gallery/g(16).webp",
      fallback: "/assets/images/gallery/g(16).JPG",
      alt: "ceramics Showcase 13",
    },
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Now only projects in ceramics, granit, and porcelain will be filtered
  // Projects with category "ceramics" will still show under "all"
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
      // For "ceramics" (which used to be Bsrawa), we now return an empty string.
      // You could also choose to return a different label if desired.
      default:
        return "";
    }
  };

  return (
    <div className="py-24">
      {/* Top Image Section with WebP */}
      <section className="navigation">
        <div className="relative">
          <picture>
            <source
              srcSet="/assets/images/gallery/bgProtfolio.webp"
              type="image/webp"
            />
            <img
              src="/assets/images/gallery/bgProtfolio.jpg"
              alt="Portfolio Background"
              className="object-cover h-[500px] w-full"
              loading="eager"
              decoding="async"
            />
          </picture>
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
        <p className="text-4xl lg:text-5xl text-gray-600 font-medium">
          Some of Our Works and <br /> Case Studies for Clients
        </p>
      </div>
      {/* Filter Options */}
      <CategoryFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      {/* Projects Grid with Optimized Images */}
      <div className="font-jost grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border-sky-200">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="relative group overflow-hidden shadow-xl border-2 border-white"
            onClick={() => openModal(project)}
          >
            <picture>
              <source srcSet={project.image.webp} type="image/webp" />
              <img
                src={project.image.fallback}
                alt={project.image.alt || project.title}
                className="w-full h-[620px] object-cover border-2 border-teal-500 rounded-sm"
                loading={index < 6 ? "eager" : "lazy"}
                decoding="async"
                width={400}
                height={300}
              />
            </picture>
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

      {/* Modal with Optimized Image */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center overflow-auto">
          <div className="relative bg-white/80 p-4 rounded w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%]">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white rounded-full p-2 text-black"
              aria-label="Close modal"
            >
              &times;
            </button>
            <picture>
              <source srcSet={selectedProject.image.webp} type="image/webp" />
              <img
                src={selectedProject.image.fallback}
                alt={selectedProject.image.alt || selectedProject.title}
                className="w-full h-auto max-h-[90vh] object-cover rounded"
                loading="eager"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
