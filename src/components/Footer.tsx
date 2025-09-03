import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:abs0843338@yahoo.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-main">
            <div className="footer-brand">
              <h3>Bret Aebersold</h3>
              <p>Full-Stack Developer passionate about creating amazing digital experiences.</p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Connect</h4>
                <div className="social-links">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="social-link"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-copyright">
              <p>
                © {currentYear} Bret Aebersold. Made with <Heart size={16} className="heart" /> using React & TypeScript
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
