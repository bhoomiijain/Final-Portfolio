import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Simple keyword-based response engine
function getResponse(input: string): string {
  const q = input.toLowerCase();

  if (q.includes('skill') || q.includes('technology') || q.includes('know')) {
    return "Bhoomi is skilled in:\n• **Languages**: C++, JavaScript, Python, Java, PHP, C\n• **Frameworks**: React.js, Node.js, Express.js, Tailwind CSS, Bootstrap\n• **Tools**: MySQL, MongoDB, AWS, Git, VS Code";
  }

  if (q.includes('project')) {
    return "Bhoomi has built three key projects:\n1. **SmartLearn** – Full-stack education platform (React, Node, MongoDB)\n2. **Tagtopia** – E-library system (PHP, MySQL, Bootstrap)\n3. **Airport Lounge Finder** – AI chatbot using Gemini API";
  }

  if (q.includes('certification') || q.includes('certificate') || q.includes('course')) {
    return "Bhoomi holds certifications in:\n• Cloud Computing – NPTEL\n• Computer Networking – Coursera\n• DSA – GeeksforGeeks\n• Python Training – Code Sprint\n• Leadership – Saylor Academy";
  }

  if (q.includes('achievement') || q.includes('award') || q.includes('accomplishment')) {
    return "Bhoomi's achievements include:\n• O grade in Data Structures\n• 2nd position in aptitude competition\n• Cyber-security event organizer\n• DriveDev PR Manager\n• Hackathon participant";
  }

  if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('phone')) {
    return "You can reach Bhoomi at:\n📧 bhoomijain1000@gmail.com\n📞 +91-7666949367\n🐙 github.com/bhoomiijain\n💼 linkedin.com/in/bhoomii";
  }

  if (q.includes('education') || q.includes('degree') || q.includes('college') || q.includes('study')) {
    return "Bhoomi is pursuing a B.Tech in Computer Science Engineering (CSE). She has strong expertise in full-stack development, AI applications, and cloud technologies.";
  }

  if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
    return "Hello! 👋 I'm Bhoomi's AI assistant. Ask me about her skills, projects, certifications, achievements, or contact info!";
  }

  return "I can help with questions about Bhoomi's **skills**, **projects**, **certifications**, **achievements**, or **contact info**. What would you like to know? 😊";
}

function parseMarkdown(text: string) {
  return text.split('\n').map((line, i) => {
    const bold = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    return <p key={i} className={line.startsWith('•') || /^\d+\./.test(line) ? 'ml-2' : ''} dangerouslySetInnerHTML={{ __html: bold }} />;
  });
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! 👋 I'm Bhoomi's AI assistant. Ask me anything about her skills, projects, or how to reach her!" }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: 'user', content: input };
    const botMsg: Message = { role: 'assistant', content: getResponse(input) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-brand-dark text-white shadow-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
        aria-label="AI Assistant"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl shadow-card-hover overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-dark px-5 py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Bhoomi's Assistant</p>
                <p className="text-white/60 text-xs">Ask me anything!</p>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs">Online</span>
              </div>
            </div>

            {/* Messages */}
            <div className="bg-white h-72 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed space-y-0.5 ${
                      msg.role === 'user'
                        ? 'bg-brand-dark text-white rounded-br-sm'
                        : 'bg-gray-50 text-brand-dark border border-gray-100 rounded-bl-sm'
                    }`}
                  >
                    {parseMarkdown(msg.content)}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            <div className="bg-gray-50 px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
              {['Skills', 'Projects', 'Contact'].map((s) => (
                <button
                  key={s}
                  onClick={() => { setInput(s); }}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-gray-200 text-brand-gray hover:border-gray-300 hover:text-brand-dark whitespace-nowrap transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="bg-white border-t border-gray-100 px-4 py-3 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Bhoomi..."
                className="flex-1 px-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <button
                onClick={handleSend}
                className="w-9 h-9 rounded-full bg-brand-dark text-white flex items-center justify-center hover:bg-gray-800 transition-colors flex-shrink-0"
                aria-label="Send"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
