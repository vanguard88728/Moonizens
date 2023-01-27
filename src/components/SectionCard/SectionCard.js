import React from 'react';
import { motion } from 'framer-motion';

import './SectionCard.css';

const SectionCard = ({ cardClassName, children }) => {

  return (
    <motion.div
      className={`section-card ${cardClassName}`}
      initial={{ opacity: 0, scale: 1.25 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3
      }}
    >
      <div className="section-card-border"></div>
      { children }
    </motion.div>
  );
};

export default SectionCard;
