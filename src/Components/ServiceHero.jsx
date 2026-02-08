import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const ServiceHero = () => {
  return (
    <section className="relative bg-[#1e2a45] pt-32 pb-20 overflow-hidden">
      {/* Background Elements (Optional for depth) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Leadzen AI</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Intelligent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Lead Scoring
              </span>{" "}
              & Sales Automation Platform
            </h1>

            {/* Subtext / Description (Optional filler to balance layout) */}
            <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
              Accelerate your sales cycle with AI-driven insights. Identify high-value prospects and automate your outreach with precision.
            </p>

            {/* Footer Credit */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-gray-400 uppercase tracking-widest font-medium">
                Built by <span className="text-white font-bold ml-1">KRIMITAS SOLUTIONS PRIVATE LIMITED</span>
              </p>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Image Container with Glow */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e2a45] via-transparent to-transparent opacity-60 z-10"></div>
              
              {/* Replace src with your generated image path */}
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="AI Dashboard Analytics" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating UI Card Effect (Optional Polish) */}
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl hidden sm:block">
                <div className="flex justify-between items-center text-white">
                  <div>
                    <div className="text-xs text-gray-300">Conversion Rate</div>
                    <div className="text-xl font-bold">+124%</div>
                  </div>
                  <div className="h-8 w-[1px] bg-white/20"></div>
                  <div>
                    <div className="text-xs text-gray-300">Qualified Leads</div>
                    <div className="text-xl font-bold">8,450</div>
                  </div>
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServiceHero;