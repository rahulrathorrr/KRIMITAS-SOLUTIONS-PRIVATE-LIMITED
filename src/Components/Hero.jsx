import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Server, Cpu, ShieldCheck, Zap, BarChart3, CheckCircle2 } from "lucide-react";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative bg-[#1e2a45] text-white overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-600 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Trust Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/40 border border-blue-700/50 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium text-blue-100">Trusted by 50+ Global Enterprises</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 variants={itemVariants} className="text-4xl lg:text-6xl font-bold leading-tight">
              Intelligent Software Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Real Business Problems</span>
            </motion.h1>

            {/* Description Paragraphs (EXACT TEXT) */}
            <motion.div variants={itemVariants} className="space-y-5 text-gray-300 text-lg leading-relaxed">
              <p>
                <strong className="text-white font-semibold text-xl block mb-2">KRIMITAS SOLUTIONS PRIVATE LIMITED</strong>
                is a technology startup focused on building AI-powered software products
                and custom IT solutions that help businesses automate operations,
                manage data, and accelerate growth.
              </p>
              <p>
                We design and develop in-house software systems that combine
                automation, analytics, and intelligent decision-making to solve
                everyday business challenges.
              </p>
            </motion.div>

          

            {/* "What Makes KRIMITAS Different" Section (EXACT TEXT INCLUDED) */}
            <motion.div variants={itemVariants} className="pt-8 mt-4 border-t border-gray-700/50">
                <h3 className="text-xl font-bold mb-3 text-white">What Makes KRIMITAS Different</h3>
                
                {/* The specific text you asked for */}
                <p className="text-sm text-gray-400 mb-6 italic border-l-2 border-blue-500 pl-4">
                  "We are not service resellers. We build software products, platforms, and automation systems from the ground up."
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
                    <div className="flex items-center gap-3">
                        <Cpu className="w-5 h-5 text-blue-400 shrink-0"/>
                        <span className="text-sm font-medium text-gray-200">AI-driven product development</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0"/>
                        <span className="text-sm font-medium text-gray-200">Secure, scalable system architecture</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-blue-400 shrink-0"/>
                        <span className="text-sm font-medium text-gray-200">Automation-first design</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Server className="w-5 h-5 text-blue-400 shrink-0"/>
                        <span className="text-sm font-medium text-gray-200">Business-focused problem solving</span>
                    </div>
                </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Tech Image & Floating Elements */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:h-full flex items-center"
          >
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 z-20 bg-[#162036] w-full aspect-[4/3] lg:aspect-auto lg:h-[650px]">
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1e2a45]/40 via-transparent to-transparent z-10"></div>
                
                {/* TECH RELATED IMAGE (Dashboard/Analytics) */}
                <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                    alt="AI Software Dashboard" 
                    className="w-full h-full object-cover object-left opacity-90"
                />

                {/* Floating Card: Efficiency Stats */}
                <motion.div 
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:bottom-10 z-30 bg-[#162036]/90 backdrop-blur-xl border border-gray-600/50 p-5 rounded-2xl shadow-xl flex items-center gap-5 max-w-sm"
                >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-900/30 shrink-0">
                        <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <div className="flex items-baseline gap-2">
                          <p className="text-2xl font-bold text-white">99.8%</p>
                          <span className="text-green-400 text-xs font-bold px-2 py-0.5 rounded-full bg-green-400/10 border border-green-400/20">
                            ▲ Growth
                          </span>
                        </div>
                        <p className="text-xs text-gray-300 mt-1">Operational efficiency across deployed systems.</p>
                    </div>
                </motion.div>
                
                {/* Floating Card: Verified Badge (Top Left) */}
                 <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    className="absolute top-6 left-6 z-30 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg flex items-center gap-2"
                >
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-xs font-medium text-white">ISO 27001 Certified</span>
                </motion.div>
            </div>

            {/* Decorative Dotted Pattern */}
            <div className="absolute -z-10 bottom-[-20px] left-[-20px] w-40 h-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
