import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-10 bg-[#1a1a1a] text-center">
      <h2 className="text-4xl font-light mb-12 text-[#d1a3a3]">Let's Connect</h2>
      <p className="text-gray-400 font-light mb-8 max-w-xl mx-auto">
        I'm always open to discussing new projects, internships, or opportunities. 
        Feel free to reach out via email or connect with me on LinkedIn.
      </p>
      <a 
        href="mailto:judymelouk@gmail.com" 
        className="inline-block px-8 py-3 border border-[#d1a3a3] text-[#d1a3a3] hover:bg-[#d1a3a3] hover:text-black transition-all duration-500"
      >
        Send Me an Email
      </a>
    </section>
  );
};

export default Contact;