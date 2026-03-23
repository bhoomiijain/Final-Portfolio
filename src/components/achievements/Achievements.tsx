import { motion } from 'framer-motion';
import { Trophy, Star, TrendingUp, Users } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Hackathon Winner',
    description: '1st Place at NeuralHacks 2024 for building an AI-powered accessibility tool that translates sign language in real-time.',
    icon: Trophy,
    colSpan: 'md:col-span-2 lg:col-span-2',
    color: 'from-orange-400 to-amber-500',
    delay: 0.1,
  },
  {
    id: 2,
    title: 'Top 1% Contributor',
    description: 'Recognized for significant contributions to the Open Source React ecosystem.',
    icon: Star,
    colSpan: 'md:col-span-1 lg:col-span-1',
    color: 'from-purple-400 to-pink-500',
    delay: 0.2,
  },
  {
    id: 3,
    title: 'Fastest Growing App',
    description: 'Tagtopia reached 10,000 active users within its first month of launch without marketing spend.',
    icon: TrendingUp,
    colSpan: 'md:col-span-1 lg:col-span-1',
    color: 'from-green-400 to-emerald-500',
    delay: 0.3,
  },
  {
    id: 4,
    title: 'Mentored 50+ Students',
    description: 'Led immersive workshops on Web3 and advanced frontend engineering at prestigious universities.',
    icon: Users,
    colSpan: 'md:col-span-2 lg:col-span-2',
    color: 'from-blue-400 to-cyan-500',
    delay: 0.4,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative w-full min-h-screen py-24 flex flex-col items-center justify-center border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-electricBlue/5 via-zinc-950 to-zinc-950 z-0 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="z-10 text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
          Milestones & <span className="text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-violetGlow">Achievements</span>
        </h2>
        <p className="text-softGrey font-light text-lg">Highlights of my journey so far</p>
      </motion.div>

      <div className="z-10 w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
        {achievements.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: item.delay, type: "spring" }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className={`glass-panel p-8 relative overflow-hidden group flex flex-col justify-between cursor-default border-white/5 hover:border-white/20 ${item.colSpan}`}
            >
              <div className={`absolute -inset-px opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${item.color} rounded-2xl`} style={{ filter: 'blur(20px)' }} />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${item.color} shadow-[0_4px_20px_rgba(0,0,0,0.5)] transform group-hover:-translate-y-2 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide drop-shadow-md">{item.title}</h3>
                <p className="text-softGrey font-light leading-relaxed flex-grow">{item.description}</p>
              </div>
              
              <div className="absolute right-0 bottom-0 w-48 h-48 opacity-[0.02] group-hover:opacity-10 transition-all duration-700 transform translate-x-1/4 pt-8 text-white pointer-events-none group-hover:-translate-y-4 group-hover:-rotate-12">
                 <Icon className="w-full h-full" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
