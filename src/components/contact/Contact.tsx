import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Mail, Phone, Send, MapPin } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real project, send form data to a backend or email service
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="section-label">Let's talk</p>
          <h2 className="section-title">Get in Touch</h2>
          <div className="divider bg-gradient-to-r from-pink-soft to-blue-soft mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-brand-dark mb-3">Let's Work Together</h3>
            <p className="text-brand-gray leading-relaxed mb-8">
              I'm open to internship opportunities, collaborative projects, and new challenges.
              Feel free to reach out — I'd love to connect!
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-pink-soft flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-pink-600" />
                </div>
                <div>
                  <p className="text-xs text-brand-gray font-medium uppercase tracking-wide mb-0.5">Email</p>
                  <a
                    href="mailto:bhoomijain1000@gmail.com"
                    className="text-sm font-semibold text-brand-dark hover:text-blue-600 transition-colors"
                  >
                    bhoomijain1000@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-soft flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-brand-gray font-medium uppercase tracking-wide mb-0.5">Phone</p>
                  <a
                    href="tel:+917666949367"
                    className="text-sm font-semibold text-brand-dark hover:text-blue-600 transition-colors"
                  >
                    +91-7666949367
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-yellow-soft flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-yellow-600" />
                </div>
                <div>
                  <p className="text-xs text-brand-gray font-medium uppercase tracking-wide mb-0.5">Location</p>
                  <p className="text-sm font-semibold text-brand-dark">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card p-7 space-y-5">
              <div>
                <label className="block text-xs font-semibold text-brand-gray uppercase tracking-wide mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-brand-dark placeholder-gray-300 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-gray uppercase tracking-wide mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-brand-dark placeholder-gray-300 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-gray uppercase tracking-wide mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hello! I'd love to discuss..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-brand-dark placeholder-gray-300 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                />
              </div>

              {sent && (
                <div className="px-4 py-3 bg-green-50 border border-green-100 text-green-700 text-sm rounded-xl font-medium">
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}

              <button type="submit" className="btn-primary w-full justify-center py-3.5">
                <Send size={15} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="section-container mt-20 pt-8 border-t border-gray-100 text-center">
        <p className="text-sm text-brand-gray">
          © {new Date().getFullYear()} Bhoomi Sunil Jain · Built with React & Tailwind CSS
        </p>
      </div>
    </section>
  );
}
