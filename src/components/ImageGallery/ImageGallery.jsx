import React from 'react';
import { ImageGalleryItem } from './../ImageGalleryItem/ImageGalleryItem';
import css from './imageGalleryStyle.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, onClickImage, toggleModal }) => {
  return (
    <>
      <ul className={css.ImageGallery}>
        {images &&
          images.map(item => (
            <ImageGalleryItem
              key={item.id}
              src={item.webformatURL}
              onClickImage={() => {
                toggleModal();
                onClickImage(item.largeImageURL);
              }}
            />
          ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickImage: PropTypes.func,
  toggleModal: PropTypes.func.isRequired,
};
