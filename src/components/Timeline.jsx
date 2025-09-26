import React from "react";
import { timeline } from "../data/mock";
import { Calendar } from "lucide-react";

const Timeline = () => {
  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <div className="section-header">
          <div className="label">Career Journey</div>
          <h2 className="title-big">Timeline</h2>
          <p className="text-body section-description">
            A chronological overview of continuous learning, education, and
            professional development.
          </p>
        </div>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <Calendar size={16} />
              </div>
              <div className="timeline-content">
                <h3 className="text-regular timeline-year">{item.year}</h3>
                <ul className="timeline-events">
                  {item.events.map((event, eventIndex) => (
                    <li key={eventIndex} className="text-body timeline-event">
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
