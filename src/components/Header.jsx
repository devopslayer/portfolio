import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import largestIcon from "../assets/images/largestIcon.png";
import largerIcon from "../assets/images/largerIcon.png";
import largeIcon from "../assets/images/largeIcon.png";
import mediumIcon from "../assets/images/mediumIcon.png";
import smallerIcon from "../assets/images/smallerIcon.png";
import { personalInfo } from "../data/mock";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState("hero");

  const scrollToSection = (sectionId, smooth = true) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
      setIsActive(sectionId);
    }
    setIsMenuOpen(false);
  };

  const checkVisibleSection = () => {
    for (let sec of SECTIONS) {
      const ele = document.getElementById(sec.id);

      if (ele) {
        const rect = ele.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setIsActive(sec.id);
          break;
        }
      }
    }
  };

  useEffect(() => {
    scrollToSection("hero", false);
    checkVisibleSection();

    window.addEventListener("scroll", checkVisibleSection);
    return () => {
      window.removeEventListener("scroll", checkVisibleSection);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            <div className="logo-icon">
              <picture>
                <source srcSet={largestIcon} media="(max-width: 512px)" />
                <source srcSet={largerIcon} media="(max-width: 192px)" />
                <source srcSet={largeIcon} media="(max-width: 180px)" />
                <source srcSet={smallerIcon} media="(max-width: 16px)" />
                <img src={mediumIcon} alt="Portfolio Logo" />
              </picture>
            </div>
            <div className="logo-text">{personalInfo.name}</div>
          </div>
          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                className={`nav-link ${
                  isActive === section.id ? "active" : ""
                }`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            ))}
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
