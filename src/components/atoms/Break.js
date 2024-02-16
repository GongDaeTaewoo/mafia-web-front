import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';

/** @jsxImportSource @emotion/react */

function Break({ breakPoint, className, css }) {
  const cssObject = emotionCss({}, css);
  return (
    <div
      css={cssObject}
      className={`w-100 d-${breakPoint}-none d-block ${className}`}
    />
  );
}

Break.defaultProps = {
  breakPoint: theme.breakPoint.LG,
  className: '',
  css: emotionCss({}),
};

Break.propTypes = {
  breakPoint: PropTypes.oneOf(Object.values(theme.breakPoint)),
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};

export default Break;
