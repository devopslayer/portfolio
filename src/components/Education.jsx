import React from "react";
import { education } from "../data/mock";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <div className="label">Academic Background</div>
          <h2 className="title-big">Education</h2>
        </div>
        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="education-icon">
                <GraduationCap size={24} />
              </div>
              <div className="education-content">
                <h3 className="text-regular education-degree">{edu.degree}</h3>
                <p className="education-field">{edu.field}</p>
                <p className="education-institution">{edu.institution}</p>
                <div className="education-details">
                  <span className="education-duration">{edu.duration}</span>
                  <span className="education-status">{edu.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
