import { createPortal } from 'react-dom';
import { useEffect, useCallback } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  return createPortal(
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>{children}</div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
