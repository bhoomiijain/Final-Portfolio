import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 px-12 mix-blend-difference"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="font-extrabold text-2xl tracking-tighter text-white border border-white/20 rounded-full px-6 py-2">
        BHOOMI JAIN <span className="text-softGrey font-normal text-sm ml-2">/ FRONTEND & AI</span>
      </div>
      
      <div className="hidden lg:flex items-center gap-2 bg-zinc-900 border border-white/20 rounded-full px-2 py-2">
        {['Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="text-white hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold rounded-full px-6 py-2"
          >
            {item}
          </a>
        ))}
      </div>
      
      <div className="hidden md:flex gap-2">
         {['IG', 'IN', 'GH'].map(social => (
            <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sm font-bold text-white hover:bg-white hover:text-black transition-all">
              {social}
            </a>
         ))}
      </div>
    </motion.nav>
  );
}
