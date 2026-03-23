import Hero from './components/hero/Hero';
import Navbar from './components/layout/Navbar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Certifications from './components/certifications/Certifications';
import Achievements from './components/achievements/Achievements';
import CV from './components/cv/CV';
import Contact from './components/contact/Contact';
import AIAssistant from './components/ai/AIAssistant';
import EasterEggs from './components/interactive/EasterEggs';

import { ReactLenis } from '@studio-freight/react-lenis';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      <main className="relative w-full min-h-screen bg-zinc-950 text-white overflow-x-hidden selection:bg-electricBlue selection:text-black">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <CV />
        <Contact />
        <AIAssistant />
        <EasterEggs />
      </main>
    </ReactLenis>
  );
}

export default App;
