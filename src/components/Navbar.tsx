import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full py-6 px-10 flex justify-between items-center sticky top-0 bg-[#1a1a1a]/80 backdrop-blur-md z-50">
      <div className="text-3xl font-light" style={{ color: '#d1a3a3' }}>
        Judy.
      </div>
      <div className="space-x-8 text-sm font-light uppercase tracking-widest text-gray-300">
        <a href="#about" className="hover:text-[#d1a3a3] transition">About</a>
        <a href="#skills" className="hover:text-[#d1a3a3] transition">Skills</a>
        <a href="#projects" className="hover:text-[#d1a3a3] transition">Projects</a>
        <a href="#contact" className="hover:text-[#d1a3a3] transition">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;