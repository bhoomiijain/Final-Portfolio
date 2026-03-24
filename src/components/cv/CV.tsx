import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText, User, Briefcase, GraduationCap } from 'lucide-react';

const highlights = [
  { icon: User, label: 'B.Tech CSE', sub: 'Computer Science & Engineering' },
  { icon: Briefcase, label: '3+ Projects', sub: 'Full-Stack & AI' },
  { icon: GraduationCap, label: '5 Certifications', sub: 'Cloud, DSA, Networking' },
];

export default function CV() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="cv" className="section-padding bg-gray-50/60">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="section-label">Take a look</p>
          <h2 className="section-title">My CV</h2>
          <div className="divider bg-gradient-to-r from-blue-soft to-yellow-soft mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: CV Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card p-8 border border-gray-100"
          >
            {/* CV Paper mockup */}
            <div className="w-full bg-white border border-gray-100 rounded-xl p-6 shadow-sm mb-6">
              {/* Header bar */}
              <div className="flex items-center gap-4 mb-5 pb-4 border-b border-gray-100">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-soft to-blue-soft flex items-center justify-center shadow-sm flex-shrink-0">
                  <span className="text-lg font-bold text-brand-dark">BJ</span>
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-base">Bhoomi Sunil Jain</h3>
                  <p className="text-brand-gray text-xs">B.Tech Computer Science | Full Stack Developer</p>
                </div>
                <div className="ml-auto">
                  <FileText size={24} className="text-gray-300" />
                </div>
              </div>

              {/* Mock content lines */}
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-semibold text-brand-gray uppercase tracking-wider mb-2">Experience</div>
                  <div className="h-2 bg-gray-100 rounded-full w-full mb-1" />
                  <div className="h-2 bg-gray-100 rounded-full w-4/5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-brand-gray uppercase tracking-wider mb-2">Education</div>
                  <div className="h-2 bg-gray-100 rounded-full w-full mb-1" />
                  <div className="h-2 bg-gray-100 rounded-full w-3/5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-brand-gray uppercase tracking-wider mb-2">Skills</div>
                  <div className="flex gap-2 flex-wrap">
                    {['React', 'Node.js', 'Python', 'AWS', 'MongoDB'].map((s) => (
                      <span key={s} className="px-2 py-0.5 bg-blue-soft text-blue-700 rounded text-xs font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Download button */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="btn-primary w-full justify-center"
            >
              <Download size={16} />
              Download CV
            </a>
            <p className="text-xs text-center text-brand-gray mt-3">PDF · Updated 2024</p>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <h3 className="text-xl font-bold text-brand-dark">At a Glance</h3>
            <p className="text-brand-gray leading-relaxed">
              B.Tech CSE student passionate about crafting scalable web applications and exploring
              the intersection of AI and software development. I bring a blend of technical
              expertise and creative problem-solving to every project.
            </p>

            <div className="grid grid-cols-1 gap-4 mt-6">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-card transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-soft flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark text-sm">{item.label}</p>
                      <p className="text-brand-gray text-xs">{item.sub}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
