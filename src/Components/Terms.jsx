import React from "react";
import { motion } from "framer-motion";
import { Scale, FileCheck, AlertCircle, ShieldCheck, Gavel } from "lucide-react";

const TermsConditions = () => {
  return (
    <div className="bg-white min-h-screen pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-purple-50 rounded-full mb-4">
            <Scale className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-gray-500">Last Updated: February 2026</p>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          {/* Agreement Intro */}
          <section>
            <p className="text-lg text-gray-600 leading-relaxed">
              By accessing or using the website and services of <strong className="text-gray-900">KRIMITAS SOLUTIONS PRIVATE LIMITED</strong>, you agree to the following terms.
            </p>
          </section>

          {/* Use of Services */}
          <section className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-blue-600" />
              Use of Services
            </h2>
            <p className="text-gray-600 mb-2">Users agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
              <li>Use services lawfully</li>
              <li>Avoid misuse or unauthorized access</li>
              <li>Provide accurate information</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-600">
              All software, content, designs, and trademarks belong to KRIMITAS SOLUTIONS PRIVATE LIMITED unless stated otherwise.
            </p>
          </section>

          {/* Software Usage */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Software Usage</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
              <li>Access may be subject to subscription or agreement</li>
              <li>Unauthorized duplication or resale is prohibited</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="border-l-4 border-red-500 pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              Limitation of Liability
            </h2>
            <p className="text-gray-600">
              We are not liable for indirect or consequential damages resulting from service use.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gray-700" />
              Termination
            </h2>
            <p className="text-gray-600">
              We reserve the right to suspend or terminate access for violations of these terms.
            </p>
          </section>

          {/* Governing Law */}
          <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Gavel className="w-5 h-5 text-blue-800" />
              Governing Law
            </h2>
            <p className="text-gray-700">
              These terms are governed by the laws of India.
            </p>
          </section>

        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions;