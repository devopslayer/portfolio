import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import Timeline from "./Timeline";
import Contact from "./Contact";
import Footer from "./Footer";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="grid-background"></div>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Certifications />
        <Projects />
        <Experience />
        <Education />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
export default Portfolio;
