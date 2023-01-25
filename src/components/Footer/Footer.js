import React from 'react';
import { Box, Grid, Link, Stack, Typography } from '@mui/material';
import { Link as RouteLink } from 'react-router-dom';

import styles from './Footer.module.css';
import Logo from '../../assets/images/logo-p-500.png';
import Discord from '../../assets/images/discord.svg';
import Twitter from '../../assets/images/twitter.svg';

const Footer = () => {
  return (
    <Box className={styles.footerSection}>
      <Box className={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} className={styles.leftColumn}>
            <img src={Logo} alt='' loading='lazy' height={33} />
          </Grid>

          <Grid item xs={12} md={4} className={styles.centerColumn}>
            <Typography variant='h4' className={styles.footerHeading}>Links</Typography>
            <Stack direction='row'>
              <RouteLink to='/' className={styles.footerLink}>Home</RouteLink>
              <RouteLink to='/#' className={styles.footerLink}>Starchart</RouteLink>
              <RouteLink to='/faq' className={styles.footerLink}>Faqs</RouteLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4} className={styles.rightColumn}>
            <Link href='https://discord.gg/themoonizens'
                  target='_blank'
                  rel='nofollow'
                  className={styles.footerSocialLink}>
              <img src={Discord} alt='discord' loading='lazy' width={22}/>
            </Link>
            <Link href='https://twitter.com/moonizensnft'
                  target='_blank'
                  rel='nofollow'
                  className={styles.footerSocialLink}>
              <img src={Twitter} alt='twitter' loading='lazy' width={22}/>
            </Link>
          </Grid>
        </Grid>
        <Box className={styles.mainFooter}>
          <Typography align='center'>
            Copyright © Moonizens. All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
