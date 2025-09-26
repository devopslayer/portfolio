import React, { useState } from "react";
import { personalInfo } from "../data/mock";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });
    try {
      // EmailJS Configuration - You need to replace these with your actual IDs
      const serviceID = "service_2ce26rd"; // Replace with your EmailJS service ID
      const templateID = "template_jc76whj"; // Replace with your EmailJS template ID
      const publicKey = "yc9YohblZ8Bz-jJ5O"; // Replace with your EmailJS public key
      // Template parameters that will be sent in the email
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toTimeString(), // Current time
        to_email: "aachi15.jsr@gmail.com", // Replace with your actual email
      };
      // Send email using EmailJS
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );
      if (response.status === 200) {
        setStatus({
          type: "success",
          message: "Thank you for your message! I will get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        const timeId = setTimeout(() => {
          setStatus({ type: "", message: "" });
        }, 3000);
        return () => clearTimeout(timeId);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again or contact me directly via email.",
      });
      const timerId = setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 3000);
      return () => clearTimeout(timerId);
    } finally {
      setIsLoading(false);
    }
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
            {status.message && (
              <div
                className={`status-message ${
                  status.type === "success" ? "status-success" : "status-error"
                }`}
              >
                {status.message}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name" className="label-small">
                Full Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                disabled={isLoading}
                placeholder="e.g. John Doe - so I know what to call you!"
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
                disabled={isLoading}
                placeholder="e.g. johndoe@example.com - I'll keep it safe, promise no spam."
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
                disabled={isLoading}
                placeholder="e.g. Let's collaborate / Job opportunity / Quick question"
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
                disabled={isLoading}
                placeholder="Got a role, project, feedback, or just want to talk code? I'm a Frontend Developer eager to grow - let's build something cool or simply connect."
              ></textarea>
            </div>

            <button type="submit" className="btn-accent" disabled={isLoading}>
              <Send size={16} />
              <span>{isLoading ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
