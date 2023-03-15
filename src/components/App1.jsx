import { Component } from 'react';
import css from './appStyle.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from 'api/imageAPI';
import ImageGallery from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Hearts } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    photos: [],
    isLoading: false,
    query: '',
    page: 1,
    isOpen: false,
    modalImg: '',
  };

  async componentDidUpdate(_, prevState) {
    if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) {
      const photos = await getImages(this.state.query, this.state.page);
      this.setState(prev => ({
        photos: [...prev.photos, ...photos.data.hits],
        isLoading: false,
      }));
    }
  }

  handleSubmit = str => {
    this.setState({
      photos: [],
      isLoading: true,
      query: str,
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1, isLoading: true }));
  };

  toggleModal = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  setImg = modalImg => {
    this.setState({ modalImg });
  };

  render() {
    return (
      <div className={css.App}>
        {this.state.isLoading ? (
          <div>
            <Searchbar onSubmit={this.handleSubmit} />
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
            <Searchbar onSubmit={this.handleSubmit} />
            <ImageGallery
              images={this.state.photos}
              onClickImage={this.setImg}
              toggleModal={this.toggleModal}
            />
            {this.state.photos.length !== 0 && (
              <Button onHandleClick={this.loadMore} />
            )}
            {this.state.isOpen && (
              <Modal
                onModalClose={this.toggleModal}
                modalImg={this.state.modalImg}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}
