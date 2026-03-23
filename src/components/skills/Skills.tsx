import { motion } from 'framer-motion';
import { useState } from 'react';

const categories = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'C++', 'HTML/CSS'],
    color: 'from-blue-400 to-cyan-400',
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
    color: 'from-purple-400 to-pink-400',
  },
  {
    title: 'Tools & DB',
    skills: ['Git', 'Docker', 'MongoDB', 'PostgreSQL', 'Figma', 'AWS'],
    color: 'from-green-400 to-emerald-400',
  },
  {
    title: 'Core Expertise',
    skills: ['Interaction Design', 'Team Leadership', 'Agile Methodology', 'UX Research'],
    color: 'from-orange-400 to-yellow-400',
  }
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="relative w-full min-h-screen py-20 px-6 lg:px-12 flex flex-col items-center justify-center overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="z-10 w-full max-w-[1400px] mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Technical <span className="text-softGrey font-normal">Expertise</span>
        </h2>
      </motion.div>

      <div className="z-10 w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-8 relative pb-20">
        {categories.map((cat, i) => (
          <motion.div 
            key={cat.title}
            className={`glass-panel p-8 md:p-12 relative overflow-visible transition-all duration-500`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-white tracking-wide">{cat.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, j) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    borderColor: hoveredIndex === i ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.2)',
                    color: hoveredIndex === i ? '#fff' : 'rgba(255,255,255,0.7)'
                  }}
                  transition={{ duration: 0.3, delay: j * 0.05 }}
                  className="glass-pill"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            
            <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 opacity-0 group-hover:opacity-100 transition-opacity">
               ↗
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
