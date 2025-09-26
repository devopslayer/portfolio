import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/mock";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="header-logo">FD</div>
            <p className="text-body footer-description">
              Frontend Developer passionate about creating exceptional digital
              experiences through clean, efficient code.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h4 className="label-small footer-title">Navigation</h4>
              <ul className="footer-nav">
                <li>
                  <a href="#hero" className="footer-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#skills" className="footer-link">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#certifications" className="footer-link">
                    Certifications
                  </a>
                </li>
                <li>
                  <a href="#projects" className="footer-link">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="label-small footer-title">Connect</h4>
              <div className="footer-social">
                <a
                  href={personalInfo.github}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} /> <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} /> <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="social-link"
                >
                  <Mail size={18} /> <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            <span className="label-small">
              © {currentYear} Frontend Developer. All rights reserved.
            </span>
          </div>
          <div className="footer-note">
            <span className="label-small">Built with React.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
