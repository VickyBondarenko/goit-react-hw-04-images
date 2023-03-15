import { useState, useEffect, useRef } from 'react';
import css from './appStyle.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from 'api/imageAPI';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Hearts } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const queryRef = useRef('');

  useEffect(() => {
    const getPhotos = async (page, data) => {
      const images = await getImages(query, page);

      setPhotos([...data, ...images.data.hits]);
      setIsLoading(false);
      setPage(page + 1);
    };
    if (isLoading) {
      if (query !== queryRef.current) {
        queryRef.current = query;
        setPage(1);
        getPhotos(page, []);
      } else {
        getPhotos(page, photos);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const handleSubmit = str => {
    setIsLoading(true);
    setQuery(str);
  };

  const loadMore = () => {
    setIsLoading(true);
  };

  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  const setImg = modalImg => {
    setModalImg(modalImg);
  };

  return (
    <div className={css.App}>
      {isLoading ? (
        <div>
          <Searchbar onSubmit={handleSubmit} />
          <div className={css.Loading}>
            <Hearts
              height="120"
              width="120"
              color="#e84b4b"
              ariaLabel="hearts-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        </div>
      ) : (
        <div>
          <Searchbar onSubmit={handleSubmit} />
          <ImageGallery
            images={photos}
            onClickImage={setImg}
            toggleModal={toggleModal}
          />
          {photos.length !== 0 && <Button onHandleClick={loadMore} />}
          {isOpen && <Modal onModalClose={toggleModal} modalImage={modalImg} />}
        </div>
      )}
    </div>
  );
};
