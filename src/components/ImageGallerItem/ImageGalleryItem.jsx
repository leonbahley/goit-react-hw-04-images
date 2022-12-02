import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ onClick, largeImg, smallImg, IMGDescr }) => {
  const handleClick = () => {
    onClick(largeImg, IMGDescr);
  };

  return (
    <li className={css.ImageGalleryItem} onClick={handleClick}>
      <img
        className={css.ImageGalleryItemImage}
        src={smallImg}
        alt={IMGDescr}
      />
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
