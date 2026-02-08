import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Palette, Zap, ArrowRight } from "lucide-react";

const MobileAppsSection = () => {
  const features = [
    {
      title: "Android & cross-platform development",
      icon: <Smartphone className="w-6 h-6 text-purple-400" />,
      description: "Native performance with the flexibility of React Native & Flutter."
    },
    {
      title: "User-centric design",
      icon: <Palette className="w-6 h-6 text-pink-400" />,
      description: "Intuitive UI/UX that keeps users engaged and retains them longer."
    },
    {
      title: "Offline and real-time functionality",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      description: "Seamless data synchronization and instant updates, even without internet."
    }
  ];

  return (
    <section className="bg-[#1e2a45] py-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content (Left) - Order 1 on Mobile, Order 1 on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Section Tag */}
            <span className="block text-purple-400 font-semibold tracking-wider uppercase text-sm mb-2">
              Mobile Solutions
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Mobile <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Applications
              </span>
            </h2>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-1 p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          
          </motion.div>

          {/* Image Section (Right) - Order 1 on Mobile, Order 2 on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            {/* Main Image with Border/Glow */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay z-10"></div>
              {/* Mobile App Development Image */}
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
                alt="Mobile App Development"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge (Top Left) */}
              <div className="absolute top-4 left-4 z-20 bg-[#162036]/90 backdrop-blur-md border border-white/20 px-4 py-3 rounded-lg shadow-lg">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs uppercase tracking-wider">Active Users</span>
                  <span className="text-white text-lg font-bold">120k+</span>
                </div>
              </div>
            </div>

            {/* Decorative Background Blur */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MobileAppsSection;