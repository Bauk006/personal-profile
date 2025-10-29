import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import Fiterse from "../assets/images/fiterse.jpg";
import Feelgo from "../assets/images/feelgo.jpg";
import Tailwind from "../assets/images/tailwind.jpg";

// IMPORT FOTO PORTOFOLIO

const projects = [
  {
    id: 1,
    title: "Fiterse",
    category: "UI/UX Design",
    image: Fiterse,
    link: "https://www.figma.com/proto/RC1xKVY7nREjBMDQGjoFfP/Prototype-Fiterse?page-id=&node-id=1-230&t=T57SqQzp3k7iqcGb-1",
  },
  {
    id: 2,
    title: "FeelGo",
    category: "UI/UX Design",
    image: Feelgo,
    link: "https://www.figma.com/proto/yrWIZ7Z36I4O2SucXMqyEJ/PROTOTYPE-Buat-Calon-user?node-id=6159-8523&p=f&t=wxEz0Rh6AYNmr7o7-1&scaling=scale-down&content-scaling=fixed&page-id=6104%3A2631&starting-point-node-id=6159%3A8529&show-proto-sidebar=1",
  },
  {
    id: 3,
    title: "Website Tailwind CSS",
    category: "Frontend",
    image: Tailwind,
    link: "https://github.com/Bauk006/personal-profile.git",
  },
];

const categories = ["All", "Frontend", "UI/UX Design"];

function ProjectCard({ title, category, image, link }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-white border border-border-gray transform hover:scale-[1.02] transition-transform duration-300">
      {/* Tampilkan gambar dari path relatif */}
      <div className="h-60 w-full overflow-hidden">
        {/* Tampilkan gambar asli menggunakan path relatif (image) */}
        <img
          src={process.env.PUBLIC_URL + image} // Menggunakan path relatif dari folder public
          alt={`Portfolio Project: ${title}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <span className="text-sm font-semibold text-primary-dark mb-1 block">
          {category}
        </span>
        <h3 className="text-xl font-bold text-dark-blue mb-4">{title}</h3>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-grayish-blue hover:text-primary-green transition-colors font-semibold"
        >
          View Project <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
}

function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#F9F9FB] px-16">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[30px] font-bold text-dark-blue mb-4">
            My Recent Work
          </h2>
          <p className="text-lg text-grayish-blue max-w-2xl mx-auto">
            Selected projects that showcase my passion for design and coding.
          </p>
        </div>

        {/* Filter/Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-base font-semibold transition-all duration-200 
                ${
                  activeCategory === cat
                    ? "bg-btn-gradient text-white shadow-lg"
                    : "bg-white text-grayish-blue border border-border-gray hover:border-cream"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
