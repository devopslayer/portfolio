import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-logo">FD</div>
          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <button
              className="nav-link"
              onClick={() => scrollToSection("hero")}
            >
              Home
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection("certifications")}
            >
              Certifications
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
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
