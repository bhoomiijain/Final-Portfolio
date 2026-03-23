import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send } from 'lucide-react';

const portfolioData = {
  skills: "My top skills include TypeScript, React, Next.js, Framer Motion, Three.js along with Python and Node.js.",
  projects: "I've built SmartLearn (AI learning platform), Tagtopia (bookmark manager), and Airport Lounge Finder.",
  certifications: "I have certifications in AWS Cloud Practitioner, Frontend React, Google IT Automation, and ML from DeepLearning.AI.",
  achievements: "I won 1st Place at NeuralHacks 2024, mentored 50+ students, and contributed to Open Source React.",
  contact: "You can reach me at bhoomijain1000@gmail.com or call +91-7666949367.",
};

const getResponse = (query: string): string => {
  const q = query.toLowerCase();
  if (q.includes('skill') || q.includes('tech') || q.includes('language')) return portfolioData.skills;
  if (q.includes('project') || q.includes('build') || q.includes('work') || q.includes('portfolio')) return portfolioData.projects;
  if (q.includes('cert') || q.includes('degree') || q.includes('learn')) return portfolioData.certifications;
  if (q.includes('achieve') || q.includes('win') || q.includes('award') || q.includes('hackathon')) return portfolioData.achievements;
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach')) return portfolioData.contact;
  
  return "I'm Bhoomi's AI assistant. You can ask me about her skills, projects, certifications, or achievements!";
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Hi! I'm Bhoomi's AI Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: getResponse(userMsg) }]);
    }, 600);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 w-16 h-16 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 shadow-[0_0_25px_rgba(0,240,255,0.3)] flex items-center justify-center hover:bg-white/10 transition-all group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-electricBlue to-violetGlow opacity-30 group-hover:opacity-50 transition-opacity" />
            <Bot size={28} className="text-white group-hover:scale-110 group-hover:rotate-12 transition-all relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            
            <span className="absolute flex h-full w-full">
              <span className="animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] absolute inline-flex h-full w-full rounded-full bg-electricBlue opacity-30"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 w-[90vw] sm:w-[380px] h-[500px] max-h-[80vh] bg-zinc-950/90 backdrop-blur-2xl rounded-2xl flex flex-col shadow-[0_10px_50px_rgba(0,0,0,0.6)] border border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/5 bg-gradient-to-r from-white/5 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electricBlue to-violetGlow flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <Bot size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm tracking-wide">AI Assistant</h3>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs text-softGrey font-medium">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors text-softGrey hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 no-scrollbar scroll-smooth">
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-gradient-to-r from-electricBlue/20 to-electricBlue/10 text-white rounded-br-sm border border-electricBlue/20 shadow-[0_4px_15px_rgba(0,240,255,0.05)]' 
                        : 'bg-white/5 text-softGrey rounded-bl-sm border border-white/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} className="h-1" />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/5 bg-black/20">
              <form onSubmit={handleSend} className="flex gap-2 relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3.5 text-sm text-white placeholder-softGrey/50 focus:outline-none focus:border-electricBlue/50 focus:bg-white/10 transition-all pr-12 shadow-inner"
                />
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-1 top-1 w-[38px] h-[38px] rounded-full flex items-center justify-center bg-gradient-to-r from-electricBlue to-violetGlow text-white disabled:opacity-50 disabled:grayscale transition-all shadow-md group"
                >
                  <Send size={16} className="ml-1 group-disabled:ml-0 transition-all" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
