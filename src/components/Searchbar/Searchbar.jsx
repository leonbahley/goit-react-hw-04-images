import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return;
    }
    onSearch(query);
    setQuery('');
  };

  return (
    <header className={css.Searchbar}>
      <form onSubmit={handleSubmit} className={css.SearchForm}>
        <button type="submit" className={css.SearchFormButton}>
          <span className="button-label">
            <ImSearch />
          </span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;
