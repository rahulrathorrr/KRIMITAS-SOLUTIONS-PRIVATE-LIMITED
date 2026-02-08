import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cpu, BrainCircuit, ShieldCheck } from 'lucide-react';

const TechFocusSection = () => {
  // Animation variants for a smooth reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const imageVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const focusPoints = [
    {
      text: "Designing scalable software architectures",
      icon: <Server className="w-6 h-6 text-blue-600" />
    },
    {
      text: "Building intelligent automation systems",
      icon: <Cpu className="w-6 h-6 text-blue-600" />
    },
    {
      text: "Developing AI-assisted decision platforms",
      icon: <BrainCircuit className="w-6 h-6 text-blue-600" />
    },
    {
      text: "Delivering reliable, secure, and maintainable software",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <section className="py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          
          {/* Left Column: Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div variants={itemVariants}>
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">
                Our Technical Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 leading-tight">
                Engineering Future-Ready <br />
                <span className="text-blue-600">Intelligent Solutions</span>
              </h2>
            </motion.div>

            <motion.div className="space-y-5" variants={itemVariants}>
              <p className="text-lg text-slate-700 leading-relaxed">
                We don't just build software; we engineer robust, future-proof systems that drive your business forward. Our focus is on creating technology that is scalable, secure, and intelligent.
              </p>
              
              <ul className="space-y-4 mt-6">
                {focusPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded-lg shrink-0">
                      {point.icon}
                    </div>
                    <span className="text-slate-700 font-medium text-lg leading-snug">
                      {point.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="p-6 bg-slate-50 rounded-xl border-l-4 border-blue-600 italic text-slate-600 leading-relaxed"
            >
              "Our solutions are developed internally with a long-term vision of product scalability and operational efficiency."
            </motion.div>
          </div>

          {/* Right Column: Tech Image */}
          <motion.div 
            className="lg:w-1/2 relative"
            variants={imageVariants}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop" 
                alt="Advanced Technology and Server Architecture" 
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            {/* Optional Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10 animate-pulse"></div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default TechFocusSection;