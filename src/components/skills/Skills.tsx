import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    icon: '{}',
    color: 'bg-pink-soft border-pink-medium/30',
    iconBg: 'bg-pink-medium/30 text-pink-700',
    skills: ['C++', 'JavaScript', 'C', 'PHP', 'Java', 'Python'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '⚡',
    color: 'bg-blue-soft border-blue-medium/30',
    iconBg: 'bg-blue-medium/30 text-blue-700',
    skills: ['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠',
    color: 'bg-yellow-soft border-yellow-medium/30',
    iconBg: 'bg-yellow-medium/30 text-yellow-700',
    skills: ['MySQL', 'MongoDB', 'AWS', 'Git', 'GitHub', 'VS Code', 'Canva'],
  },
  {
    title: 'Soft Skills',
    icon: '🤝',
    color: 'bg-white border-gray-100',
    iconBg: 'bg-gray-100 text-gray-600',
    skills: ['Problem-Solving', 'Team Collaboration', 'Adaptability', 'Leadership'],
  },
];

const cardColors: Record<string, string> = {
  'Languages': 'text-pink-700 bg-pink-soft/70',
  'Frameworks & Libraries': 'text-blue-700 bg-blue-soft/70',
  'Tools & Platforms': 'text-yellow-700 bg-yellow-soft/70',
  'Soft Skills': 'text-gray-700 bg-gray-100',
};

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className={`card p-6 border ${category.color}`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-base font-bold ${category.iconBg}`}>
          {category.icon}
        </div>
        <h3 className="font-semibold text-brand-dark text-base">{category.title}</h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm cursor-default ${cardColors[category.title]}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="section-padding bg-gray-50/60">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="section-label">What I work with</p>
          <h2 className="section-title">My Skills</h2>
          <div className="divider bg-gradient-to-r from-pink-soft to-blue-soft mx-auto mt-4" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
