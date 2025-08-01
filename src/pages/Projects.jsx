import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Filter } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "John Conway's Game of Life Simulation",
      description:
        "This project is an interactive simulation of John Conway’s Game of Life, built using Angular. It visualizes a cellular automaton.",
      image:
        "https://imgs.search.brave.com/LpsU14R4tQWCKWD2pWnST72FOVB_yWIg61S6Fp8_LpE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzY0L1RyZWZvaWxf/a25vdF9jb253YXlz/X2dhbWVfb2ZfbGlm/ZS5naWY.gif",
      category: "fullstack",
      technologies: ["Angular", "Angular Material", "Cellular Automaton"],
      liveUrl: "#",
      githubUrl: "https://github.com/Alan13Mathew/game-of-life",
    },

    {
      id: 2,
      title: "Gemini UI Chat Website",
      description:
        "A simple front-end clone of Google's Gemini AI interface built using React.js. This project replicates the Gemini UI.",
      image: "https://media1.tenor.com/m/8XNzAxRRcpUAAAAd/gemini-gemini-ai.gif",
      category: "frontend",
      technologies: ["React", "CSS3", "Gemini API"],
      liveUrl: "#",
      githubUrl: "https://github.com/Alan13Mathew/gemini-clone",
    },
    {
      id: 3,
      title: "Live Web-Compass Website",
      description:
        "A sleek and accurate compass built with React, TypeScript, and Tailwind CSS, that uses device orientation to show directions.",
      image: "https://media.tenor.com/9hnfDOBiczYAAAA1/compass.webp",
      category: "frontend",
      technologies: ["React", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl:
        "https://github.com/Alan13Mathew/live-compass-using-REACTv19-Tailwindv4",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing my work and skills. Built with React and styled with Tailwind CSS.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      category: "frontend",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Personal Expense tracker",
      description:
        "This project is a practice project for me to get familiarity with most of the concepts in angular.",
      image: "https://media.tenor.com/dImi4w4Vvz4AAAAM/stock-market-crash.gif",
      category: "fullstack",
      technologies: ["Angular", "Nodejs", "Angular Material"],
      liveUrl: "#",
      githubUrl: "https://github.com/Alan13Mathew/MockBankApp",
    },
    {
      id: 6,
      title: "Hotel Booking -airbnb alike",
      description:
        "This project is a practice project for me to get familiarity with most of the concepts in React",
      image: "https://media.tenor.com/rsSIoLjds9UAAAAM/airbnb-door.gif",
      category: "fullstack",
      technologies: ["React", "Node.js", "TailwindCss"],
      liveUrl: "#",
      githubUrl: "https://github.com/Alan13Mathew/travel-app",
    },
    {
      id: 7,
      title: "Employee Review Website",
      description:
        "Website allows employees to review their colleagues and allows employers to create and assess the reviews.",
      image:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3VvbGNqdTE0MWo1Z3NyeDZjYjRkNHNlZDIxNW8wMDlqZHF0cTc4aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/q4J22IRMrfnwCmGEnH/giphy.webp",
      category: "fullstack",
      technologies: ["Angular", "Node.js", "Angular Material"],
      liveUrl: "#",
      githubUrl: "https://github.com/Alan13Mathew/employee-review-frontend",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "fullstack", name: "Full Stack" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for
              development
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700"
                }`}
              >
                <Filter size={16} />
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-grey rounded-full text-gray-900  transition-colors"
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 text-green-800 dark:text-green-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-green-600 dark:hover:border-green-400 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 text-sm font-medium"
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
