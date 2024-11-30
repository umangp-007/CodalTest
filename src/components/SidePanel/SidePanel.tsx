import React, { ReactNode } from "react";
import "./SidePanel.scss"; // SCSS file for styling

interface SidePanelProps {
  isOpen: boolean; // Prop to control the visibility of the side panel
  children: ReactNode; // Children to be rendered inside the side panel
  onClose: () => void; // Callback to handle closing the panel
}

const SidePanel: React.FC<SidePanelProps> = ({ isOpen, children, onClose }) => {
  return (
    <div>
      {/* Side Panel */}
      <div className={`side-panel ${isOpen ? "open" : ""}`}>
        <div className="side-panel-content">
          {/* Close Button */}
          <div className="d-flex text-end"><button
            id="closeButton"
            className="btn ms-auto"
            onClick={onClose} // Call the onClose prop to close the panel
          >
            <i className="bi bi-x-lg"></i>
          </button></div>
          {/* Render children dynamically inside the panel */}
          <div className="panel-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
