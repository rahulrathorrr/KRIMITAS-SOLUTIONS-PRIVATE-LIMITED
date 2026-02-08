import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cloud, TrendingUp, ShoppingCart, Briefcase, GraduationCap, Stethoscope } from 'lucide-react';

const Industries = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } }
  };

  const industries = [
    { name: "SaaS & Technology", icon: <Cloud size={20} /> },
    { name: "Sales & Marketing", icon: <TrendingUp size={20} /> },
    { name: "E-Commerce", icon: <ShoppingCart size={20} /> },
    { name: "Professional Services", icon: <Briefcase size={20} /> },
    { name: "Education & Training", icon: <GraduationCap size={20} /> },
    { name: "Healthcare & Operations", icon: <Stethoscope size={20} /> },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50 font-sans">
      
      {/* Industries Grid */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Industries We Work With</h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20"
      >
        {industries.map((ind, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-xl text-center hover:border-blue-300 hover:shadow-md transition-all cursor-default"
          >
            <div className="text-blue-600 mb-3 bg-blue-50 p-3 rounded-full">{ind.icon}</div>
            <span className="text-xs md:text-sm font-bold text-slate-700">{ind.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Smarter Systems?</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Let’s create software that works for your business — not the other way around.
          </p>
          <Link to="/contact">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Get Started
            </button>
          </Link>
        </div>
      </motion.div>

    </section>
  );
};

export default Industries;