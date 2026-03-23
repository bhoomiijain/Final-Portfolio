import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

const certs = [
  { id: 1, title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: '2023', link: '#' },
  { id: 2, title: 'Frontend Developer (React)', issuer: 'HackerRank', date: '2023', link: '#' },
  { id: 3, title: 'Google IT Automation with Python', issuer: 'Coursera', date: '2022', link: '#' },
  { id: 4, title: 'Machine Learning Specialization', issuer: 'DeepLearning.AI', date: '2024', link: '#' },
];

const FlipCard = ({ cert }: { cert: typeof certs[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-72 perspective-[1500px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full preserve-3d relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden glass-panel p-6 flex flex-col items-center justify-center text-center group border-white/10 hover:border-violetGlow/50 transition-colors duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <Award className="w-16 h-16 text-electricBlue mb-6 group-hover:scale-110 group-hover:text-violetGlow transition-all duration-500" />
          <h3 className="text-xl font-bold text-white mb-2 leading-tight">{cert.title}</h3>
          <p className="text-softGrey text-sm font-medium">{cert.issuer}</p>
          <div className="absolute top-4 right-4 animate-pulse">
            <div className="w-2.5 h-2.5 rounded-full bg-violetGlow shadow-[0_0_10px_rgba(128,0,255,0.8)]" />
          </div>
          <p className="absolute bottom-4 text-xs text-softGrey/50 opacity-0 group-hover:opacity-100 transition-opacity">Click to flip</p>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden glass-panel p-6 flex flex-col items-center justify-center text-center bg-white/5 border-electricBlue/30 shadow-[0_0_30px_rgba(0,240,255,0.15)]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <p className="text-softGrey mb-3 text-sm font-semibold tracking-wider uppercase">Issued: {cert.date}</p>
          <h3 className="text-xl font-bold text-white mb-8 leading-tight">{cert.title}</h3>
          
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="glass-button py-2.5 px-6 text-sm bg-electricBlue/20 border-electricBlue/40 hover:bg-electricBlue/30 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all flex items-center gap-2 group"
          >
            Verify Credential <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative w-full min-h-screen py-24 flex flex-col items-center justify-center border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violetGlow/5 via-zinc-950 to-zinc-950 z-0 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="z-10 text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-violetGlow">Certifications</span>
        </h2>
        <p className="text-softGrey font-light text-lg">Click cards to flip and verify credentials</p>
      </motion.div>

      <div className="z-10 w-full max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {certs.map((cert) => (
          <FlipCard key={cert.id} cert={cert} />
        ))}
      </div>
    </section>
  );
}
