import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm <span className="gradient-text">Bret Aebersold</span>
            </motion.h1>
            
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Full-Stack Developer & Problem Solver
            </motion.p>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I craft digital experiences with clean code and creative solutions. 
              Passionate about building scalable applications and learning new technologies.
            </motion.p>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </motion.div>
            
            <motion.div
              className="social-links"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="mailto:abs0843338@yahoo.com" aria-label="Email">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="code-window">
              <span className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                <span>Lewis Center, Ohio</span>
              </span>
              <div className="window-header">
                <div className="window-controls">
                  <span className="control red"></span>
                  <span className="control yellow"></span>
                  <span className="control green"></span>
                </div>
                <span className="window-title">developer.js</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;<span className="property">name</span>: <span className="string">'Bret Aebersold'</span>,
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;<span className="property">skills</span>: [<span className="string">'React'</span>, <span className="string">'TypeScript'</span>, <span className="string">'Node.js'</span>],
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;<span className="property">passion</span>: <span className="string">'Building amazing things'</span>
                </div>
                <div className="code-line">{'}'}</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
