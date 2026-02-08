import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import  logo  from "../assets/logo.png"
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    { name: "Home", path: "/", type: "link" },
    { name: "About", path: "/about", type: "link" },
    {
      name: "Services",
      path: "/services",
      type: "dropdown",
      subItems: [
        { name: "Web Applications", path: "/services/web-development" },
        { name: "Mobile Applications", path: "/services/mobile-apps" },
        { name: "AI & Intelligent Systems", path: "/services/ai-systems" },
        { name: "Business Process Automation", path: "/services/automation" },
        { name: "UI/UX DESIGN", path: "/services/ui" },
      ],
    },
    // Products Link (Direct Link now)
    { name: "Products", path: "/products", type: "link" },
    { name: "Contact", path: "/contact", type: "link" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1e2a45] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 flex items-center justify-center">
              <motion.div
                className="absolute w-2 h-2 bg-blue-400 rounded-full top-0 left-0"
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <motion.div
                className="absolute w-2 h-2 bg-blue-300 rounded-full top-2 left-3"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, delay: 0.1 }}
              />
              <motion.div
                className="absolute w-2 h-2 bg-white rounded-full top-1 right-1"
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, delay: 0.2 }}
              />
              <svg className="absolute top-[-5px] left-2 w-10 h-6 opacity-50" viewBox="0 0 50 20">
                <path d="M0,20 Q25,0 50,20" fill="none" stroke="white" strokeWidth="1" />
              </svg>
            </div>
            

            <div className="flex items-center leading-none">
              <img src= {logo} className="h-12" alt= "" />
              <div className="text-2xl tracking-wide">
                <span className="font-bold text-white">KRIMITAS</span>
               
              </div>
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.type === "link" ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                        isActive || item.name === "Home"
                          ? "bg-[#334155] text-white"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <div className="relative group">
                    <Link 
                      to={item.path}
                      className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl overflow-hidden py-2 z-50"
                        >
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                          <div className="flex flex-col">
                            {item.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.path}
                                className="px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors flex items-center justify-between group/item"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button - Get Started (Updated link if needed, currently points to contact/start page) */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact" // Changed to contact for better flow, or keep /get-started if that page exists
              className="px-6 py-2.5 rounded-full border border-white/30 text-white font-medium hover:bg-white hover:text-[#1e2a45] transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#162036] border-t border-gray-700"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.type === "link" ? (
                    <Link
                      to={item.path}
                      className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="px-3 py-3">
                      <Link 
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block font-medium text-white mb-2 hover:text-blue-300"
                      >
                        {item.name}
                      </Link>
                      
                      <div className="pl-4 space-y-2 border-l border-gray-600">
                        {item.subItems.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            to={sub.path}
                            className="block text-sm text-gray-400 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 rounded-full bg-white text-[#1e2a45] font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;