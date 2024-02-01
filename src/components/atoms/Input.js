import React from 'react';
import PropTypes from 'prop-types';

function Input({ variant }) {
  switch (variant) {
    case 'long':
      return (
        <input
          className="form-control bg-dark-subtle"
          style={{ width: '800px' }}
        />
      );
    case 'short':
      return (
        <input
          className="form-control bg-dark-subtle"
          style={{ width: '500px' }}
        />
      );
    case 'forMyPage':
      return <input className="form-control" style={{ width: '300px' }} />;
    default:
      return <input className="form-control" style={{ width: '500px' }} />;
  }
}

Input.propTypes = {
  variant: PropTypes.string.isRequired,
};

export default Input;
