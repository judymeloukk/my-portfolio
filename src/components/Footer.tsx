import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-[#d1a3a3]/20 text-center bg-[#1a1a1a]">
      <p className="text-gray-500 font-light text-sm">
        © {new Date().getFullYear()} Judy Melouk. All rights reserved.
      </p>
      <div className="mt-4">
        <a href="#hero" className="text-[#d1a3a3] hover:underline text-sm uppercase tracking-widest">
          Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;