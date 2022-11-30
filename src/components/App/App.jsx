import Modal from '../Modal/Modal';
import { useState } from 'react';
import './App.css';
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
    <div className="App">
      <ImageGallery onClick={toggleModal} />
      {showModal && (
        <Modal IMGDescr={modalDescr} largeImg={modalImg} onClose={toggleModal}>
          <button type="button" onClick={toggleModal}>
            click
          </button>
        </Modal>
      )}
    </div>
  );
};
