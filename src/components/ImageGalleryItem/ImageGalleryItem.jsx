import css from './imageGalleryItemStyle.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ src, onClickImage }) => {
  return (
    <li className={css.ImageGalleryItem} onClick={onClickImage}>
      <img className={css.ImageGalleryItem_image} src={src} alt="" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  onClickImage: PropTypes.func.isRequired,
};
