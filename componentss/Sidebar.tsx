// Sidebar.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faLightbulb,
  faCogs,
  faUser,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

export const Sidebar: React.FC = () => {
  return (
    <div className="bg-dark border-right" id="sidebar-wrapper">
      <div className="sidebar-heading text-white">Power Control</div>
      <div className="list-group list-group-flush">
        <a
          href="#"
          className="list-group-item list-group-item-action bg-dark text-white"
        >
          <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
        </a>
        <a
          href="lights.html"
          className="list-group-item list-group-item-action bg-dark text-white"
        >
          <FontAwesomeIcon icon={faLightbulb} /> Lights
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action bg-dark text-white"
        >
          <FontAwesomeIcon icon={faCogs} /> Settings
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action bg-dark text-white"
        >
          <FontAwesomeIcon icon={faUser} /> Profile
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action bg-dark text-white"
        >
          <FontAwesomeIcon icon={faQuestionCircle} /> Help
        </a>
      </div>
    </div>
  );
};


