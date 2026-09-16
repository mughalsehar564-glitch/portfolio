import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      subject: e.target[2].value,
      message: e.target[3].value,
    };

    try {
      const API_BASE_URL = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        alert(data.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error('Frontend Error:', error);
      setStatus('error');
      alert('Could not connect to the server. Make sure the backend is running!');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-deepBlack/50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-neonBlue">Connect</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-10 max-w-lg">
              Have a project in mind or just want to say hi? Feel free to reach out. 
              I'm always open to discussing new projects, creative ideas or opportunities.
            </p>

            <div className="space-y-6 md:space-y-8 mb-12">
              {[
                { icon: FaEnvelope, label: 'Email', value: 'seharshahzadi153gmail.com' },
                { icon: FaWhatsapp, label: 'WhatsApp', value: '+92 196893939' },
                { icon: FaMapMarkerAlt, label: 'Location', value: 'Samundri, Pakistan' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl glass section-card flex items-center justify-center text-neonBlue text-lg md:text-xl group-hover:neon-border transition-all">
                    <item.icon />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider">{item.label}</p>
                    <p className="text-lg md:text-xl font-medium break-all">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="https://wa.me/92196893939" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center md:justify-start gap-3 w-full md:w-fit"
            >
              <FaWhatsapp className="text-2xl" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass section-card p-6 md:p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neonBlue transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neonBlue transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neonBlue transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea
                  rows="5"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neonBlue transition-colors resize-none"
                />
              </div>
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  <>
                    <FaCheckCircle />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
