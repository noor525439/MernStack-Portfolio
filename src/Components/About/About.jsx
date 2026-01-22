import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-black text-white py-24 px-8 md:px-24 lg:px-36" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-2xl pt-20 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-[0.3em] uppercase mb-6 italic">
               About me
            </h2>
            <h1 className="text-2xl md:text-5xl font-bold tracking-tighter leading-tight">
              Crafting smooth <br /> 
              digital <span className="text-slate-500 underline decoration-blue-500/30">experiences.</span>
            </h1>

           
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                I am a <span className="text-white font-medium italic">Mern Stack Developer</span> based in Pakistan, dedicated to building clean and user-friendly websites. 
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                I specialize in turning complex requirements into simple, functional, and aesthetically pleasing digital solutions. I am constantly learning and evolving with the latest web technologies.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Technologies I use:</h4>
              <div className="grid grid-cols-2 gap-y-4 text-slate-200 font-medium">
                <div className="flex items-center gap-3 hover:text-blue-500 transition-colors cursor-default">
                  <div className="h-1 w-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div> React JS
                </div>
                <div className="flex items-center gap-3 hover:text-blue-500 transition-colors cursor-default">
                  <div className="h-1 w-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div> Tailwind CSS
                </div>
                <div className="flex items-center gap-3 hover:text-blue-500 transition-colors cursor-default">
                  <div className="h-1 w-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div> Node JS
                </div>
                <div className="flex items-center gap-3 hover:text-blue-500 transition-colors cursor-default">
                  <div className="h-1 w-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div> JavaScript
                </div>
                <div className="flex items-center gap-3 hover:text-blue-500 transition-colors cursor-default">
                  <div className="h-1 w-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div> Git & GitHub
                </div>
                <div className="flex items-center gap-3 hover:text-blue-500 transition-colors cursor-default">
                  <div className="h-1 w-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div> Postman
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;