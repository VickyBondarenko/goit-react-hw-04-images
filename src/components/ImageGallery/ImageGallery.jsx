import { Component } from 'react';
import { ImageGalleryItem } from './../ImageGalleryItem/ImageGalleryItem';
import css from './imageGalleryStyle.module.css';
import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
  render() {
    return (
      <>
        <ul className={css.ImageGallery}>
          {this.props.images &&
            this.props.images.map(item => (
              <ImageGalleryItem
                key={item.id}
                src={item.webformatURL}
                onClickImage={() => {
                  this.props.toggleModal();
                  this.props.onClickImage(item.largeImageURL);
                }}
              />
            ))}
        </ul>
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickImage: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
