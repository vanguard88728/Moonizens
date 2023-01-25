import React from 'react';

import './SectionCard.css';

const SectionCard = ({ cardClassName, children }) => {

  return (
    <div className={`section-card ${cardClassName}`}>
      <div className="section-card-border"></div>
      { children }
    </div>
  );
};

export default SectionCard;
