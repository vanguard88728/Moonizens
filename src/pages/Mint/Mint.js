import React, { useState } from "react";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import clsx from "clsx";

import Holder from '../../assets/images/holder.png';
import Star from '../../assets/images/star.png';
import Sticker1 from '../../assets/images/sticker1.png';
import Sticker2 from '../../assets/images/sticker2.png';
import World from '../../assets/images/world.svg';
import styles from './Mint.module.css';


const Mint = ({ darkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [sticker, setSticker] = useState(Sticker1);

  return (
    <Box className={styles.container}>
      <Grid
        container
        direction={isMobile ? 'column-reverse' : 'row'}
        className={styles.root}
      >
        <Grid item sm={12} md='auto' className={styles.leftPanel}>
          <Stack sx={{ width: isMobile ? '100%' : 400 }}>
            <Box className={styles.orderContainer}>
              <Typography className={styles.itemCaption}>MINT 1 NFT</Typography>
              <Stack direction='row' spacing={3}>
                <img src={Holder} alt='item' className={styles.itemIcon}/>
                <Box>
                  <Typography className={styles.itemTitle}>
                    HOLDER PLAYER '23 ANNUAL MEMBERSHIP
                  </Typography>
                  <Typography className={styles.itemSubtitle}>
                    Lorem impsum
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Box className={styles.orderLabel}>
              <Typography className={styles.label}>
                Order Details
              </Typography>
            </Box>

            <Box className={styles.orderDetail}>
              <Stack spacing={2}>
                <Stack direction='row' justifyContent='space-between'>
                  <Typography className={styles.itemLabel}>SubTotal</Typography>
                  <Typography className={styles.itemValue}>$280.00</Typography>
                </Stack>

                <Stack direction='row' justifyContent='space-between'>
                  <Typography className={styles.itemLabel}>Gas Fee</Typography>
                  <Typography className={styles.itemValue}>$20.00</Typography>
                </Stack>

                <Stack direction='row' justifyContent='space-between'>
                  <Typography className={styles.itemLabel}>Total</Typography>
                  <Typography className={styles.itemValue}>$300.00</Typography>
                </Stack>

                <Box className={styles.submitButton}>
                  <img src={World} alt='world' />
                  <span className={styles.submitButtonCaption}>
                    Mint
                  </span>
                </Box>
              </Stack>
            </Box>
          </Stack>

          <img src={sticker} className={clsx(styles.sticker, {mobile: isMobile})}
               onMouseOver={() => setSticker(Sticker2)}
               onMouseOut={() => setSticker(Sticker1)}
          />
        </Grid>

        <Grid item sm={12} md
              className={styles.content}
        >
          <img src={Holder} alt='holder' className={styles.holder} />
        </Grid>
      </Grid>

      <Box className={styles.messageBox}>
        <Box className={styles.marquee}>
          <Box className={styles.marqueeContent}>
            <Box className={styles.marqueeItem}>
              <span>THE WEB3 TEAM OF MIAMI</span>
              <img src={Star} alt='star' />
            </Box>

            <Box className={styles.marqueeItem}>
              <span>THE WEB3 TEAM OF MIAMI</span>
              <img src={Star} alt='star' />
            </Box>

            <Box className={styles.marqueeItem}>
              <span>THE WEB3 TEAM OF MIAMI</span>
              <img src={Star} alt='star' />
            </Box>
          </Box>

          <Box className={styles.marqueeContent}>
            <Box className={styles.marqueeItem}>
              <span>THE WEB3 TEAM OF MIAMI</span>
              <img src={Star} alt='star' />
            </Box>

            <Box className={styles.marqueeItem}>
              <span>THE WEB3 TEAM OF MIAMI</span>
              <img src={Star} alt='star' />
            </Box>

            <Box className={styles.marqueeItem}>
              <span>THE WEB3 TEAM OF MIAMI</span>
              <img src={Star} alt='star' />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Mint;
