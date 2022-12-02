import Modal from '../Modal/Modal';
import { useState } from 'react';
import css from './App.module.css';
import ImageGallery from '../ImageGallery/ImageGallery';
export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [modalDescr, setModalDescr] = useState(null);

  const toggleModal = (largeImg, largeIMGDescr) => {
    setModalImg(largeImg);
    setModalDescr(largeIMGDescr);
    setShowModal(prev => !prev);
  };

  return (
    <div className={css.App}>
      <ImageGallery onClick={toggleModal} />
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={modalImg} alt={modalDescr} />
        </Modal>
      )}
    </div>
  );
};
