import React, { useState } from "react";
import { education } from "../data/mock";
import { GraduationCap } from "lucide-react";
import ProfessionalEntityModal from "./ProfessionalEntityModal";

const Education = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const openModal = (collegeInfo) => setSelectedCollege(collegeInfo);
  const closeModal = () => setSelectedCollege(null);

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
                <p
                  className="education-institution"
                  onClick={() =>
                    openModal({ name: edu.institution, ...edu.collegeInfo })
                  }
                  title="Click to view institution details"
                >
                  {edu.institution}
                </p>
                <div className="education-details">
                  <span className="education-duration">{edu.duration}</span>
                  <span className="education-status">{edu.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCollege && (
        <ProfessionalEntityModal
          entityInfo={selectedCollege}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Education;
