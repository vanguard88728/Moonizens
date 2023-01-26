import React, { useState } from 'react';
import { Modal, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-multi-carousel';
import ImageGallery from 'react-image-gallery';
import 'react-multi-carousel/lib/styles.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import './CollectionSlider.css';

import Generation1 from '../../assets/images/generation-1.jpg';
import Generation1_500 from '../../assets/images/generation-1-p-500.jpg';
import Generation2 from '../../assets/images/generation-2.jpg';
import Generation2_500 from '../../assets/images/generation-2-p-500.jpg';
import Generation3 from '../../assets/images/generation-3.jpg';
import Generation3_500 from '../../assets/images/generation-3-p-500.jpg';
import Generation4 from '../../assets/images/generation-4.jpg';
import Generation4_500 from '../../assets/images/generation-4-p-500.jpg';
import Generation5 from '../../assets/images/generation-5.jpg';
import Generation5_500 from '../../assets/images/generation-5-p-500.jpg';
import Generation6 from '../../assets/images/generation-6.jpg';
import Generation6_500 from '../../assets/images/generation-6-p-500.jpg';
import Generation7 from '../../assets/images/generation-7.jpg';
import Generation7_500 from '../../assets/images/generation-7-p-500.jpg';
import Generation8 from '../../assets/images/generation-8.jpg';
import Generation8_500 from '../../assets/images/generation-8-p-500.jpg';
import Generation9 from '../../assets/images/generation-9.jpg';
import Generation9_500 from '../../assets/images/generation-9-p-500.jpg';
import Generation10 from '../../assets/images/generation-10.jpg';
import Generation10_500 from '../../assets/images/generation-10-p-500.jpg';

const images = [
  { original: Generation1, thumbnail: Generation1_500 },
  { original: Generation2, thumbnail: Generation2_500 },
  { original: Generation3, thumbnail: Generation3_500 },
  { original: Generation4, thumbnail: Generation4_500 },
  { original: Generation5, thumbnail: Generation5_500 },
  { original: Generation6, thumbnail: Generation6_500 },
  { original: Generation7, thumbnail: Generation7_500 },
  { original: Generation8, thumbnail: Generation8_500 },
  { original: Generation9, thumbnail: Generation9_500 },
  { original: Generation10, thumbnail: Generation10_500 },
]

const CollectionSlide = ({ image500, image, openModal, index }) => {
  return (
    <div className="collection-slide" onClick={() => openModal(index)}>
      <img src={image} loading='lazy' alt=''
           srcSet={`${image500} 500w, ${image} 576w`}
           sizes="(max-width: 479px) 50vw, (max-width: 991px) 33vw, 20vw" />
    </div>
  )
}

const CustomLeftArrow = ({ onClick }) => (
  <div className="slider-arrow w-slider-arrow-left" onClick={() => onClick()}>
    <div className="w-icon-slider-left"></div>
  </div>
)

const CustomRightArrow = ({ onClick }) => (
  <div className="slider-arrow w-slider-arrow-right" onClick={() => onClick()}>
    <div className="w-icon-slider-right"></div>
  </div>
)

const LeftNav = ({ onClick }) => (
  <div className="w-lightbox-control w-lightbox-left" onClick={onClick} />
)

const RightNav = ({ onClick }) => (
  <div className="w-lightbox-control w-lightbox-right" onClick={onClick} />
)


const CollectionSlider = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery('(max-width: 479px)');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (index) => {
    console.log('INDEX', index);
    setCurrentIndex(index);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 991 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 991, min: 479 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 479, min: 0 },
      items: 2
    }
  }

  return (
    <div id="collection" className="collection-slider">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        swipeable={false}
        draggable={false}
        customTransition='transform 500ms ease'
        transitionDuration={500}
        slidesToSlide={isMobile ? 2 : isTablet ? 3 : 5}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {images.map((image, index) => (
          <CollectionSlide
            key={index}
            index={index}
            image={image.original}
            image500={image.thumbnail}
            openModal={handleOpen}
          />
        ))}
      </Carousel>

      <Modal open={open} onClose={handleClose}>
        <div className="modal-container">
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            renderLeftNav={LeftNav}
            renderRightNav={RightNav}
            startIndex={currentIndex}
          />
          <div className="w-lightbox-control w-lightbox-close" onClick={handleClose} />
        </div>
      </Modal>
    </div>
  );
};

export default CollectionSlider;
