import React from "react";
import { motion } from "framer-motion";
import { Workflow, Layers, Network, RefreshCw, ArrowRight } from "lucide-react";

const AutomationSection = () => {
  const features = [
    {
      title: "Workflow automation",
      icon: <Workflow className="w-6 h-6 text-orange-400" />,
      description: "Eliminate manual bottlenecks with smart, self-executing workflows."
    },
    {
      title: "Task orchestration",
      icon: <Layers className="w-6 h-6 text-amber-400" />,
      description: "Coordinate complex processes across multiple teams and tools seamlessly."
    },
    {
      title: "API & system integrations",
      icon: <Network className="w-6 h-6 text-red-400" />,
      description: "Connect your disparate software ecosystem into a unified powerhouse."
    },
    {
      title: "Data synchronization",
      icon: <RefreshCw className="w-6 h-6 text-yellow-400" />,
      description: "Ensure real-time data consistency across all your business platforms."
    }
  ];

  return (
    <section className="bg-[#1e2a45] py-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content (Left) - Order 2 on Mobile, Order 1 on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Section Tag */}
            <span className="block text-orange-400 font-semibold tracking-wider uppercase text-sm mb-2">
              Operational Efficiency
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Business Process <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Automation
              </span>
            </h2>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-1 p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-orange-300 transition-colors">
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
              <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay z-10"></div>
              
              {/* Automation / Abstract Tech Image */}
              <img
                src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2070&auto=format&fit=crop"
                alt="Business Process Automation"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge (Top Right) */}
              <div className="absolute top-4 right-4 z-20 bg-[#162036]/90 backdrop-blur-md border border-orange-500/30 px-4 py-3 rounded-lg shadow-lg">
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-orange-400 font-bold text-lg">+300%</span>
                    <Workflow className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-gray-400 text-xs uppercase tracking-wider">Efficiency Boost</span>
                </div>
              </div>
            </div>

            {/* Decorative Background Blur */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AutomationSection;