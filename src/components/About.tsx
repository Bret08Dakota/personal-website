import React from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, Users, Zap } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my passion.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Fast Learner',
      description: 'Always eager to learn new technologies and adapt to changing requirements.'
    },
    {
      icon: <Users size={24} />,
      title: 'Team Player',
      description: 'Collaborative approach to problem-solving and knowledge sharing.'
    },
    {
      icon: <Coffee size={24} />,
      title: 'Problem Solver',
      description: 'Turning complex challenges into elegant solutions, one cup of coffee at a time.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p className="section-subtitle">
            Passionate developer with a love for creating digital experiences
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              I'm a dedicated full-stack developer with a passion for creating innovative 
              digital solutions. With expertise in modern web technologies, I enjoy 
              tackling complex problems and turning ideas into reality.
            </p>
            <p>
              My journey in software development started with curiosity and has evolved 
              into a career focused on building scalable applications, optimizing user 
              experiences, and staying current with the latest industry trends.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            className="highlights-grid"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="highlight-icon">
                  {highlight.icon}
                </div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
