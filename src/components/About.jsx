import React from "react";
import { personalInfo } from "../data/mock";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <div className="label">Get to Know Me</div>
          <h2 className="title-big">About</h2>
        </div>

        <div className="about-content">
          <div className="about-personal">
            <div className="about-header">
              <div className="about-icon">
                <User size={24} />
              </div>
              <h3 className="text-regular about-title">Who I Am</h3>
            </div>
            <div className="about-text">
              <p className="text-body about-description">{personalInfo.bio}</p>
              <p className="text-body">
                My journey in technology began with a Diploma in Computer
                Engineering, followed by hands-on industry experience, and then
                pursuing a Bachelor's degree to deepen my knowledge. During
                career transitions and gap periods, I've remained committed to
                continuous learning through certifications and practical
                projects.
              </p>
              <p className="text-body">
                I believe that challenges and career gaps have made me more
                resilience and focused. Every certifications earned and project
                completed during this time reflects my dedication to staying
                current with technology trends and my passion for frontend
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
