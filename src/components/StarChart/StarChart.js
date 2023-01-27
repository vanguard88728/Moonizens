import React, { useEffect, useRef, useState } from 'react';
import { Typography } from '@mui/material';
import { motion, useMotionValue, useScroll, useSpring } from 'framer-motion';

import './StarChart.css';
import ScrollingItem from '../ScrollingItem/ScrollingItem';


const StarChart = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start', 'end end']
  });
  const x = useSpring(0, { stiffness: 50, damping: 10 });

  useEffect(() => {
    scrollYProgress.onChange(value => {
      const newOffset = -2 * window.innerHeight * value;
      x.set(newOffset);
    })
  }, [])

  return (
    <div id="starchart" className="section wf-section" ref={ref}>
      <div className="planets-wrapper expand">
        <div className="section-heading-wrapper">
          <Typography variant='h2' className="section-card-heading mob-larger">Star Chart</Typography>
        </div>
        <div className="planets-container sticky">
          <div className="wrapper">
            <div className="_w-scrolling-content">
              <motion.div className="c-scroll-track" style={{ x }}>
                <ScrollingItem
                  heading='Star 1'
                  details='Invasion begins Moonizens: Genesis digital collectible assets will mint on the Ethereum Blockchain.'
                />
                <ScrollingItem
                  heading='Star 2'
                  details='Introduction to The Moonizens lore and Mechanics.'
                />
                <ScrollingItem
                  heading='Star 3'
                  details='Grant Individuals exclusive access private discord, events and more.'
                />
                <ScrollingItem
                  heading='Star 4'
                  details='Begin Deployment of rewards to Holders.'
                />
                <ScrollingItem
                  heading='Star 5'
                  details='Launch Official Moonizens store.'
                />
                <ScrollingItem
                  heading='Star 6'
                  details='Release of The Moonizens: The Sun, The Moon, The Truth Book.'
                />
                <ScrollingItem
                  isLast={true}
                  heading='Star 7'
                  details='Moonizen Studios established as a Web3 entity.'
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-background reverse" />
      <div className="bottom-gradient-2" />
    </div>
  );
};

export default StarChart;
