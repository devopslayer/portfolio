import React from "react";
import { certifications } from "../data/mock";
import { Award } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <div className="section-header">
          <div className="label">Continuous Learning</div>
          <h2 className="title-big">Certifications</h2>
          <p className="text-body section-description">
            Committed to staying current with industry trends and expanding
            technical expertise through verified certifications.
          </p>
        </div>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="cert-icon">
                <Award size={24} />
              </div>
              <div className="cert-content">
                <h3 className="text-regular cert-title">{cert.title}</h3>
                <div className="cert-details">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <div className="cert-category">
                  <span className="label-small">{cert.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
