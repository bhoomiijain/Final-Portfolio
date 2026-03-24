import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Award } from 'lucide-react';

const certifications = [
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    color: 'border-l-blue-400',
    bg: 'hover:bg-blue-50/50',
    badge: 'badge-blue',
    link: '#',
  },
  {
    title: 'Computer Networking',
    issuer: 'Coursera',
    color: 'border-l-pink-400',
    bg: 'hover:bg-pink-50/50',
    badge: 'badge-pink',
    link: '#',
  },
  {
    title: 'Data Structures & Algorithms',
    issuer: 'GeeksforGeeks',
    color: 'border-l-green-400',
    bg: 'hover:bg-green-50/50',
    badge: 'badge-yellow',
    link: '#',
  },
  {
    title: 'Python Training',
    issuer: 'Code Sprint',
    color: 'border-l-yellow-400',
    bg: 'hover:bg-yellow-50/50',
    badge: 'badge-yellow',
    link: '#',
  },
  {
    title: 'Leadership',
    issuer: 'Saylor Academy',
    color: 'border-l-purple-400',
    bg: 'hover:bg-purple-50/50',
    badge: 'badge-pink',
    link: '#',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="certifications" className="section-padding bg-gray-50/60">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="section-label">What I've earned</p>
          <h2 className="section-title">Certifications</h2>
          <div className="divider bg-gradient-to-r from-yellow-soft to-pink-soft mx-auto mt-4" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className={`card p-6 border-l-4 ${cert.color} ${cert.bg} flex items-start gap-4 group cursor-pointer`}
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Award size={18} className="text-brand-gray" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-brand-dark text-sm mb-1 group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
                <span className={`${cert.badge} text-xs`}>{cert.issuer}</span>
              </div>
              <ExternalLink
                size={14}
                className="text-gray-300 group-hover:text-brand-gray transition-colors flex-shrink-0 mt-0.5"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
