import axios from 'axios';

export const getImages = (query, page) => {
  const apiKey = '33587680-716f90511d290523ac71bcbd3';
  return axios.get(
    `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
  );
};

export default getImages;
