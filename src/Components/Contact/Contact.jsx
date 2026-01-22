import React from 'react';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-[#050505] text-white py-24 px-6 md:px-36" id='contact'>
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Get In <span className="font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Have a project in mind? Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
        
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className='text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 bg-clip-text text-transparent mb-6'>
              Let's Talk
            </h3>
            
            <div className="space-y-4">
        
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-colors group">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Email Me</p>
                  <a href="mailto:noor525439@gmail.com" className="text-lg font-medium hover:text-blue-400 transition-colors">
                    noor525439@gmail.com
                  </a>
                </div>
              </div>

          
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 transition-colors group">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Call Me</p>
                  <p className="text-lg font-medium">03140046055</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/50 transition-colors group">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Location</p>
                  <p className="text-lg font-medium text-gray-300">Rahim Yar Khan, Punjab, PK</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-sm"
          >
            <form className='space-y-5'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label className='text-sm font-medium text-gray-400 ml-1'>Full Name</label>
                        <input type="text" 
                            className='w-full px-5 py-4 rounded-2xl bg-black/50 border border-white/10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all'
                            placeholder='John Doe'/>
                    </div>
                    <div className="space-y-2">
                        <label className='text-sm font-medium text-gray-400 ml-1'>Email Address</label>
                        <input type="email" 
                            className='w-full px-5 py-4 rounded-2xl bg-black/50 border border-white/10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all'
                            placeholder='john@example.com'/>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className='text-sm font-medium text-gray-400 ml-1'>Message</label>
                    <textarea 
                        className='w-full px-5 py-4 rounded-2xl bg-black/50 border border-white/10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none'
                        rows="4"
                        placeholder='Tell me about your project...'/>
                </div>

                <button className='w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/20'>
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Contact;