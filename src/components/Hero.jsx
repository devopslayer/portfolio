import React from "react";
import { personalInfo } from "../data/mock";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId, smooth = true) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="label">I'm a passionate and aspiring</div>
            <h1 className="hero-title">{personalInfo.title}</h1>
            <p className="text-big">{personalInfo.subtitle}</p>
            <p className="text-body hero-bio">{personalInfo.bio}</p>
            <div className="hero-actions">
              <button
                className="btn-accent"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </button>
              <a href={personalInfo.resume} download>
                <button className="btn-primary">Download Resume</button>
              </a>
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
