import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';
/** @jsxImportSource @emotion/react */

function Input({ variant }) {
  const inputColor = emotionCss({
    backgroundColor: theme.color.MAFIA_LIGHT_GRAY,
  });
  switch (variant) {
    case 'long':
      return (
        <input
          css={inputColor}
          className="form-control"
          style={{ width: '800px' }}
        />
      );
    case 'short':
      return (
        <input
          css={inputColor}
          className="form-control"
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
