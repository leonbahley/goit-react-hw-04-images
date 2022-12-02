import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ setPage }) => {
  return (
    <button
      className={css.Button}
      type="button"
      onClick={() => setPage(current => current + 1)}
    >
      Load more
    </button>
  );
};

Button.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Button;
