import React from 'react';
import { Stack, Box, useMediaQuery, Typography, Link } from '@mui/material';
import { Link as RouteLink } from 'react-router-dom';
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
        <RouteLink to='/' className="brand w-nav-brand">
          <img className="logo" src={Logo} loading='lazy' alt=''
               srcSet={`${Logo500} 500w, ${Logo} 800w`}
               sizes='(max-width: 479px) 73vw, 250px'
               />
        </RouteLink>
        <nav role='navigation' className="navMenu w-nav-menu">
          <RouteLink to='/' className="navLink w-nav-link w--current">Home</RouteLink>
          <RouteLink to='/#starchart' className="navLink w-nav-link">StarChart</RouteLink>
          <RouteLink to='/faq' className="navLink w-nav-link">FAQ</RouteLink>
        </nav>
        <nav role='navigation' className="navMenu socialIcons navSocial w-nav-menu">
          <Link href='https://discord.gg/EfFV8CkpKc' target='_blank' className="socialIconLink w-inline-block">
            <img src={Discord} alt />
          </Link>
          <Link href='https://twitter.com/moonizensnft' target='_blank' className="socialIconLink w-inline-block">
            <img src={Twitter} alt />
           </Link>
        </nav>
        <Box className="menuButton w-nav-button">
          <Box className="icon w-icon-nav-menu" />
        </Box>


        {/*<nav role="navigation" className="nav-menu scl-icons nav-scl w-nav-menu">*/}
        {/*  <a rel="nofollow" href="" target="_blank"*/}
        {/*     className="social-icon-link w-inline-block"><img loading="lazy" src="images/discord.svg" alt=""></a>*/}
        {/*  <a rel="nofollow" href="" target="_blank"*/}
        {/*     className="social-icon-link w-inline-block"><img loading="lazy" src="images/twitter.svg" alt=""></a>*/}
        {/*</nav>*/}
      </Box>
    </Box>
  );
};

export default Navigation;
