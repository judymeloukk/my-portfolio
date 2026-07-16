import React from 'react';

const projects = [
  {
    title: "Project Lightning McQueen (GRC Finals)",
    desc: "4WD RC F1 car developed with ESP stability control, custom hardware integration, and advanced tuning for high-speed performance[cite: 1]."
  },
  {
    title: "Factory Management Dashboard",
    desc: "A centralized dashboard built with Next.js and Tailwind CSS to simplify inventory, production, and quality-control tracking[cite: 1]."
  },
  {
    title: "CPU Scheduling Simulator",
    desc: "Python-based OS simulator implementing FCFS and SJF scheduling algorithms with GUI visualization[cite: 1]."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-10 bg-[#1a1a1a]">
      <h2 className="text-4xl font-light mb-12 text-center text-[#d1a3a3]">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, index) => (
          <div key={index} className="p-8 border-[0.5px] border-[#d1a3a3]/30 rounded-none hover:border-[#d1a3a3] transition-all duration-500 bg-[#222222]">
            <h3 className="text-xl font-light mb-4 text-[#d1a3a3]">{p.title}</h3>
            <p className="text-gray-400 font-light leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;