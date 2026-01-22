import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full bg-[#050505] flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
          alt="Background"
          className="w-full h-full object-cover opacity-40" 
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
      </div>
      <div className="relative z-10 max-w-6xl w-full">
        <div className="flex flex-col items-center text-center">


          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-[5rem] font-black text-white tracking-tighter leading-none mb-6">
              Noor {" "}<span className="font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Fatima</span>
            </h1>
          </motion.div>

  
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl"
          >
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-8">
              Based in Pakistan, I am a <span className="text-white font-medium italic decoration-blue-500/50 underline-offset-4">
              Full-Stack Engineer</span> passionate about creating high-performance web applications.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'React.JS', 'Node.JS',"Express.JS","MongoDB","Mongoose"].map((tech) => (
                <span key={tech} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-8"
          >
            <a href="#contact" className="px-10 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl transition-all shadow-[0_0_40px_rgba(37,99,235,0.3)]">
              Start a Conversation
            </a>
            
            <div className="flex items-center gap-6">
              <a href="https://github.com/noor525439" className="text-slate-400 hover:text-white transition-all transform hover:-translate-y-1"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/noor-fatima1001" className="text-slate-400 hover:text-white transition-all transform hover:-translate-y-1"><Linkedin size={24} /></a>
              <a href="#contact" className="text-slate-400 hover:text-white transition-all transform hover:-translate-y-1"><Mail size={24} /></a>
            </div>
          </motion.div>
        </div>
      </div>


    

    </section>
  );
};

export default Hero;