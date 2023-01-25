import React, { useState } from 'react';
import { Typography } from '@mui/material';
import clsx from 'clsx';

import './Accordion.css';

const Accordion = ({ heading, details }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  }

  return (
    <div className="accordion-item">
      <div className="trigger-outer" onClick={toggleExpand}>
        <div className="accordion-trigger">
          <div className="feature-icon-flex">
            <Typography variant='h3' className="accordion-heading">{heading}</Typography>
          </div>
          <div className="accordion-arrow-wrap">
            <div className={clsx('accordion-arrow-wrapper', { expanded })}>
              <div className="arrow-line _2" />
              <div className="arrow-line _1" />
            </div>
          </div>
        </div>
      </div>
      <div className={clsx('accordion-content', { expanded })}>
        <div className="accordion-content-block">
          <div className="right-content">
            <Typography className="faq-content" dangerouslySetInnerHTML={{ __html: details }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
