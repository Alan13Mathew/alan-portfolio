import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  CodeXml,
  Palette,
  Smartphone,
  Database,
  Coffee,
  Music,
} from "lucide-react";

const About = () => {
  const skills = [
    {
      name: "Frontend Development",
      icon: CodeXml,
      level: 60,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Programming",
      icon: Code,
      level: 70,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Backend Development",
      icon: Database,
      level: 60,
      color: "from-orange-500 to-red-500",
    },
  ];

  const interests = [
    { name: "Coffee", icon: Coffee },
    { name: "Music", icon: Music },
    { name: "Design", icon: Palette },
    { name: "Coding", icon: Code },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate developer with a love for creating beautiful and
              functional digital experiences
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  My Story
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    I'm a passionate B.tech CSE graduate. My journey began with
                    a curiosity about how websites work, which quickly evolved
                    into a deep love for coding and design.
                  </p>
                  <p>
                    Computer Science Engineer with expertise in web development,
                    database management, and programming. Demonstrated success
                    in creating robust applications using Angular and React.
                    Strong foundation in full-stack development with a focus on
                    modern technologies and ability to learn anything quickly
                    with a passion for programming.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and creating
                    interfaces that are not just functional, but delightful to
                    use.
                  </p>
                </div>
              </div>

              {/* Interests */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  When I'm Not Coding
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map(({ name, icon: Icon }) => (
                    <motion.div
                      key={name}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <Icon
                        size={20}
                        className="text-purple-600 dark:text-purple-400"
                      />
                      <span className="text-gray-700 dark:text-gray-300">
                        {name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Skills & Expertise
                </h2>
                <div className="space-y-6">
                  {skills.map(({ name, icon: Icon, level, color }) => (
                    <div key={name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Icon
                            size={20}
                            className="text-gray-600 dark:text-gray-400"
                          />
                          <span className="font-medium text-gray-900 dark:text-white">
                            {name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`h-2 rounded-full bg-gradient-to-r ${color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Technologies I Work With
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "React",
                    "Angular",
                    "Node.js",
                    "Python",
                    "java",
                    "TypeScript",
                    "MongoDB",
                    "PostgreSQL",
                    "Git",
                  ].map((tech) => (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 px-3 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { label: "Projects Completed", value: "5+" },
                  { label: "Lines of Code", value: "50K+" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2"
                    >
                      {value}
                    </motion.div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
