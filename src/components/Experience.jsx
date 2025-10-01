import React, { useState } from "react";
import { experience } from "../data/mock";
import { Briefcase } from "lucide-react";
import ProfessionalEntityModal from "./ProfessionalEntityModal";

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const openModal = (companyInfo) => setSelectedCompany(companyInfo);
  const closeModal = () => setSelectedCompany(null);

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <div className="label">Professional Journey</div>
          <h2 className="title-big">Experience</h2>
        </div>
        <div className="experience-timeline">
          {experience.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-icon">
                <Briefcase size={20} />
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="text-regular experience-title">{exp.title}</h3>
                  <span
                    className="experience-company"
                    onClick={() =>
                      openModal({ name: exp.company, ...exp.companyInfo })
                    }
                    title="Click to view company details"
                  >
                    {exp.company}
                  </span>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
                <p className="text-body experience-description">
                  {exp.description}
                </p>
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-body">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCompany && (
        <ProfessionalEntityModal
          entityInfo={selectedCompany}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Experience;
