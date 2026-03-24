import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Certifications from './components/certifications/Certifications';
import Achievements from './components/achievements/Achievements';
import CV from './components/cv/CV';
import Contact from './components/contact/Contact';
import AIAssistant from './components/ai/AIAssistant';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-white text-brand-dark overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <CV />
        <Contact />
      </main>
      <AIAssistant />
    </div>
  );
}

export default App;
