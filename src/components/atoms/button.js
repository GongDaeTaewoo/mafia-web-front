import React from 'react';
import PropTypes from 'prop-types';

function Button({ variant }) {
  switch (variant) {
    case 'normal':
      return (
        <button type="submit" className="btn btn-secondary">
          gg
        </button>
      );
    case 'register':
      return (
        <button type="submit" className="btn btn-secondary">
          회원가입
        </button>
      );
    default:
      return (
        <button type="submit" className="btn btn-secondary">
          gg
        </button>
      );
  }
}
Button.propTypes = {
  variant: PropTypes.string.isRequired,
};
export default Button;
