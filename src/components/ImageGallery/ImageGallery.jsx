import { Dna } from 'react-loader-spinner';
import ImageGalleryItem from 'components/ImageGallerItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import './ImageGallery.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ onClick }) => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = (largeImg, IMGDescr) => {
    onClick(largeImg, IMGDescr);
  };

  //   function usePreviousValue(value) {
  //     const ref = useRef();
  //     useEffect(() => {
  //       ref.current = value;
  //     });
  //     return ref.current;
  //   }

  //   const previousPage = usePreviousValue(page);
  //   const previousQuery = usePreviousValue(query);
  useEffect(() => {
    if (query === '') {
      return;
    }
    setLoading(true);
    fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=30826076-8f523437068dfd34b07c8f4ae&image_type=photo&orientation=horizontal&per_page=12
      `)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Something went wrong'));
      })
      .then(imgs => {
        if (imgs.hits.length === 0) {
          alert('No such images');
        }
        return setImages(prev => [...prev, ...imgs.hits]);
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [page, query]);

  const onSearch = data => {
    setImages([]);
    setPage(1);
    setQuery(data);
  };

  return (
    <>
      <Searchbar onSearch={onSearch} />
      {error && <div>{error.message}</div>}

      {images.length !== 0 && (
        <ul className="ImageGallery">
          {images.map(item => (
            <ImageGalleryItem
              key={item.id}
              onClick={handleClick}
              IMGDescr={item.tags}
              largeImg={item.largeImageURL}
              smallImg={item.webformatURL}
            />
          ))}
        </ul>
      )}
      {loading && (
        <div className="Loader">
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      )}
      {images.length !== 0 && <Button setPage={setPage} />}
    </>
  );
};

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
