import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';

/** @jsxImportSource @emotion/react */

function ListView({ children, className, css }) {
  return (
    <span className={className} css={css}>
      {children}
    </span>
  );
}

ListView.defaultProps = {
  className: 'border border-primary',
  css: emotionCss({}),
};

ListView.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};

export default ListView;
