import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowDown, ExternalLink } from 'lucide-react';

const roles = ['Full Stack Developer', 'AI Enthusiast', 'Cloud Learner', 'Problem Solver'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.1 },
    }),
  };

  return (
    <section id="hero" className="section-padding pt-32 md:pt-36 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ── Left: Text ── */}
          <div>
            <motion.span
              custom={0}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="badge-pink mb-6 inline-block"
            >
              👋 Hello, I'm
            </motion.span>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight mb-4"
            >
              Bhoomi Sunil Jain
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="text-xl md:text-2xl font-semibold mb-6 h-9"
            >
              <span className="text-gradient-blue">{displayed}</span>
              <span className="inline-block w-0.5 h-6 bg-blue-400 ml-0.5 animate-pulse" />
            </motion.div>

            <motion.p
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="text-brand-gray text-base md:text-lg leading-relaxed mb-8 max-w-lg"
            >
              B.Tech CSE student with strong skills in full-stack development,
              AI-based applications, and cloud technologies. Passionate about building
              intuitive, scalable digital products.
            </motion.p>

            {/* Buttons */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="flex flex-wrap gap-3 mb-8"
            >
              <a href="#projects" className="btn-primary">
                View Projects
                <ExternalLink size={15} />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/bhoomiijain"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-brand-dark hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/bhoomii"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <span className="text-sm text-brand-gray">bhoomijain1000@gmail.com</span>
            </motion.div>
          </div>

          {/* ── Right: Profile Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main profile card */}
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-4 border-white shadow-card-hover relative">
                {/* Gradient background as placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-pink-soft via-yellow-soft to-blue-soft flex flex-col items-center justify-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-white/60 backdrop-blur border-4 border-white shadow-lg flex items-center justify-center">
                    <span className="text-3xl font-bold text-brand-dark">BJ</span>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-brand-dark">Bhoomi Sunil Jain</p>
                    <p className="text-sm text-brand-gray">B.Tech CSE Student</p>
                  </div>
                </div>
              </div>

              {/* Floating badge: Skills */}
              <div className="absolute -left-10 top-8 glass rounded-xl px-4 py-2.5 shadow-card">
                <p className="text-xs text-brand-gray font-medium">Skills</p>
                <p className="text-sm font-bold text-brand-dark">React · Node · AI</p>
              </div>

              {/* Floating badge: Projects */}
              <div className="absolute -right-8 bottom-12 glass rounded-xl px-4 py-2.5 shadow-card">
                <p className="text-xs text-brand-gray font-medium">Projects</p>
                <p className="text-sm font-bold text-brand-dark">3+ Built</p>
              </div>

              {/* Floating badge: Status */}
              <div className="absolute left-4 -bottom-4 glass rounded-xl px-4 py-2.5 shadow-card flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-soft" />
                <p className="text-sm font-medium text-brand-dark">Open to Opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#skills"
            className="flex flex-col items-center gap-2 text-brand-gray hover:text-brand-dark transition-colors group"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scroll to explore</span>
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-400 transition-colors">
              <ArrowDown size={14} />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
