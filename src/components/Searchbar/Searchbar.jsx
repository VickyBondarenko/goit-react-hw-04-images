import { useState } from 'react';
import css from './searchBarStyle.module.css';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [searchString, setSearchString] = useState('');

  const handleChangeInput = e => {
    setSearchString(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!searchString) {
      return;
    }
    onSubmit(searchString);
    setSearchString('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchForm_button}>
          <span className={css.SearchForm_button_label}></span>
          <FaSearch />
        </button>

        <input
          className={css.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchString}
          onChange={handleChangeInput}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
