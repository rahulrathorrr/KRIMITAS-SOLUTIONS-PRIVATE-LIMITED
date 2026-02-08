import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  // Animation variants for smooth fade-up effect
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const containerStagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <section className="relative py-28 lg:py-40 overflow-hidden bg-slate-900 font-sans">
      
      {/* 1. Background Image with Tech Theme */}
      <div className="absolute inset-0 z-0">
        {/* Using a tech-focused image (Abstract Network/AI Blockchain) */}
        <img
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop"
          alt="Abstract Technology Background connecting nodes"
          className="w-full h-full object-cover scale-105"
        />
        {/* Heavy dark gradient overlay to ensure text readability and blend with brand colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/85 to-slate-900"></div>
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Small Subtitle Tag */}
          <motion.div variants={fadeInUp}>
             <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
                About KRIMITAS SOLUTIONS PRIVATE LIMITED
             </span>
          </motion.div>

          {/* Main Headline with Gradient Text */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
          >
            A Startup Focused on Building <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Intelligent Software
            </span>
          </motion.h1>

          {/* Description Text */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            <span className="font-semibold text-white">KRIMITAS SOLUTIONS PRIVATE LIMITED</span> is an India-based IT startup dedicated to building AI-powered software products and customized technology solutions.
          </motion.p>

        </motion.div>
      </div>
      
      {/* Optional: Subtle bottom fade to blend smoothly into the next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent z-0"></div>
    </section>
  );
};

export default AboutHero;