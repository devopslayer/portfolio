import { Link, Linkedin, X } from "lucide-react";

const ProfessionalEntityModal = ({ entityInfo, onClose }) => {
  if (!entityInfo) return null;

  return (
    <div className="entity-modal-backdrop" onClick={onClose}>
      <div className="entity-modal" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-button">
          <X />
        </button>
        <img
          src={entityInfo.logo}
          alt={`${entityInfo.name} Logo`}
          className="entity-logo"
        />
        <h4>{entityInfo.name}</h4>
        <div className="entity-links">
          <a
            href={entityInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href={entityInfo.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalEntityModal;
