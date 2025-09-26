import React, { useState } from "react";
import { personalInfo } from "../data/mock";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission - in real app would send to backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <div className="label">Get In Touch</div>
          <h2 className="title-big">Contact</h2>
          <p className="text-body section-description">
            Ready to contribute to your team and bring fresh perspectives to
            challenging projects.
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="text-regular">Let's Connect</h3>
            <p className="text-body">
              I'm actively seeking opportunities to apply my skills and continue
              growing as a Frontend Developer.
            </p>
            <div className="contact-links">
              <a href={`mailto:${personalInfo.email}`} className="contact-link">
                <Mail size={20} /> <span>{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.github}
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} /> <span>GitHub Profile</span>
              </a>
              <a
                href={personalInfo.linkedin}
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} /> <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="label-small">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="label-small">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="label-small">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="label-small">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-textarea"
              ></textarea>
            </div>
            <button type="submit" className="btn-accent">
              <Send size={16} /> <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
