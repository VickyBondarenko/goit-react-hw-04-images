import css from './modalStyle.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  closeModalBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onModalClose();
    }
  };
  handlePressKey = event => {
    if (event.code === 'Escape') {
      this.props.onModalClose();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handlePressKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePressKey);
  }

  render() {
    const { modalImg } = this.props;
    return (
      <div className={css.Overlay} onClick={this.closeModalBackdrop}>
        <div className={css.Modal}>
          <img src={modalImg} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalImg: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
