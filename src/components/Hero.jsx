import React from "react";
import { personalInfo } from "../data/mock";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="label">Frontend Developer</div>
            <h1 className="hero-title">{personalInfo.name}</h1>
            <p className="text-big">{personalInfo.subtitle}</p>
            <p className="text-body hero-bio">{personalInfo.bio}</p>
            <div className="hero-actions">
              <button className="btn-accent">View Projects</button>
              <button className="btn-primary">Download Resume</button>
            </div>
          </div>
          <div className="hero-links">
            <a
              href={personalInfo.github}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="social-link">
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
