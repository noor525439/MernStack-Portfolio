import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About me' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-5' : 'bg-transparent py-5'
    }`}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-end md:justify-between items-center">
        
      
        <button 
          className="md:hidden text-white z-[60] p-2" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>


        <ul className={`
          flex flex-col md:flex-row items-center gap-10 md:gap-8 
          fixed md:static top-0 right-0 h-screen md:h-auto 
          w-[75%] md:w-auto bg-[#080808] md:bg-transparent 
          shadow-2xl md:shadow-none transition-transform duration-500 z-50
          pt-32 md:pt-0
          ${menuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
        `}>
          {navLinks.map((link) => (
            <li key={link.id} className="relative group">
              <AnchorLink
                className={`text-lg transition-colors ${
                  menu === link.id ? 'text-gray-400' : 'text-white hover:text-gray-400'
                }`}
                offset={50}
                href={`#${link.id}`}
                onClick={() => {
                  setMenu(link.id);
                  setMenuOpen(false); 
                }}
              >
                {link.label}
              </AnchorLink>
              {menu === link.id && (
                <motion.img 
                  layoutId="underline"
                  src={underline} 
                  alt="underline" 
                  className="absolute -bottom-2 left-0 w-full h-4 pt-1"
                />
              )}
            </li>
          ))}
          
    
          <li className="md:hidden pt-4">
            <AnchorLink
              href="#contact"
              className="px-10 py-3 rounded-full text-white text-sm font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg"
              onClick={() => setMenuOpen(false)}
            >
              Let'S Talk
            </AnchorLink>
          </li>
        </ul>

    
        <div className="hidden md:block">
          <AnchorLink
            className="text-sm font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:scale-105 transition-all px-8 py-3 rounded-full shadow-xl"
            offset={50}
            href="#contact"
          >
            Connect With Me
          </AnchorLink>
        </div>

      </div>

      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;