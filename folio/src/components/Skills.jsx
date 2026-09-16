import React from 'react';
import { motion } from 'framer-motion';
import { FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';

const skills = [
  { name: 'CSS', icon: FaCss3Alt, level: 90, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, level: 85, color: '#F7DF1E' },
  { name: 'Bootstrap', icon: FaBootstrap, level: 88, color: '#7952B3' },
  { name: 'React JS', icon: FaReact, level: 88, color: '#61DAFB' },
  { name: 'Node JS', icon: FaNodeJs, level: 82, color: '#339933' },
  { name: 'Express JS', icon: SiExpress, level: 80, color: '#ffffff' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-neonBlue">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            I specialize in building modern, responsive, and performance-optimized 
            web applications using the latest industry standards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass section-card p-6 md:p-8 rounded-2xl group transition-all duration-300 hover:neon-border"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-neonBlue/10 transition-colors">
                  <skill.icon className="text-4xl transition-colors" style={{ color: skill.color }} />
                </div>
                <span className="text-2xl font-bold text-gray-500 group-hover:text-neonBlue transition-colors">
                  {skill.level}%
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-neonBlue to-purple-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
