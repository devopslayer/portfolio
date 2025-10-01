import React from "react";
import {
  certifications,
  education,
  experience,
  projects,
  skills,
} from "../data/mock";
import { CalculateLearningYears } from "../utils/CalculateLearningYears";

const KeyHighlight = () => {
  const learningYears =
    CalculateLearningYears(education, experience, certifications, projects) ||
    0;

  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-highlights">
            <h3 className="text-regular">Key Highlights</h3>
            <div className="highlights-grid">
              <div className="highlight-item">
                <span className="highlight-number">
                  {certifications.length || 0}+
                </span>
                <span className="highlight-label">Certifications Earned</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">{learningYears}+</span>
                <span className="highlight-label">Years of Learning</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">
                  {skills.filter((skill) => skill.type === "Tech").length || 0}+
                </span>
                <span className="highlight-label">Technologies Mastered</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">100%</span>
                <span className="highlight-label">Commitment to Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlight;
