import React from "react";
import { motion } from "framer-motion";
import { Bot, Database, BrainCircuit, LineChart } from "lucide-react";

const AISection = () => {
  const features = [
    {
      title: "AI-assisted automation tools",
      icon: <Bot className="w-6 h-6 text-cyan-600" />,
      description: "Automate repetitive tasks and workflows with intelligent bots."
    },
    {
      title: "Intelligent data processing",
      icon: <Database className="w-6 h-6 text-blue-600" />,
      description: "Extract actionable insights from unstructured data automatically."
    },
    {
      title: "Decision-support systems",
      icon: <BrainCircuit className="w-6 h-6 text-indigo-600" />,
      description: "Enhance executive decision-making with AI-driven recommendations."
    },
    {
      title: "Predictive analytics models",
      icon: <LineChart className="w-6 h-6 text-violet-600" />,
      description: "Forecast trends and behaviors to stay ahead of the market curve."
    }
  ];

  return (
    <section className="bg-white py-24 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Section (Left) - Order 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image with Border/Shadow */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-gray-100">
              
              {/* AI / Neural Network Image */}
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
                alt="Artificial Intelligence Brain"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge (Bottom Left) */}
              <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-md border border-gray-200 px-4 py-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                  </div>
                  <span className="text-gray-800 text-sm font-medium">Neural Network Active</span>
                </div>
              </div>
            </div>

            {/* Decorative Background Blur */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-cyan-100 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Text Content (Right) - Order 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Section Tag */}
            <span className="block text-cyan-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Future Tech
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              AI & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                Intelligent Systems
              </span>
            </h2>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-1 p-3 rounded-xl bg-cyan-50 border border-cyan-100 group-hover:bg-cyan-100 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-cyan-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button removed here */}

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISection;