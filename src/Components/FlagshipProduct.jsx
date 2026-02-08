import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Added Link for redirection
import { Rocket, Zap } from 'lucide-react';

const FlagshipProduct = () => {
  return (
    <section className="bg-slate-900 py-20 overflow-hidden relative font-sans">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-bold uppercase tracking-wide mb-6 border border-yellow-500/30">
              <Zap size={12} fill="currentColor" /> Our Flagship Product
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Leadzen <span className="text-blue-400">AI</span>
            </h2>
            <p className="text-slate-400 text-sm mb-6 font-medium tracking-wide">BY KRIMITAS</p>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-8 border-l-4 border-blue-500 pl-4">
              An intelligent lead scoring and sales automation platform designed to help businesses identify, prioritize, and convert high-quality leads efficiently.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Changed button to Link for redirection */}
              <Link 
                to="/products" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 inline-block"
              >
                View Product Details
              </Link>
            </div>
          </motion.div>

          {/* Right: Visual Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-2 border border-slate-700 shadow-2xl">
              <div className="bg-slate-950 rounded-xl overflow-hidden relative h-64 md:h-80 flex items-center justify-center group">
                 {/* Abstract UI Representation */}
                 <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]"></div>
                 <div className="text-center relative z-10">
                    <div className="w-20 h-20 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-500/50">
                      <Rocket size={40} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Leadzen AI Dashboard</h3>
                    <p className="text-slate-500 text-sm mt-2">Coming Soon</p>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FlagshipProduct;