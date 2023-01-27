import React from 'react';
import { Link } from '@mui/material';
import { motion } from 'framer-motion';

import './TeamPicture.css';
import Twitter from '../../assets/images/twitter.svg';

const TeamPicture = ({ original, thumbnail, name, role, link, id }) => {

  return (
    <motion.div
      className="team-pic"
      initial={{ opacity: 0, rotateY: -90 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1
      }}
    >
      <img src={original} loading='lazy' alt='' className="team-image"
           srcSet={`${thumbnail} 500w, ${original} 600w`}
           sizes="(max-width: 497px) 80vw, (max-width: 991px) 71vw, 600px" />
      <div className="team-name">
        <div>{name}</div>
        <div className="team-sub-name">{role}</div>
        <Link href={link} target='_blank' rel='nofollow' className="team-twitter-wrap w-inline-block">
          <img src={Twitter} loading='lazy' alt='' className="team-twitter" />
          <div>{id}<br/></div>
        </Link>
      </div>
    </motion.div>
  );
};

export default TeamPicture;
