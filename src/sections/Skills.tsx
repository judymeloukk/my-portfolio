import React from 'react';

const skillCategories = [
  {
    category: "Programming & Frameworks",
    skills: ["Python", "C++", "TypeScript", "JavaScript", "Next.js", "React", "Tailwind CSS"]
  },
  {
    category: "Specialized Fields & Tools",
    skills: ["Artificial Intelligence (AI)", "Robotics Systems", "OS Scheduling & Simulation", "Git & GitHub"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-10 bg-[#1a1a1a]">
      <h2 className="text-4xl font-light mb-12 text-center text-[#d1a3a3]">Skills & Expertise</h2>
      <div className="max-w-4xl mx-auto space-y-10">
        {skillCategories.map((cat, index) => (
          <div key={index} className="border-[0.5px] border-[#d1a3a3]/20 p-6 bg-[#222222]">
            <h3 className="text-lg font-light mb-4 text-[#d1a3a3] uppercase tracking-wider">{cat.category}</h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 border border-[#d1a3a3]/40 text-gray-300 font-light text-sm hover:border-[#d1a3a3] transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;