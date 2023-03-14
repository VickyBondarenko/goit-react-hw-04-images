import { Component } from 'react';
import css from './searchBarStyle.module.css';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    searchString: '',
  };

  handleChangeInput = e => {
    this.setState({ searchString: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.searchString) {
      return;
    }
    this.props.onSubmit(this.state.searchString);
    this.setState({ searchString: '' });
  };

  render() {
    const { searchString } = this.state;
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
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
            onChange={this.handleChangeInput}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
