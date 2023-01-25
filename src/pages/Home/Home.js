import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import './Home.css';
import HeroNft from '../../assets/images/hero-nft.png';
import HeroNft500 from '../../assets/images/hero-nft-p-500.png';

const Home = () => {

  return (
    <Box>
      <div className="hero-section">
        <div className="container w-container">
          <div className="hero-block">
            <div className="bnr-text">
              <Typography variant='h1' className="hero-heading">Moonizens</Typography>
              <Typography component='p' className="hero-sub-paragraph">
                A revolutionary Science-Fiction Art Experience with Universal Utility
              </Typography>
            </div>
            <div className="hero-design-1">
              <div className="button-wrapper">
                <a href="#" className="button text-button w-inline-block">
                  <div>Mint</div>
                  <div className="button-note">Coming Soon</div>
                </a>
                <div className="button-spacer"></div>
                <a href="#" className="button hollow-button hide w-button">OPEN SEA</a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-video w-background-video w-background-video-atom">
          <video autoPlay muted playsInline loop>
            <source src="videos/hero-vid-transcode.mp4" data-wf-ignore="true" />
            <source src="videos/hero-vid-transcode.webm" data-wf-ignore="true" />
          </video>
          <div className="hero-video-overlay"></div>
        </div>
        <img src={HeroNft} loading="lazy" alt='' className="hero-nft"
             srcSet={`${HeroNft500} 500w, ${HeroNft} 850w`}
             sizes='(max-width: 479px) 60vw, (max-width: 767px) 40vw, 35vw' />
        <div className="bottom-gradient"></div>
      </div>

      <div className="image-section">
        <div className="container w-container">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}>
              <div className="studio-card">
                <Typography variant='h2' className="section-card-heading">
                  Moonizen Studios
                </Typography>
                <Typography variant='p'>
                  Moonizen Studios is the backbone of the digital media company. Comprised of a talented team of 2D/3D
                  artists, modelers, and designers creating interactive experiences to engage the communities.
                  Developing high resolution and incredibly detailed custom assets with real use case. Enabling the
                  ability to <span className="redact">*********************</span> digital collectible asset <span
                    className="redact">********************* </span></Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Box>
  );
};

export default Home;
