import React from "react";
import { skills } from "../data/mock";

const Skills = () => {
  const skillCategories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const getLevelColor = (level) => {
    switch (level) {
      case "Advanced":
        return "var(--accent-primary)";
      case "Intermediate":
        return "var(--text-primary)";
      case "Basic":
        return "var(--text-secondary)";
      default:
        return "var(--text-secondary)";
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <div className="label">Technical Expertise</div>
          <h2 className="title-big">Skills</h2>
        </div>
        <div className="skills-grid">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div key={category} className="skill-category">
              <h3 className="text-regular category-title">{category}</h3>
              <div className="skills-list">
                {categorySkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span
                        className="skill-level"
                        style={{ color: getLevelColor(skill.level) }}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width:
                            skill.level === "Advanced"
                              ? "90%"
                              : skill.level === "Intermediate"
                              ? "70%"
                              : "50%",
                          backgroundColor: getLevelColor(skill.level),
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
