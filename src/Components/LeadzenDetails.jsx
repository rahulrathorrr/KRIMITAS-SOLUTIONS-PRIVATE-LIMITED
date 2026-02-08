import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Filter, 
  GitMerge, 
  Database, 
  BarChart3, 
  Users, 
  Briefcase, 
  TrendingUp, 
  ShieldCheck, 
  Lock, 
  Server,
  CheckCircle2
} from "lucide-react";

const LeadzenDetails = () => {
  const [activeSection, setActiveSection] = useState("capabilities");

  // Navigation Data
  const sections = [
    { id: "capabilities", label: "Key Capabilities" },
    { id: "who-uses", label: "Who Should Use" },
    { id: "how-it-helps", label: "How It Helps" },
    { id: "architecture", label: "Architecture & Security" },
  ];

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="bg-white min-h-screen text-gray-900 pb-20">
      
      {/* Sticky Sub-Navigation */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar py-4 gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-24">
        
        {/* --- SECTION 1: KEY CAPABILITIES --- */}
        <section id="capabilities" className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 text-gray-900">
              <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
              Key Capabilities
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Capability Cards */}
              <CapabilityCard 
                icon={<Cpu className="text-blue-600" />}
                title="AI-Powered Lead Scoring"
                points={[
                  "Automatically evaluates lead quality",
                  "Scores leads based on behavior & engagement",
                  "Continuously adapts scoring models"
                ]}
              />
              <CapabilityCard 
                icon={<Filter className="text-purple-600" />}
                title="Smart Lead Qualification"
                points={[
                  "Filters low-intent leads automatically",
                  "Highlights sales-ready prospects",
                  "Reduces manual evaluation effort"
                ]}
              />
              <CapabilityCard 
                icon={<GitMerge className="text-pink-600" />}
                title="Sales Funnel Automation"
                points={[
                  "Automates lead movement across stages",
                  "Triggers actions based on behavior",
                  "Ensures timely follow-ups"
                ]}
              />
              <CapabilityCard 
                icon={<Database className="text-green-600" />}
                title="CRM Integrations"
                points={[
                  "Connects with popular CRM systems",
                  "Syncs leads, scores, and activity data",
                  "Maintains a unified sales data view"
                ]}
              />
              <CapabilityCard 
                icon={<BarChart3 className="text-amber-600" />}
                title="Real-Time Insights"
                points={[
                  "Visual lead performance metrics",
                  "Conversion tracking",
                  "Funnel analytics dashboards"
                ]}
              />
            </div>
          </motion.div>
        </section>

        {/* --- SECTION 2: WHO SHOULD USE --- */}
        <section id="who-uses" className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3 text-gray-900">
              <span className="w-2 h-8 bg-purple-600 rounded-full"></span>
              Who Should Use Leadzen AI?
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, text: "Sales teams managing high volumes" },
                { icon: Briefcase, text: "SaaS and service-based businesses" },
                { icon: Filter, text: "Marketing teams focused on quality" },
                { icon: TrendingUp, text: "Growing businesses needing automation" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-purple-200 hover:shadow-md transition-all group">
                  <div className="p-4 rounded-full bg-purple-50 mb-4 group-hover:bg-purple-100 transition-colors">
                    <item.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <p className="font-medium text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* --- SECTION 3: HOW IT HELPS --- */}
        <section id="how-it-helps" className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 text-gray-900">
              <span className="w-2 h-8 bg-green-600 rounded-full"></span>
              How Leadzen AI Helps
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  "Saves time by automating lead qualification",
                  "Improves conversion rates significantly",
                  "Reduces manual sales workload",
                  "Enables data-driven sales decisions"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-green-50 transition-colors border border-transparent hover:border-green-100">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-lg text-gray-700">{text}</span>
                  </div>
                ))}
              </div>
              
              {/* Abstract Visual for "Help" */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 h-full min-h-[300px] flex items-center justify-center">
                 <div className="text-center p-6">
                    <div className="text-5xl font-bold text-gray-900 mb-2">3x</div>
                    <div className="text-green-600 uppercase tracking-widest text-sm mb-6 font-semibold">Faster Conversions</div>
                    <button className="px-6 py-2 rounded-full border border-gray-300 text-sm hover:bg-white hover:border-blue-300 hover:text-blue-600 transition-all bg-white shadow-sm text-gray-700">
                      View Case Study
                    </button>
                 </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- SECTION 4: ARCHITECTURE & SECURITY --- */}
        <section id="architecture" className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 p-8 md:p-12 text-white"
          >
            {/* Background Pattern - Keeping dark for security section impact */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-400 rounded-full"></span>
                Product Architecture & Security
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <SecurityCard 
                  icon={<ShieldCheck className="text-blue-400" />}
                  title="Secure Authentication"
                />
                <SecurityCard 
                  icon={<Lock className="text-blue-400" />}
                  title="Data Encryption"
                />
                <SecurityCard 
                  icon={<Users className="text-blue-400" />}
                  title="Role-Based Access"
                />
                <SecurityCard 
                  icon={<Server className="text-blue-400" />}
                  title="Scalable Backend"
                />
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                  Our architecture is built to enterprise standards, ensuring your data remains private, protected, and available when you need it most.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
};

// --- Helper Components ---

const CapabilityCard = ({ icon, title, points }) => (
  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all hover:-translate-y-1 duration-300">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2.5 rounded-lg bg-white border border-gray-100 shadow-sm">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
    </div>
    <ul className="space-y-2">
      {points.map((point, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const SecurityCard = ({ icon, title }) => (
  <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/10 border border-white/10 text-center hover:bg-white/20 transition-colors">
    <div className="mb-4 p-3 bg-blue-500/20 rounded-full">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <h3 className="font-semibold text-white">{title}</h3>
  </div>
);

export default LeadzenDetails;