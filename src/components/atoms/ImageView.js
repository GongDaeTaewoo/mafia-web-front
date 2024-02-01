import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';

/** @jsxImportSource @emotion/react */

function ImageView({ src, className, css }) {
  const cssObject = emotionCss(
    {
      minHeight: '2rem',
      minWidth: '2rem',
    },
    css,
  );
  return <img src={src} alt="no img" className={className} css={cssObject} />;
}

ImageView.defaultProps = {
  className: '',
  css: emotionCss({}),
};

ImageView.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};

export default ImageView;
