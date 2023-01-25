import React from 'react';
import { Box, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';

import Logo from '../../assets/images/logo.png';
import Logo500 from '../../assets/images/logo-p-500.png';
import Discord from '../../assets/images/discord.svg';
import Twitter from '../../assets/images/twitter.svg';


const Navigation = () => {

  return (
    <Box className="navbar w-nav" data-animation='default' data-collapse='medium' data-duration='400' data-easing='ease'
         data-easing2='ease' role='banner'>
      <Box className="container nav-container">
        <NavLink to='/' end className="brand w-nav-brand">
          <img className="logo" src={Logo} loading='lazy' alt=''
               srcSet={`${Logo500} 500w, ${Logo} 800w`}
               sizes='(max-width: 479px) 73vw, 250px'
               />
        </NavLink>
        <nav role='navigation' className="navMenu w-nav-menu">
          <NavLink to='/' end className="navLink w-nav-link">Home</NavLink>
          <HashLink to='/#starchart' className="navLink w-nav-link">StarChart</HashLink>
          <NavLink to='/faq' className="navLink w-nav-link">FAQ</NavLink>
        </nav>
        <nav role='navigation' className="navMenu socialIcons navSocial w-nav-menu">
          <Link href='https://discord.gg/EfFV8CkpKc' target='_blank' className="socialIconLink w-inline-block">
            <img src={Discord} alt='' />
          </Link>
          <Link href='https://twitter.com/moonizensnft' target='_blank' className="socialIconLink w-inline-block">
            <img src={Twitter} alt='' />
           </Link>
        </nav>
        <Box className="menuButton w-nav-button">
          <Box className="icon w-icon-nav-menu" />
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;
