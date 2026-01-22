import React from "react";
import { motion } from "framer-motion";
import { Layout, Database, Globe, Cpu, Terminal, ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Web Development",
    description: "Creating visually appealing and user-centric websites that prioritize seamless experience.",
    icon: <Globe size={30} />,
    color: "from-blue-600 to-cyan-400",
  },
  {
    id: "02",
    title: "Frontend Development",
    description: "Building fast, responsive, and interactive interfaces using modern frameworks like React.",
    icon: <Layout size={30} />,
    color: "from-purple-600 to-pink-500",
  },
  {
    id: "03",
    title: "Backend Development",
    description: "Developing robust server-side logic, APIs, and secure database management systems.",
    icon: <Database size={30} />,
    color: "from-emerald-600 to-teal-400",
  },
  {
    id: "04", 
    title: "MERN Development",
    description: "End-to-end full stack solutions using MongoDB, Express, React, and Node.js.",
    icon: <Cpu size={30} />,
    color: "from-orange-600 to-yellow-400",
  },
  {
    id: "05", 
    title: "Software Engineering",
    description: "Applying engineering principles to build scalable, high-quality software architectures.",
    icon: <Terminal size={30} />,
    color: "from-cyan-600 to-blue-500",
  },
];

const Service = () => {
  return (
    <section className="bg-[#030303] text-white py-24 px-6 md:px-36" id="services">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Services <span className="font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">& Solutions</span>
          </h2>
        </div>

  
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              
              className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] min-w-[300px] group"
            >
              <div className="relative h-full p-[1px] rounded-[2rem] overflow-hidden bg-white/10 group-hover:bg-gradient-to-br transition-all duration-500 group-hover:from-white/20 group-hover:to-transparent">
                
                <div className="relative h-full bg-[#0a0a0a] rounded-[2rem] p-8 z-10 flex flex-col justify-between">
                  
              
                  <div>
                    <div className="flex justify-between items-center mb-8">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-500`}>
                        {service.icon}
                      </div>
                      <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                        {service.id}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">
                      View Project
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>

              
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;