import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import './ScrollingItem.css';
import Star from '../../assets/images/star-1.png';

const ScrollingItem = ({ heading, details, isLast = false }) => {
  return (
    <div className="c-scrolling-item">
      <div className="c-scrolling-line">
        <motion.div
          className="scroll-indicator"
          whileHover={{ scale: [null, 0.75, 1.1, 1] }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
        >
          <img src={Star} loading="lazy" alt='' />
        </motion.div>
        <div className={clsx("scroll-line", { last: isLast })} />
      </div>
      <div className="c-scrolling-details">
        <h4 className="scroll-item-header">{heading}</h4>
        <p className="scroll-details">{details}</p>
      </div>
    </div>
  );
};

export default ScrollingItem;
