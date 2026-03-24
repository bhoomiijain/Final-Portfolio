import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Star, Shield, Users, Code } from 'lucide-react';

const achievements = [
  {
    icon: Star,
    title: 'O Grade in Data Structures',
    description: 'Achieved outstanding grade in the Data Structures course, demonstrating exceptional understanding of algorithms and complexity.',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    border: 'border-yellow-100',
  },
  {
    icon: Trophy,
    title: '2nd Position – Aptitude Competition',
    description: 'Secured second place in an inter-college aptitude competition, showcasing strong analytical and problem-solving skills.',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    border: 'border-pink-100',
  },
  {
    icon: Shield,
    title: 'Cyber-Security Event Organizer',
    description: 'Organized and managed a cyber-security awareness event, coordinating speakers, logistics, and participant engagement.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: Users,
    title: 'DriveDev PR Manager',
    description: 'Served as Public Relations Manager for DriveDev, handling communications, outreach, and community building.',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
  {
    icon: Code,
    title: 'Hackathon Participant',
    description: 'Actively participated in hackathons, collaborating with teams to build innovative solutions under tight deadlines.',
    color: 'text-green-500',
    bg: 'bg-green-50',
    border: 'border-green-100',
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="achievements" className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="section-label">What I've accomplished</p>
          <h2 className="section-title">Achievements</h2>
          <div className="divider bg-gradient-to-r from-pink-soft to-yellow-soft mx-auto mt-4" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09, ease: 'easeOut' }}
                className={`card p-6 border ${item.border} group`}
              >
                <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                  <Icon size={20} className={item.color} />
                </div>
                <h3 className="font-semibold text-brand-dark text-sm mb-2">{item.title}</h3>
                <p className="text-brand-gray text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
