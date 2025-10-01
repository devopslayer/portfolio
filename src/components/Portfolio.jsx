import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import KeyHighlight from "./KeyHighlight";
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
        <About />
        <Experience />
        <Education />
        <KeyHighlight />
        <Skills />
        <Certifications />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
