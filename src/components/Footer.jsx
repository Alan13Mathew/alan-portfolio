import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Phone,
  MapPin,
  ArrowUp,
  Heart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import myImage from "../assets/alan.jpg";
const Footer = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-0.5 mr-3">
                    <img
                      src={myImage}
                      alt="Alan's profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Alan C Mathew
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 max-w-md">
                  Full Stack Developer & Tech Enthusiast passionate about
                  creating innovative solutions and building amazing digital
                  experiences.
                </p>
                <div className="flex items-center space-x-4">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/Alan13Mathew",
                      label: "GitHub",
                    },
                    {
                      icon: Linkedin,
                      href: "http://www.linkedin.com/in/alan-c-mathew-23dec",
                      label: "LinkedIn",
                    },
                    {
                      icon: Mail,
                      href: "mailto:alancmathew1@gmail.com",
                      label: "Email",
                    },
                  ].map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -2 }}
                      className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
                      aria-label={label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => navigate("/")}
                      className="text-gray-300 hover:text-white transition-colors cursor-pointer duration-300"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigate("/about")}
                      className="text-gray-300 hover:text-white transition-colors cursor-pointer duration-300"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigate("/projects")}
                      className="text-gray-300 hover:text-white transition-colors cursor-pointer duration-300"
                    >
                      Projects
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigate("/contact")}
                      className="text-gray-300 hover:text-white transition-colors cursor-pointer duration-300"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail size={16} className="text-gray-400" />
                    <a
                      href="mailto:alancmathew1@gmail.com"
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      alancmathew1@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github size={16} className="text-gray-400" />
                    <a
                      href="https://github.com/Alan13Mathew"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      Alan13Mathew
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={16} className="text-gray-400" />
                    <span className="text-gray-300">Kerala, India</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8 mt-12"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 Alan C Mathew. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a
                  href="https://drive.google.com/file/d/1Q9_Tl2jIgd0WQWxMrQsjnWLB--mGgYov/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  Download Resume
                </a>
                <div className="flex items-center space-x-2">
                  <span>Made with</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Heart size={16} className="text-red-500 fill-current" />
                  </motion.div>
                  <span>using React</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </footer>
    </>
  );
};

export default Footer;
