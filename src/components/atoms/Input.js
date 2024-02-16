import React from 'react';
import PropTypes from 'prop-types';

/** @jsxImportSource @emotion/react */

function Input({ variant, inputType }) {
  switch (variant) {
    case 'long':
      return (
        <input
          className="form-control"
          style={{ width: '800px' }}
          type={inputType}
        />
      );
    case 'short':
      return (
        <input
          className="form-control"
          style={{ width: '500px' }}
          type={inputType}
        />
      );
    case 'forMyPage':
      return <input className="form-control" style={{ width: '300px' }} />;
    default:
      return (
        <input
          className="form-control bg-dark-subtle"
          style={{ width: '500px' }}
          type={inputType}
        />
      );
  }
}

Input.defaultProps = {
  inputType: 'text',
};

Input.propTypes = {
  variant: PropTypes.string.isRequired,
  inputType: PropTypes.string,
};

export default Input;
