import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaInstagram, FaTiktok, FaWhatsapp, FaCode, FaRocket } from 'react-icons/fa';
import { cn } from '../utils';

const CodeTypewriter = ({ onProgress }) => {
  const [typedCharCount, setTypedCharCount] = useState(0);
  
  const codeParts = [
    { text: 'const ', className: 'text-neonBlue' },
    { text: 'developer ', className: 'text-white' },
    { text: '= {', className: 'text-neonBlue', newline: true },
    { text: '  name: ', className: 'text-purple-400' },
    { text: "'Sehar'", className: 'text-orange-300' },
    { text: ',', className: 'text-purple-400', newline: true },
    { text: '  role: ', className: 'text-purple-400' },
    { text: "'Full Stack Dev'", className: 'text-orange-300' },
    { text: ',', className: 'text-purple-400', newline: true },
    { text: '  passion: ', className: 'text-purple-400' },
    { text: "'Clean Code'", className: 'text-orange-300' },
    { text: ',', className: 'text-purple-400', newline: true },
    { text: '  skills: ', className: 'text-purple-400' },
    { text: "['React', 'Node.js', 'MongoDB']", className: 'text-orange-300' },
    { text: ',', className: 'text-purple-400', newline: true },
    { text: '};', className: 'text-neonBlue' },
  ];

  const fullTextLength = codeParts.reduce((acc, part) => acc + part.text.length, 0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typedCharCount < fullTextLength) {
        setTypedCharCount(prev => {
          const next = prev + 1;
          if (onProgress) onProgress(next / fullTextLength);
          return next;
        });
      } else {
        setTimeout(() => {
          setTypedCharCount(0);
          if (onProgress) onProgress(0);
        }, 3000);
      }
    }, 50);
    return () => clearTimeout(timeout);
  }, [typedCharCount, fullTextLength, onProgress]);

  let currentCount = 0;

  return (
    <div className="font-mono text-[11px] sm:text-xs md:text-sm leading-relaxed whitespace-pre min-h-[180px]">
      {codeParts.map((part, index) => {
        const partStart = currentCount;
        const partEnd = currentCount + part.text.length;
        currentCount = partEnd;

        if (typedCharCount < partStart) return null;

        const visibleText = part.text.slice(0, typedCharCount - partStart);
        const isCurrentlyTyping = typedCharCount >= partStart && typedCharCount < partEnd;

        return (
          <React.Fragment key={index}>
            <span className={part.className}>
              {visibleText}
              {isCurrentlyTyping && <span className="animate-pulse text-neonBlue">|</span>}
            </span>
            {part.newline && typedCharCount >= partEnd && '\n'}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState('');
  const [typeProgress, setTypeProgress] = useState(0);
  const fullText = "Full Stack Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      } else {
        // Reset after a delay to loop
        setTimeout(() => {
          setText('');
          setIndex(0);
        }, 2000);
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [index]);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX - window.innerWidth / 2) / 25,
      y: (e.clientY - window.innerHeight / 2) / 25,
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonBlue/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ x: mousePosition.x * -0.5, y: mousePosition.y * -0.5 }}
          className="order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full border border-neonBlue/30 bg-neonBlue/5 text-neonBlue text-sm font-medium mb-6"
          >
            Available for Hire
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4">
            I'm <span className="gradient-text">Sehar</span>
          </h1>
          
          <div className="h-10 md:h-12 mb-6">
            <h2 className="text-xl md:text-3xl text-gray-400 font-medium">
              {text}
              <span className="animate-pulse text-neonBlue">|</span>
            </h2>
          </div>

          <p className="text-gray-400 text-base md:text-xl max-w-lg mb-0 leading-relaxed">
            Crafting premium, high-performance web experiences with modern animations and cinematic UI designs. 
            Turning complex ideas into interactive digital reality.
          </p>
        </motion.div>

        {/* Right Side: Visual Element (Now order-2 on mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center order-2 lg:order-2 lg:row-span-2 mt-8 lg:mt-0"
          style={{ x: mousePosition.x, y: mousePosition.y }}
        >
          {/* Main Visual Card */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              scale: 0.9 + (typeProgress * 0.1), // Card grows slightly as text is typed
            }}
            transition={{ 
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.5 } 
            }}
            className="glass w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[450px] aspect-[4/5] rounded-3xl p-5 sm:p-6 md:p-8 relative overflow-hidden group shadow-[0_50px_120px_rgba(0,0,0,1)] hover:shadow-neonBlue/30 transition-shadow duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neonBlue to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
            
            {/* Code Snippet UI */}
            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <CodeTypewriter onProgress={setTypeProgress} />
            </div>

            {/* Floating Tech Icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -right-20 -bottom-20 w-64 h-64 border border-neonBlue/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -right-10 -bottom-10 w-48 h-48 border border-white/10 rounded-full"
            />
          </motion.div>

          {/* Floating Decorative Elements */}
          <motion.div
            animate={{ 
              y: [0, 20, 0], 
              x: [0, 5, 0] 
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-6 -right-4 md:-top-10 md:-right-10 w-12 h-12 md:w-24 md:h-24 glass rounded-2xl flex items-center justify-center text-xl md:text-4xl text-neonBlue z-20"
          >
            <FaRocket />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -25, 0], 
              x: [0, -10, 0] 
            }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute -bottom-8 -left-4 md:bottom-10 md:-left-10 w-16 h-16 md:w-32 md:h-32 glass rounded-full flex items-center justify-center text-neonBlue overflow-hidden z-20"
          >
            <div className="relative z-10 flex flex-col items-center">
              <FaCode className="text-xl md:text-3xl mb-0.5 md:mb-1" />
              <span className="text-[8px] md:text-[10px] font-bold tracking-tighter uppercase text-center">Clean Code</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Buttons & Socials (Now order-3 on mobile) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="order-3 lg:col-start-1"
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#contact" className="btn-primary text-center">Hire Me Now</a>
            <a href="#projects" className="btn-secondary text-center">View Projects</a>
          </div>

          <div className="flex items-center gap-6">
            {[FaInstagram, FaTiktok, FaWhatsapp].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, color: '#00d2ff' }}
                className="text-2xl text-gray-500 transition-colors"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
