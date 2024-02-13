import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';

/** @jsxImportSource @emotion/react */

function SearchPageTemplate({ children, className, css }) {
  return (
    <div className={className} css={css}>
      {children}
    </div>
  );
}

SearchPageTemplate.defaultProps = {
  className: '',
  css: emotionCss({}),
};

SearchPageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};

export default SearchPageTemplate;
