import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';

/** @jsxImportSource @emotion/react */

function ListView({ children, variant, className, css }) {
  const cssObject = emotionCss({ padding: 0 }, css);
  switch (variant) {
    case theme.listViewVariant.UL:
      return (
        <ul className={className} css={cssObject}>
          {children}
        </ul>
      );

    case theme.listViewVariant.OL:
      return (
        <ol className={className} css={cssObject}>
          {children}
        </ol>
      );

    default:
      return (
        <ul className={className} css={cssObject}>
          {children}
        </ul>
      );
  }
}

ListView.defaultProps = {
  variant: theme.listViewVariant.UL,
  className: '',
  css: emotionCss({}),
};

ListView.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.values(theme.listViewVariant)),
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};

export default ListView;
