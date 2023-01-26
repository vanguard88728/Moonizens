import React from "react";
import { Box, Grid, Link, Typography } from '@mui/material';
import SectionCard from '../../components/SectionCard/SectionCard';
import './Home.css';

import HeroNft from '../../assets/images/hero-nft.png';
import HeroNft500 from '../../assets/images/hero-nft-p-500.png';
import Planet from '../../assets/images/card-planet.png';
import Planet500 from '../../assets/images/card-planet-p-500.png';
import Project from '../../assets/images/card-project.png';
import Genesis from '../../assets/images/card-genesis.png';
import Mechanics from '../../assets/images/card-mechanics.png';
import UniversalUtility from '../../assets/images/card-universal-utility.png';
import TeamSpook from '../../assets/images/team-spook.png';
import TeamSpook500 from '../../assets/images/team-spook-p-500.png';
import TeamMega from '../../assets/images/team-mega.png';
import TeamMega500 from '../../assets/images/team-mega-p-500.png';
import TeamLeet from '../../assets/images/team-leet.png';
import TeamLeet500 from '../../assets/images/team-leet-p-500.png';
import Twitter from '../../assets/images/twitter.svg';

const Home = () => {

  return (
    <Box>
      <section id='home' className="hero-section">
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
      </section>

      <section id='cards' className="section remove-top-padding">
        <div className="container w-container">
          <div className="row">
            <SectionCard cardClassName="card-1">
              <div className="section-card-content">
                <div className="card-left">
                  <Typography variant='h2' className="section-card-heading">The Lore</Typography>
                  <p>
                    Set in the year 2122, A great moonbase stands on the dusty plains of Luna. Upon it, a thousand
                    Humans dwell - miners, artisans, leaders, and scientists. All working toward a common goal,
                    knowledge. But they are not alone, for on the desert plains of the moon, another species crash
                    lands. The Chuid, a sentient fluid, a liquid metal that bonds with a host species, transmuting them
                    in a process called Symbocar. The humans will soon experience transcendence.
                  </p>
                </div>
                <div className="card-right">
                  <img src={Planet} loading='lazy' alt='' className="card-right-image"
                       srcSet={`${Planet500} 500w, ${Planet} 500w`}
                       sizes="(max-width: 479px) 125px, (max-width: 767px) 31vw, (max-width: 991px) 30vw, 300px" />
                </div>
              </div>
            </SectionCard>
            <SectionCard cardClassName="card-2">
              <div className="section-card-content">
                <div className="card-left">
                  <Typography variant='h2' className="section-card-heading">The Project</Typography>
                  <p>
                    Spawning from our passion for art, love of science fiction and storytelling, the journey begins
                    with the introduction of our first digital collectable asset. The Moonizens will be exhilarating,
                    yet familiar, and will unlock the world of Blockchain technology while engaging audiences. This
                    exclusive community receives access to limited content and merchandise.
                  </p>
                </div>
                <div className="card-right">
                  <img src={Project} loading='lazy' alt='' className="card-right-image" />
                </div>
              </div>
            </SectionCard>
            <SectionCard cardClassName="card-3">
              <div className="section-card-content">
                <div className="card-left">
                  <Typography variant='h2' className="section-card-heading">Genesis Collection</Typography>
                  <p>Witness the merging of Humans and the Chuid, a synthesis of something new and strange, with an
                    endless universe of possibility. The Moonizens: Genesis Collection will consist of 1,000
                    breathtakingly unique Moonizen avatars, minted on the Ethereum blockchain. These are not only
                    digital collectible assets. They hold purpose, carry weight, and form a cohesive universe.</p>
                  <p>The Moonizens provide Genesis owners access to an array of high-quality art, compelling lore,
                    fashionable products, web3 experiences and exclusive events. As the universe expands, so will the
                    utility. The Genesis collection will serve as the inception of The Moonizens as a web3 entity.</p>
                </div>
                <div className="card-right">
                  <img src={Genesis} loading='lazy' alt='' className="card-right-image reduce-opacity" />
                </div>
              </div>
            </SectionCard>
            <SectionCard cardClassName="card-4">
              <div className="section-card-content">
                <div className="card-left">
                  <Typography variant='h2' className="section-card-heading">Genesis Mechanics</Typography>
                  <p>Owners of all 4 Base uniforms from Genesis will be elevated to the status of Quadrocar making them
                    eligible for whitelist spots throughout the entirety of the project’s phases! Providing exclusive
                    access to receive rare digital content, including early sketches, concepts, and unique versions.
                    Whitelist will guarantee a secure spot for early mint and token gated access to exclusive
                    merchandise and Discord channels. Contained in this collection are 5 insanely rare Legendary Golden
                    armor pieces, capable of unlocking FREE Air Drop eligibility for future phases.</p>
                </div>
                <div className="card-right">
                  <img src={Mechanics} loading='lazy' alt='' className="card-right-image" />
                </div>
              </div>
            </SectionCard>
            <SectionCard cardClassName="card-5">
              <div className="section-card-content">
                <div className="card-left">
                  <Typography variant='h2' className="section-card-heading">Universal Utility</Typography>
                  <p>The Chuid, a sentient fluid and therefore shapeless, can evolve into anything. Without defined
                    shape, comes versatility in both design and collaboration. The Chuid open the gateway for adaptation
                    to any setting, be it fantasy, modern or historical fiction. The art itself is therefore a malleable
                    concept which will also transform. The Moonizens are not an end state, they are the beginning…</p>
                </div>
                <div className="card-right">
                  <img src={UniversalUtility} loading='lazy' alt='' className="card-right-image reduce-opacity" />
                </div>
              </div>
            </SectionCard>
            <SectionCard cardClassName="card-6">
              <div className="card-left">
                <Typography variant='h2' className="section-card-heading">Co-Founders</Typography>
              </div>
              <div className="w-layout-grid grid-team">
                <div className="team-pic">
                  <img src={TeamSpook} loading='lazy' alt='' className="team-image"
                       srcSet={`${TeamSpook500} 500w, ${TeamSpook} 600w`}
                       sizes="(max-width: 497px) 80vw, (max-width: 991px) 71vw, 600px" />
                  <div className="team-name">
                    <div>Spook</div>
                    <div className="team-sub-name">Founder / Artist</div>
                    <Link href='https://twitter.com/spookmoonizens' target='_blank' rel='nofollow'
                          className="team-twitter-wrap w-inline-block">
                      <img src={Twitter} loading='lazy' alt='' className="team-twitter" />
                      <div>@SpookMoonizens<br/></div>
                    </Link>
                  </div>
                </div>
                <div className="team-pic">
                  <img src={TeamMega} loading='lazy' alt='' className="team-image"
                       srcSet={`${TeamMega500} 500w, ${TeamMega} 600w`}
                       sizes="(max-width: 497px) 80vw, (max-width: 991px) 71vw, 600px" />
                  <div className="team-name">
                    <div>Mega</div>
                    <div className="team-sub-name">Co-Founder / COO</div>
                    <Link href='https://twitter.com/defeateroffiat' target='_blank' rel='nofollow'
                          className="team-twitter-wrap w-inline-block">
                      <img src={Twitter} loading='lazy' alt='' className="team-twitter" />
                      <div>@DefeaterOfFiat<br/></div>
                    </Link>
                  </div>
                </div>
                <div className="team-pic">
                  <img src={TeamLeet} loading='lazy' alt='' className="team-image"
                       srcSet={`${TeamLeet500} 500w, ${TeamLeet} 600w`}
                       sizes="(max-width: 497px) 80vw, (max-width: 991px) 71vw, 600px" />
                  <div className="team-name">
                    <div>Leet</div>
                    <div className="team-sub-name">Co-Founder / Cto</div>
                    <Link href='https://twitter.com/leetcoins' target='_blank' rel='nofollow'
                          className="team-twitter-wrap w-inline-block">
                      <img src={Twitter} loading='lazy' alt='' className="team-twitter" />
                      <div>@LeetCoins<br/></div>
                    </Link>
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>
        </div>
        <div className="section-background"></div>
      </section>

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
