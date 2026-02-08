import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ShieldCheck, Users } from 'lucide-react';

const CoreValues = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const values = [
    {
      title: "Transparency",
      desc: "Clear communication and ethical software practices. We believe in keeping our clients informed at every stage of development.",
      icon: <MessageSquare className="w-8 h-8 text-emerald-600" />,
      bg: "bg-emerald-100"
    },
    {
      title: "Quality",
      desc: "Strong focus on performance, security, and maintainability. We don't just write code; we engineer robust solutions.",
      icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
      bg: "bg-indigo-100"
    },
    {
      title: "Collaboration",
      desc: "We work closely with clients and partners to build meaningful solutions. Your success is our success.",
      icon: <Users className="w-8 h-8 text-orange-600" />,
      bg: "bg-orange-100"
    }
  ];

  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-slate-900"
          >
            Our Core <span className="text-blue-600">Values</span>
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
          >
            The principles that define how we work and what we deliver.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:bg-white transition-all duration-300"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                {item.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-slate-600 leading-relaxed text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;