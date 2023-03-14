import css from './imageGalleryItemStyle.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  src,
  onClickImage,
  toggleModal,
  modalImg,
}) => {
  const handle = () => {
    toggleModal();
    onClickImage(modalImg);
  };
  return (
    <li className={css.ImageGalleryItem} onClick={handle}>
      <img className={css.ImageGalleryItem_image} src={src} alt="" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  modalImgs: PropTypes.string,
  src: PropTypes.string.isRequired,
  onClickImage: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
