import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function CollapsibleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-section">
      <span className="qualificationButton" onClick={toggleSection}>
        {title}
        <FontAwesomeIcon icon={faChevronDown} className='download'/>
      </span>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
}

export default CollapsibleSection;