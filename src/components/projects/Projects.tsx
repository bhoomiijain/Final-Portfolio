import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'SmartLearn',
    description:
      'Full-stack education platform with role-based access control for students, instructors, and administrators. Features course management, progress tracking, and interactive dashboards.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    accent: 'bg-blue-soft',
    badge: 'badge-blue',
    badgeText: 'Full-Stack',
    github: 'https://github.com/bhoomiijain',
    demo: '#',
  },
  {
    title: 'Tagtopia',
    description:
      'E-library management system for managing books, members, and borrowing records. Supports user login, book search, and admin management panel.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
    accent: 'bg-pink-soft',
    badge: 'badge-pink',
    badgeText: 'Web App',
    github: 'https://github.com/bhoomiijain',
    demo: '#',
  },
  {
    title: 'Airport Lounge Finder',
    description:
      'AI-powered chatbot that provides lounge recommendations for airports worldwide. Integrates Gemini API to offer smart, context-aware suggestions.',
    tech: ['JavaScript', 'Gemini API'],
    accent: 'bg-yellow-soft',
    badge: 'badge-yellow',
    badgeText: 'AI / Chatbot',
    github: 'https://github.com/bhoomiijain',
    demo: '#',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
      className="card flex flex-col overflow-hidden group"
    >
      {/* Accent banner */}
      <div className={`h-2 w-full ${project.accent}`} />

      <div className="p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className={`${project.badge} mb-2 inline-block`}>{project.badgeText}</span>
            <h3 className="text-xl font-bold text-brand-dark group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="text-brand-gray text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex-1 justify-center text-xs py-2.5"
          >
            <Github size={14} />
            View Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 justify-center text-xs py-2.5"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="section-label">What I've built</p>
          <h2 className="section-title">Projects</h2>
          <div className="divider bg-gradient-to-r from-blue-soft to-pink-soft mx-auto mt-4" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
