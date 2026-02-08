import React from "react";
import { motion } from "framer-motion";
import { PenTool, LayoutTemplate, MousePointerClick, ArrowRight } from "lucide-react";

const UIUXSection = () => {
  const features = [
    {
      title: "Research-based design",
      icon: <PenTool className="w-6 h-6 text-pink-600" />,
      description: "Deep user research to ensure every pixel serves a purpose."
    },
    {
      title: "Wireframes & prototypes",
      icon: <LayoutTemplate className="w-6 h-6 text-rose-600" />,
      description: "Visualize the user journey before writing a single line of code."
    },
    {
      title: "Clean, conversion-focused interfaces",
      icon: <MousePointerClick className="w-6 h-6 text-fuchsia-600" />,
      description: "Aesthetics that don't just look good, but drive user action."
    }
  ];

  return (
    <section className="bg-white py-24 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Section (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image with Border/Shadow */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-gray-100">
              {/* Overlay removed for cleaner white look */}
              {/* <div className="absolute inset-0 bg-pink-500/10 mix-blend-overlay z-10"></div> */}
              
              <img
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
                alt="UI/UX Wireframing and Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge (Bottom Right) */}
              <div className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur-md border border-gray-200 px-4 py-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-pink-100">
                    <PenTool className="w-4 h-4 text-pink-600" />
                  </div>
                  <div>
                    <span className="block text-gray-500 text-[10px] uppercase tracking-wider">Design Status</span>
                    <span className="text-gray-900 text-sm font-bold">Pixel Perfect</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Background Blur */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-pink-100 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Text Content (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Section Tag */}
            <span className="block text-pink-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Creative Strategy
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              UI / UX <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-500">
                Design
              </span>
            </h2>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-1 p-3 rounded-xl bg-pink-50 border border-pink-100 group-hover:bg-pink-100 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-pink-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UIUXSection;