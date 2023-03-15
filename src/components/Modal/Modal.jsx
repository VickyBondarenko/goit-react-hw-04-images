import css from './modalStyle.module.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ onModalClose, modalImage }) => {
  const closeModalBackdrop = event => {
    if (event.target === event.currentTarget) {
      onModalClose();
    }
  };
  const handlePressKey = event => {
    if (event.code === 'Escape') {
      onModalClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handlePressKey);
    return () => {
      document.removeEventListener('keydown', handlePressKey);
    };
  }, []);

  return (
    <div className={css.Overlay} onClick={closeModalBackdrop}>
      <div className={css.Modal}>
        <img src={modalImage} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalImg: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
