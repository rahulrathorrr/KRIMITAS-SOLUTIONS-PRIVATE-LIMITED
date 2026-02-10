import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Globe, Send, CheckCircle, Loader2 } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Call (2 seconds delay)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form (Optional)
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    }, 2000);
  };

  return (
    <section className="bg-white min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl -mr-10 -mb-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Get in <span className="text-blue-600">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Have a project in mind? Reach out to us and let's build something extraordinary together.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT SIDE: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl h-full flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">Contact Details</h3>
              
              {/* Address */}
              <div className="flex items-start gap-5 mb-8 group">
                <div className="p-4 bg-blue-100 rounded-xl text-blue-600 mt-1 group-hover:bg-blue-200 transition-colors">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Our Office</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    <span className="font-medium text-gray-800">KRIMITAS SOLUTIONS PRIVATE LIMITED</span><br />
                    Ward No-7, Anandpuri, Bibiganj,<br />
                    M.I.T., Muzaffarpur, Mushahari,<br />
                    Bihar, India - 842003
                  </p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-purple-100 rounded-xl text-purple-600 group-hover:bg-purple-200 transition-colors">
                  <Globe className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Email</h4>
                  <a 
                    href="https://krimitassolutions.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
                  >
                    support@krimitassolutions.in
                  </a>
                </div>
              </div>
            </div>
          </motion.div>


          {/* RIGHT SIDE: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                /* FORM STATE */
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-500 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-500 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-500 ml-1">Company Name</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400"
                        placeholder="Your Company Ltd"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-500 ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-500 ml-1">Message</label>
                    <textarea 
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none placeholder:text-gray-400"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* SUCCESS STATE ANIMATION */
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-green-500/30 shadow-lg"
                  >
                    <CheckCircle className="w-12 h-12 text-white" strokeWidth={3} />
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 max-w-xs mx-auto mb-8">
                    Thank you for contacting Krimitas Solutions. Our team will get back to you within 24 hours.
                  </p>
                  
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all font-medium"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;