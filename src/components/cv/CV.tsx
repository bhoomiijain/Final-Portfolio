import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function CV() {
  return (
    <section id="cv" className="relative w-full py-24 px-6 lg:px-12 flex flex-col items-center justify-center overflow-hidden">
      
      <div className="z-10 w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* CV Box (Image 2 styles) */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="glass-panel p-10 md:p-16 relative overflow-hidden group border-white/20 aspect-video flex flex-col justify-between"
        >
          <h2 className="text-7xl md:text-9xl font-bold mb-4 text-white tracking-tighter">
            CV
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
            <a href="#" className="glass-pill rounded-full border border-white/30 hover:bg-white hover:text-black hover:border-white px-8 py-3 w-full sm:w-auto text-base transition-all duration-300 flex items-center justify-between group/btn gap-12">
              Download <Download size={18} className="group-hover/btn:translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* About Box (Image 2 style) */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="glass-panel p-10 md:p-16 relative overflow-hidden group border-white/20 aspect-video flex flex-col"
        >
          <h3 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">About</h3>
          <p className="text-softGrey leading-loose text-lg font-light mb-8">
            Hi, I'm Bhoomi. I am a frontend developer using modern innovation to build products that are intuitive, intelligent, and a pleasure to use. My passion is turning deep user research into resonant experiences that don't just solve problems, but create delight. My goal is to bridge the gap between human needs and technology, making digital tools feel more natural.
          </p>

          <a href="#projects" className="mt-auto inline-flex items-center gap-2 px-6 py-4 bg-zinc-800 text-white rounded-xl hover:bg-zinc-700 transition-colors w-full justify-between">
            View My Work ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
