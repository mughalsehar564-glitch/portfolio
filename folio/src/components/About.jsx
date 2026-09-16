import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiUser } from 'react-icons/hi';
import { FaGraduationCap, FaCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-deepBlack/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group mx-auto lg:mx-0 max-w-[320px] md:max-w-md w-full"
        >
          <div className="absolute -inset-4 bg-neonBlue/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative aspect-square rounded-3xl overflow-hidden glass border-white/10 shadow-[0_40px_100px_rgba(0,0,0,1)] group-hover:shadow-neonBlue/40 transition-all duration-500">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=70&w=800" 
              alt="Sehar - Full Stack Developer"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-neonBlue">Me</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            I'm a dedicated Full Stack Developer with a passion for building high-quality, 
            responsive, and user-friendly web applications. With a strong foundation in both frontend and backend technologies, I strive to deliver exceptional digital experiences that 
            combine aesthetics with functionality.
          </p>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            My journey in web development started with a curiosity for how things work 
            on the internet, and it has evolved into a professional career where I 
            constantly learn and adapt to the latest industry trends.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-neonBlue font-bold text-2xl md:text-3xl">2+</h4>
              <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-neonBlue font-bold text-2xl md:text-3xl">20+</h4>
              <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider">Projects Done</p>
            </div>
          </div>
          <a 
            href="/cv.pdf" 
            download="Sehar_CV.pdf"
            className="btn-secondary flex items-center gap-2 w-fit"
          >
            <HiDownload className="text-xl" />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
