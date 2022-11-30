import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ setPage }) => {
  return (
    <button
      className="Button"
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
