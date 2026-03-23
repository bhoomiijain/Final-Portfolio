import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import React from 'react';

const projects = [
  {
    title: 'SmartLearn',
    description: 'An intelligent learning platform leveraging AI to provide personalized study paths in real-time.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    demoUrl: '#',
    codeUrl: '#',
    tags: ['Next.js', 'OpenAI API', 'Tailwind']
  },
  {
    title: 'Tagtopia',
    description: 'A modern bookmarking and link management system with semantic auto-tagging and neural search.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    demoUrl: '#',
    codeUrl: '#',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Lounge Finder',
    description: 'Interactive real-time application to locate, rate, and access premium airport lounges globally.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop',
    demoUrl: '#',
    codeUrl: '#',
    tags: ['TypeScript', 'Express', 'PostgreSQL']
  }
];

const TiltCard = ({ project }: { project: typeof projects[0] }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-panel group relative flex flex-col h-[450px] cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      {/* 3D Depth element for inner content */}
      <div 
        style={{ transform: "translateZ(80px)" }} 
        className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none z-20"
      >
        <div className="bg-zinc-950/90 backdrop-blur-xl p-6 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto transform translate-y-4 group-hover:translate-y-0">
          <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-softGrey mb-4 text-sm leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs px-2 py-1 bg-electricBlue/10 rounded-md text-electricBlue border border-electricBlue/20">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <a href={project.demoUrl} className="flex-1 glass-button py-2 px-0 text-sm bg-electricBlue/20 border-electricBlue/40 hover:bg-electricBlue/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
              <ExternalLink size={16} /> Demo
            </a>
            <a href={project.codeUrl} className="flex-1 glass-button py-2 px-0 text-sm bg-white/5 border-white/20 hover:bg-white/10 transition-all">
              <Github size={16} /> Code
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-full p-2 absolute inset-0 z-10">
        <div className="w-full h-full rounded-xl overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-colors">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent group-hover:opacity-30 transition-opacity duration-300" />
          <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300 transform" style={{ transform: "translateZ(30px)" }}>
             <h3 className="text-3xl font-extrabold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-white">{project.title}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative w-full min-h-screen py-24 flex flex-col items-center justify-center border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-electricBlue/5 via-zinc-950 to-zinc-950 z-0 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="z-10 text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-violetGlow">Projects</span>
        </h2>
        <p className="text-softGrey">Hover over cards for 3D exploration</p>
      </motion.div>

      <div 
        className="z-10 w-full max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-3 gap-8"
        style={{ perspective: "1500px" }}
      >
        {projects.map((project, i) => (
          <TiltCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
