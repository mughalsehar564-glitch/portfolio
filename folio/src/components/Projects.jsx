import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const TypewriterText = ({ text, delay = 100, loopDelay = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayText('');
          setIndex(0);
        }, loopDelay);
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [index, text, delay, loopDelay]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse text-neonBlue">|</span>
    </span>
  );
};

const projects = [
  {
    title: 'Modern Web Application',
    description: 'A professional web application built with modern technologies and a focus on user experience.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Web Design', 'Netlify'],
    github: '#',
    demo: 'https://6a032bb6d756799569acc7f4--magnificent-dango-0eba2c.netlify.app/',
  },
  {
    title: 'AI Dashboard',
    description: 'Data-driven analytics dashboard with real-time updates and interactive charts.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000',
    tags: ['Next.js', 'TypeScript', 'Chart.js'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A premium, highly animated portfolio for creative professionals.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Three.js', 'GSAP'],
    github: '#',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 bg-deepBlack/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Featured <span className="text-neonBlue">Work</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-xl text-sm md:text-base"
            >
              A selection of my recent projects, showcasing my ability to build 
              complex and visually stunning web applications.
            </motion.p>
          </div>
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="btn-secondary w-full md:w-auto text-center"
          >
            View All Projects
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass section-card border-white/10 hover:neon-border transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-neonBlue/10 text-neonBlue border border-neonBlue/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-neonBlue transition-colors min-h-[4rem]">
                  <TypewriterText text={project.title} />
                </h3>
                <p className="text-gray-400 mb-6 text-sm line-clamp-2">{project.description}</p>
                <div className="flex items-center gap-4">
                  <a href={project.github} className="text-gray-400 hover:text-white transition-colors text-xl">
                    <FaGithub />
                  </a>
                  <a href={project.demo} className="text-gray-400 hover:text-neonBlue transition-colors text-xl">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
