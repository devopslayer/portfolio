import React from "react";
import { projects } from "../data/mock";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <div className="label">Selected Work</div>
          <h2 className="title-big">Projects</h2>
          <p className="text-body section-description">
            A collection of projects demonstrating problem-solving skills and
            technical expertise in modern web development.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <div className="project-header">
                  <h3 className="text-regular project-title">
                    {project.title}
                  </h3>
                  <div className="project-category">
                    <span className="label-small">{project.category}</span>
                  </div>
                </div>
                <p className="text-body project-description">
                  {project.description}
                </p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
