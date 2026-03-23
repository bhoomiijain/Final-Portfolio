import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1500);
  };

  return (
    <section id="contact" className="relative w-full min-h-screen py-24 px-6 lg:px-12 flex flex-col items-center justify-center overflow-hidden">
      
      <div className="z-10 w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-transparent rounded-[3rem] p-8 md:p-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-electricBlue/10 to-violetGlow/10 rounded-[3rem] -z-10 opacity-50" />
        
        {/* Contact Info Typography (Image 1 style) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-white tracking-tight leading-[1]">
            Drop Me <br/><span className="text-softGrey font-normal">a Line</span>
          </h2>
          <div className="flex gap-8 mt-12 text-sm text-softGrey font-medium tracking-wide">
             <a href="#" className="hover:text-white transition-colors underline underline-offset-4">Instagram</a>
             <a href="#" className="hover:text-white transition-colors underline underline-offset-4">LinkedIn</a>
             <a href="#" className="hover:text-white transition-colors underline underline-offset-4">GitHub</a>
          </div>
          
          <div className="mt-16 text-softGrey text-sm leading-loose">
            info@mysite.com <br/>
            123-456-7890
          </div>
        </motion.div>

        {/* Form (Image 1 minimalist style) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-lg"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <input 
                  type="text" 
                  required
                  placeholder="First Name *"
                  className="w-full bg-transparent border-0 border-b border-softGrey/30 px-0 py-3 text-white placeholder-softGrey/70 focus:outline-none focus:border-white transition-colors focus:ring-0 text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input 
                  type="text" 
                  required
                  placeholder="Last Name *"
                  className="w-full bg-transparent border-0 border-b border-softGrey/30 px-0 py-3 text-white placeholder-softGrey/70 focus:outline-none focus:border-white transition-colors focus:ring-0 text-sm"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                required
                placeholder="Email *"
                className="w-full bg-transparent border-0 border-b border-softGrey/30 px-0 py-3 text-white placeholder-softGrey/70 focus:outline-none focus:border-white transition-colors focus:ring-0 text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <textarea 
                required
                rows={1}
                placeholder="Your message"
                className="w-full bg-transparent border-0 border-b border-softGrey/30 px-0 py-3 text-white placeholder-softGrey/70 focus:outline-none focus:border-white transition-colors focus:ring-0 text-sm resize-none"
              />
            </div>

            <button 
              type="submit"
              disabled={status !== 'idle'}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-4 mt-8 font-semibold transition-colors disabled:opacity-50 flex justify-center items-center gap-2"
            >
              {status === 'idle' ? (
                <>Send <Send size={16} /></>
              ) : status === 'sending' ? (
                'Sending...'
              ) : (
                'Message Sent ✓'
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
