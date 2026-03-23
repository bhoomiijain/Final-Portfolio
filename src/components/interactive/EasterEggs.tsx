import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EasterEggs() {
  const [konamiActive, setKonamiActive] = useState(false);
  const [showSecretMessage, setShowSecretMessage] = useState(false);
  const [physicsMode, setPhysicsMode] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Easter Egg Trackers
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    let clickCount = 0;
    let clickTimer: NodeJS.Timeout;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Konami Check
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setKonamiActive(true);
          konamiIndex = 0;
          setTimeout(() => setKonamiActive(false), 5000);
        }
      } else {
        konamiIndex = 0;
      }

      // 'B' Key check for Physics Mode
      if (e.key.toLowerCase() === 'b' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        setPhysicsMode(prev => !prev);
      }
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Trigger on name click
      if (target.closest('#hero-name')) {
        clickCount++;
        clearTimeout(clickTimer);
        
        if (clickCount >= 5) {
          setShowSecretMessage(true);
          clickCount = 0;
          setTimeout(() => setShowSecretMessage(false), 4000);
        } else {
          clickTimer = setTimeout(() => { clickCount = 0; }, 2000);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleGlobalClick);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  // Physics Particles Engine
  useEffect(() => {
    if (!physicsMode || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let resizeTimer: NodeJS.Timeout;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 100);
    });

    let particles: {x: number, y: number, vx: number, vy: number, r: number, color: string}[] = [];
    const colors = ['#00f0ff', '#8000ff', '#ffffff'];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        r: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let mouse = { x: -1000, y: -1000 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        
        // Move
        p.x += p.vx;
        p.y += p.vy;
        
        // Bounce
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse repel
        let dx = p.x - mouse.x;
        let dy = p.y - mouse.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          let force = (150 - dist) / 150;
          p.vx += (dx / dist) * force * 2;
          p.vy += (dy / dist) * force * 2;
        }

        // Friction
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Default movement drift if too slow
        if (Math.abs(p.vx) < 0.2) p.vx += (Math.random() - 0.5) * 0.1;
        if (Math.abs(p.vy) < 0.2) p.vy += (Math.random() - 0.5) * 0.1;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        
        // Glowing effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      }
      
      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          let p1 = particles[i];
          let p2 = particles[j];
          let dx = p1.x - p2.x;
          let dy = p1.y - p2.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.2 - dist/400})`;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [physicsMode]);

  return (
    <>
      {/* Physics Canvas Overlay */}
      {physicsMode && (
        <div className="fixed inset-0 z-[40] pointer-events-none mix-blend-screen">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 bg-zinc-950/80 p-4 rounded-xl border border-electricBlue text-white font-mono z-[60] text-center"
          >
            <p className="text-electricBlue font-bold animate-pulse">PHYSICS MODE ENGAGED</p>
            <p className="text-xs text-softGrey mt-2">Press 'B' again to disable</p>
          </motion.div>
        </div>
      )}

      {/* Secret Confetti / Message */}
      <AnimatePresence>
        {showSecretMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-1/4 left-1/2 -translate-x-1/2 z-[100] bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-violetGlow shadow-[0_0_50px_rgba(128,0,255,0.5)] flex flex-col items-center"
          >
            <div className="text-4xl mb-4">🎉🚀✨</div>
            <h3 className="text-2xl font-bold text-white mb-2">You found the hidden layer!</h3>
            <p className="text-softGrey text-center">I admire your curiosity. Did you know you can press 'B'?</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Konami Neon Mode Overrides */}
      {konamiActive && (
        <style dangerouslySetInnerHTML={{__html: `
          body { filter: invert(1) hue-rotate(180deg); transition: filter 1s ease; }
          .glass-panel { box-shadow: 0 0 50px rgba(0,255,0,0.5) !important; border-color: #0f0 !important; }
          .text-gradient { background-image: linear-gradient(to right, #0f0, #ff0) !important; }
        `}} />
      )}
    </>
  );
}
