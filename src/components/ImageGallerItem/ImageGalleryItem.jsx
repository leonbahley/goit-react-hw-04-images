import './ImageGalleryItem.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ onClick, largeImg, smallImg, IMGDescr }) => {
  const handleClick = () => {
    onClick(largeImg, IMGDescr);
  };

  return (
    <li className="ImageGalleryItem" onClick={handleClick}>
      <img className="ImageGalleryItem-image" src={smallImg} alt={IMGDescr} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  IMGDescr: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  smallImg: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
