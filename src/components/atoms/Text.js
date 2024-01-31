import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';

/** @jsxImportSource @emotion/react */

function Text({ children, variant, fontWeight, color, className, css }) {
  const cssObject = emotionCss(
    {
      fontWeight,
      color,
    },
    css,
  );

  switch (variant) {
    case 'h1':
      return (
        <h1 className={className} css={cssObject}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={className} css={cssObject}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={className} css={cssObject}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={className} css={cssObject}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={className} css={cssObject}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 className={className} css={cssObject}>
          {children}
        </h6>
      );
    case 'span':
      return (
        <span className={className} css={cssObject}>
          {children}
        </span>
      );
    case 'small':
      return (
        <small className={className} css={cssObject}>
          {children}
        </small>
      );
    case 'strong':
      return (
        <strong className={className} css={cssObject}>
          {children}
        </strong>
      );

    default:
      return (
        <span className={className} css={cssObject}>
          {children}
        </span>
      );
  }
}

Text.defaultProps = {
  className: '',
  css: emotionCss({}),
  variant: theme.fontVariant.SPAN,
  fontWeight: theme.fontWeight.NORMAL,
  color: theme.color.MAFIA_BACKGROUND,
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
  variant: PropTypes.oneOf(Object.values(theme.fontVariant)),
  fontWeight: PropTypes.oneOf(Object.values(theme.fontWeight)),
  color: PropTypes.oneOf(Object.values(theme.color)),
};

export default Text;
