import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Server, Globe } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Last Updated: February 2026</p>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          {/* Introduction */}
          <section>
            <p className="text-lg text-gray-600 leading-relaxed">
              <strong className="text-gray-900">KRIMITAS SOLUTIONS PRIVATE LIMITED</strong> (“we”, “our”, “us”) is committed to protecting user privacy and data security. This Privacy Policy explains how we collect, use, store, and protect personal information when users interact with our website and software products, including Leadzen AI.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="border-l-4 border-blue-600 pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">We may collect the following data:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
              <li>Name, email address, and contact details</li>
              <li>Company information</li>
              <li>Account login details</li>
              <li>Usage data and system interaction logs</li>
              <li>Device and browser information</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5 text-green-500" />
              How We Use Information
            </h2>
            <p className="text-gray-600 mb-4">Collected data is used to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
              <li>Provide and operate our software products</li>
              <li>Improve system performance and features</li>
              <li>Communicate product updates and support</li>
              <li>Maintain security and prevent misuse</li>
            </ul>
          </section>

          {/* Data Storage & Security */}
          <section className="border-l-4 border-purple-500 pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-purple-500" />
              Data Storage & Security
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
              <li>Data is stored in secure environments</li>
              <li>Access is restricted to authorized personnel</li>
              <li>Industry-standard security practices are followed</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="border-l-4 border-orange-500 pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Server className="w-5 h-5 text-orange-500" />
              Data Sharing
            </h2>
            <p className="text-gray-600 mb-4 font-medium">We do not sell personal data.</p>
            <p className="text-gray-600 mb-2">Information may only be shared with:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
              <li>Trusted infrastructure providers</li>
              <li>Legal or regulatory authorities when required</li>
            </ul>
          </section>

          {/* Cookies & Tracking */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies & Tracking</h2>
            <p className="text-gray-600">
              Our website may use cookies to improve functionality, analytics, and user experience.
            </p>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Rights</h2>
            <p className="text-gray-600 mb-2">Users may:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
              <li>Request access to their data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          {/* Updates & Contact */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Policy Updates & Contact</h2>
            <p className="text-gray-600 mb-4">
              This Privacy Policy may be updated periodically. Continued use of our services implies acceptance of updates.
            </p>
            <p className="text-gray-600">
              For privacy-related queries, contact us via the website contact form.
            </p>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;