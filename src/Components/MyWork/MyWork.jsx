import React from 'react';
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Swiper Components aur Styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import project_1 from "../../assets/project_1.png";
import project_2 from "../../assets/project_2.png";
import project_3 from "../../assets/project_3.png";
import project_4 from "../../assets/project_4.png";
import project_5 from "../../assets/project_5.png";
import project_6 from "../../assets/project_6.png";
import project_8 from "../../assets/project_8.png";
import project_9 from "../../assets/project-9.png";
import ExpenseTrackor from "../../assets/ExpenseTrackor.png";
import Gemini from "../../assets/Gemini.png";
import website from "../../assets/website.png";

const projects = [
  { id: "01", src: Gemini, title: "Gemini AI Clone", tag: "Artificial Intelligence", link: "https://gemini-clone115.netlify.app" },
  { id: "02", src: ExpenseTrackor, title: "Expense Tracker", tag: "FinTech App", link: "https://expense-trackor11.netlify.app/" },
  { id: "03", src: website, title: "Premium Store", tag: "E-Commerce", link: "https://ecommerce-react113.netlify.app/" },
  { id: "04", src: project_8, title: "Real Estate", tag: "Property Portal", link: "https://estatereact12.netlify.app" },
  { id: "05", src: project_5, title: "React Fullstack", tag: "MERN Stack", link: "https://reactfullstackaxiosapi.netlify.app/" },
  { id: "06", src: project_6, title: "Foodies Point", tag: "Restaurant UX", link: "https://restaurant1001.netlify.app" },
  { id: "07", src: project_1, title: "Rock Paper Scissor", tag: "Interactive Game", link: "https://rock-paper-scissor11.netlify.app" },
  { id: "08", src: project_2, title: "Amazon Clone", tag: "Retail Clone", link: "https://amazon1123.netlify.app/" },
  { id: "09", src: project_3, title: "Tic Tac Toe", tag: "Logic Game", link: "https://tic-tac-toe110.netlify.app/" },
  { id: "10", src: project_4, title: "Weather Live", tag: "Weather API", link: "https://weather-app-react11.netlify.app/" },
  { id: "11", src: project_9, title: "Task Manager", tag: "Utility App", link: "https://todo-list535.netlify.app" },
];

const MyWork = () => {
  return (
    <section className="bg-[#050505] text-white py-32 px-6 overflow-hidden" id="work">
      <div className="max-w-7xl mx-auto md:px-24">
        
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold">
            Creative {" "}<span className='font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Gallery</span>
          </h1>
        </div>

    
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
          className="mySwiper !py-20"
          style={{ width: '100%' }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="max-w-[350px] md:max-w-[500px]">
              <div className="group relative bg-zinc-900 rounded-[0.5rem] border
               border-white/10 transition-all duration-500 hover:border-blue-500/50">
                <div className="relative aspect-video rounded-t-[0.5rem] overflow-hidden">
                  <img 
                    src={project.src} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                </div>

                <div className="mt-8 px-4 pb-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">{project.tag}</p>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{project.title}</h3>
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="h-14 w-14 bg-white text-black rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all transform hover:rotate-12"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style dangerouslySetInnerHTML={{ __html: `
          .swiper-slide { transition: opacity 0.3s; opacity: 0.4; }
          .swiper-slide-active { opacity: 1; }
          .swiper-pagination-bullet { background: #333 !important; opacity: 1; height: 10px; width: 10px; }
          .swiper-pagination-bullet-active { background: #2563eb !important; width: 35px; border-radius: 5px; }
        `}} />

      </div>
    </section>
  );
};

export default MyWork;