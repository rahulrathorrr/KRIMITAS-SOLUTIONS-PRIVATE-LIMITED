import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Database, Layout, ArrowRight } from "lucide-react";

const WebAppsSection = () => {
  const features = [
    {
      title: "Secure backend architecture",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      description: "Enterprise-grade security protocols to protect your data integrity."
    },
    {
      title: "Scalable database design",
      icon: <Database className="w-6 h-6 text-purple-600" />,
      description: "Optimized structures that grow seamlessly with your business needs."
    },
    {
      title: "Responsive and accessible interfaces",
      icon: <Layout className="w-6 h-6 text-teal-600" />,
      description: "Pixel-perfect designs that work beautifully across all devices."
    }
  ];

  return (
    <section className="bg-white py-24 overflow-hidden">
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
              {/* Optional: Slight overlay if needed, removed for cleaner look on white */}
              {/* <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay z-10"></div> */}
              
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                alt="Web Application Development"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge (Bottom Right) */}
              <div className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur-md border border-gray-200 px-4 py-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-gray-800 text-sm font-medium">System Online</span>
                </div>
              </div>
            </div>

            {/* Decorative Background Blur - Adjusted for Light Theme */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Text Content (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Section Tag */}
            <span className="block text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Technology Services
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Web <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                Applications
              </span>
            </h2>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-1 p-3 rounded-xl bg-blue-50 border border-blue-100 group-hover:bg-blue-100 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
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

export default WebAppsSection;