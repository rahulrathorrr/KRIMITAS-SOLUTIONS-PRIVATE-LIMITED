import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Workflow, LayoutDashboard, ArrowRight } from 'lucide-react';

const CoreOfferings = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const offerings = [
    {
      title: "AI Software Products",
      desc: "Purpose-built AI platforms designed to automate business workflows and decision-making.",
      icon: <BrainCircuit className="w-8 h-8 text-white" />,
      bg: "bg-blue-600"
    },
    {
      title: "Custom Software Development",
      desc: "Web and mobile applications developed to meet specific business requirements.",
      icon: <Code2 className="w-8 h-8 text-white" />,
      bg: "bg-indigo-600"
    },
    {
      title: "Business Automation Systems",
      desc: "Automated workflows, data pipelines, and system integrations.",
      icon: <Workflow className="w-8 h-8 text-white" />,
      bg: "bg-purple-600"
    },
    {
      title: "Digital Platforms & Tools",
      desc: "Dashboards, internal tools, and customer-facing systems.",
      icon: <LayoutDashboard className="w-8 h-8 text-white" />,
      bg: "bg-cyan-600"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50 font-sans">
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-600 font-bold tracking-wider uppercase text-sm"
        >
          Our Core Offerings
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-slate-900 mt-2"
        >
          Software & IT Solutions <br className="hidden md:block" />
          <span className="text-blue-600">Designed to Scale</span>
        </motion.h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {offerings.map((item, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-100 transition-all group"
          >
            <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-blue-500 text-sm">🔹</span> {item.title}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              {item.desc}
            </p>
         
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CoreOfferings;