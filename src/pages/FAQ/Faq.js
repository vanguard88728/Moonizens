import React from 'react';
import { Box, Typography } from '@mui/material';

import styles from './Faq.module.css';
import Accordion from '../../components/Accordion/Accordion';


const FAQ = () => {

  return (
    <>
      <Box className={styles.pageWrapper}>
        <Box className="container">
          <Typography align='center' className={styles.heading} variant='h1'>
            FAQs
          </Typography>
          <Box className="w-container">
            <Accordion
              heading='What are Moonizens NFTs?'
              details='The Moonizens Genesis collection of digital collectible assets will consist
                     of 1,000 uniquely generated NFTs minted on the Ethereum blockchain and hosted on IPFS
                     (Interplanetary File System).<br>'
            />
            <Accordion
              heading='What is an NFT?'
              details='NFTs (A non-fungible token is a unique digital identifier that cannot be
                     copied, substituted, or subdivided, that is recorded in a blockchain, and that is used to certify
                     authenticity and ownership.)<br>'
            />
            <Accordion
              heading='What is IPFS?'
              details='The InterPlanetary File System is a protocol, hypermedia and file sharing
                     peer-to-peer<br>network for storing and sharing data in a distributed file system.<br>'
            />
            <Accordion
              heading='When are the Moonizens going to be released?'
              details='The Moonizens Genesis Collection will launch in Winter of 2022.<br>'
            />
            <Accordion
              heading='How many WL spots?'
              details='A limited 50 WL spots are available for the Genesis mint!<br>'
            />
            <Accordion
              heading='How do I get a WL?'
              details='The Moonizens team will host several interactive community events with WL
                     spots up for grabs.<br>'
            />
            <Accordion
              heading='What is the mint cost for The Moonizens: Genesis?'
              details='1,000 pieces Collection’s Price TBA<br>'
            />
            <Accordion
              heading='How many NFTs can we mint?'
              details='You may Mint as many Moonizens as you wish, only limited by the number
                     available!<br>'
            />
            <Accordion
              heading='Can I choose which NFT I receive?'
              details='The Moonizens are randomly generated. You will not be able to choose an
                     asset while<br>minting. There will be secondary market options available on OpenSea.<br>'
            />
            <Accordion
              heading='Are there any limitations to the Whitelist for Genesis Holders?'
              details='WL Grants access to mint 1 NFT pre full public release.<br>'
            />
            <Accordion
              heading='Special Perks?'
              details='Genesis holders that hold ALL 4 Base uniforms in a single wallet will
                     achieve Quadrocar status (Leader, Engineer, ..etc) and will receive a WL spot for all future
                     official Moonizens released projects. Additional perks include exclusive access to limited
                     production content, merchandise, giveaways and Discord access.<br><br>Note: **Quadrocar does not
                       guarantee WL for special limited collaborative projects with<br>3rd parties.<br>'
            />
            <Accordion
              heading='Which blockchain are The Moonizens on?'
              details='The Moonizens are built on the Ethereum blockchain.<br>'
            />
          </Box>
        </Box>
      </Box>
      <Box className={styles.aboutButtonContainer}>
        <Box className="container">
          <Box className={styles.bottomAboutContainer}></Box>
        </Box>
      </Box>
    </>
  );
};

export default FAQ;
