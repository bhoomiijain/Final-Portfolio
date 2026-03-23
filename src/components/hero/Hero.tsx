import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen pt-32 pb-16 px-6 lg:px-12 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch h-full min-h-[70vh]">
        
        {/* Left Side: 3D Orb Card (similar to the image card in Image 3) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel w-full h-[50vh] lg:h-auto min-h-[400px] relative flex flex-col justify-end p-8 overflow-hidden group"
        >
          {/* 3D Background */}
          <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={2} />
              <directionalLight position={[-10, -10, -5]} intensity={1} color="#8000ff" />
              <Sphere visible args={[1, 100, 200]} scale={1.5}>
                <MeshDistortMaterial
                  color="#00f0ff"
                  attach="material"
                  distort={0.5}
                  speed={2}
                  roughness={0.1}
                  metalness={0.8}
                />
              </Sphere>
              <OrbitControls enableZoom={false} enablePan={false} autoRotate speed={1} />
            </Canvas>
          </div>
          
          <div className="relative z-10 flex justify-between items-end">
            <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 text-white font-medium shadow-lg">
              Creative Developer
            </div>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-md bg-white/5">
              ↓
            </div>
          </div>
        </motion.div>

        {/* Right Side: Typography & CTAs (similar to right panel in Image 3) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="glass-panel w-full h-full flex flex-col justify-center p-12 lg:p-16 relative"
        >
          <div className="absolute top-12 right-12 w-32 h-32 bg-violetGlow/20 blur-[60px] rounded-full" />
          
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-white mb-8">
            <span id="hero-name" className="block text-white cursor-crosshair">
              Bhoomi Jain
            </span>
            <span className="text-softGrey">Crafting Digital</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-violetGlow">
              Experiences.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-softGrey mb-12 font-light max-w-xl leading-relaxed">
            I am a developer leveraging AI and modern web technologies to build products that are scalable, intelligent, and a pleasure to use.
          </p>

          <div className="flex flex-wrap gap-4 mt-auto">
            <a href="#projects" className="glass-button w-full sm:w-auto text-lg px-8 py-4 bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-colors">
              View My Work ↗
            </a>
            <a href="#contact" className="glass-button w-full sm:w-auto text-lg px-8 py-4 bg-zinc-900 border border-white/20 text-white font-bold hover:bg-zinc-800 transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
