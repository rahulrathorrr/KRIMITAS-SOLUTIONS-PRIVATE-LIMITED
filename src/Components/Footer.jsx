import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const serviceLinks = [
    { name: "Web Applications", path: "/services/web-development" },
    { name: "Mobile Applications", path: "/services/mobile-apps" },
    { name: "AI & Intelligent Systems", path: "/services/ai-systems" },
    { name: "Business Process Automation", path: "/services/automation" },
    { name: "UI/UX DESIGN", path: "/services/ui" },
  ];

  return (
    <footer className="bg-[#1e2a45] border-t border-white/10 pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔥 Top Grid - 3 Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">

          {/* 1️⃣ Company Info */}
          <div>
            <Link to="/" className="inline-block">
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight mb-4">
                KRIMITAS <br />
                <span className="text-blue-400">SOLUTIONS</span> <br />
                <span className="text-lg font-semibold text-gray-400 tracking-widest uppercase">
                  Private Limited
                </span>
              </h1>
            </Link>

            <p className="text-gray-400 mt-4 max-w-sm leading-relaxed">
              Empowering businesses with cutting-edge technology and custom software solutions.
            </p>
          </div>

          {/* 2️⃣ Services */}
          <div>
            <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-6">
              Our Services
            </h3>

            <ul className="space-y-4">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-medium"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3️⃣ Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-6">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-400 text-sm">
              <p>
                📧 Email:{" "}
                <a
                  href="mailto:support@krimitassolutions.in"
                  className="hover:text-blue-400 transition-colors"
                >
                  support@krimitassolutions.in
                </a>
              </p>

              <p className="leading-relaxed">
                📍 KRIMITAS SOLUTIONS PRIVATE LIMITED <br />
                Ward No-7, Anandpuri, Bibiganj, <br />
                M.I.T., Muzaffarpur, Mushahari, <br />
                Bihar, India - 842003
              </p>
            </div>
          </div>

        </div>

        {/* 🔻 Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; 2026{" "}
            <span className="font-semibold text-white">
              KRIMITAS SOLUTIONS PRIVATE LIMITED
            </span>. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
