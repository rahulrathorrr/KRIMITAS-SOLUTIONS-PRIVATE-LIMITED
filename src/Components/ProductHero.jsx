import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Bot, ArrowRight, Activity } from "lucide-react";

const ProductHero = () => {
  return (
    <section className="relative bg-[#1e2a45] pt-32 pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Content: Title & Description */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Product Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Leadzen AI</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Intelligent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Lead Scoring
              </span>{" "}
              & Sales Automation Platform
            </h1>

            {/* Built By Credit */}
            <div className="mb-10 flex items-center gap-3">
              <div className="h-[1px] w-10 bg-gray-500"></div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                Built by <span className="text-white font-bold">KRIMITAS SOLUTIONS PRIVATE LIMITED</span>
              </p>
            </div>

            {/* "What is Leadzen AI?" Box */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Bot className="w-5 h-5 text-blue-400" />
                What is Leadzen AI?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Leadzen AI is an AI-powered lead scoring and sales automation software designed to help businesses identify high-potential leads, automate sales workflows, and improve conversion efficiency.
              </p>
              <p className="text-gray-400 text-sm border-l-2 border-blue-500 pl-4 italic">
                It analyzes lead behavior, engagement signals, and historical data to prioritize prospects and automate follow-ups — allowing sales teams to focus on what matters most.
              </p>
            </div>

         
          </motion.div>

          {/* Right Content: Tech Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1e2a45]/80 via-transparent to-transparent z-10"></div>
              
              {/* Sales/Dashboard Tech Image */}
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Leadzen AI Dashboard Interface" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating UI Elements for "Tech Feel" */}
              <div className="absolute top-6 right-6 z-20 bg-[#1e2a45]/90 border border-white/20 p-3 rounded-lg shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-md">
                    <Activity className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase">Lead Quality</div>
                    <div className="text-white font-bold">High Potential</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Background Blob */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProductHero;