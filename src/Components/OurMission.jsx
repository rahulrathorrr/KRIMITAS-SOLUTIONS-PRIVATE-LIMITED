import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Zap } from 'lucide-react';

const OurMission = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cards = [
    {
      title: "Our Mission",
      desc: "To build intelligent software solutions that simplify complex business processes, improve productivity, and enable data-driven decision-making.",
      icon: <Target className="w-8 h-8 text-slate-800" />, // Icon color from image
      bg: "bg-slate-200" // Icon background from image
    },
    {
      title: "Our Vision",
      desc: "To become a trusted technology product company delivering AI-powered systems that businesses can rely on for automation, analytics, and growth.",
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      bg: "bg-blue-100"
    },
    {
      title: "Our Values",
      desc: "Innovation: We build with modern tools, AI models, and evolving technologies to ensure our solutions remain future-proof and efficient.",
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      bg: "bg-yellow-100"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-slate-900"
          >
            Guided by <span className="text-blue-600">Purpose</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }} // Stagger effect
              whileHover={{ y: -8 }} // Hover lift effect
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                {item.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-slate-600 leading-relaxed text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurMission;