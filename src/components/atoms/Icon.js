import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';

/** @jsxImportSource @emotion/react */

function Icon({ className, variant, css }) {
  const cssObject = emotionCss(
    {
      fontSize: variant,
    },
    css,
  );
  switch (variant) {
    case '1rem':
      return <i className={className} css={cssObject} />;
    case '2rem':
      return <i className={className} css={cssObject} />;
    case '3rem':
      return <i className={className} css={cssObject} />;
    case '4rem':
      return <i className={className} css={cssObject} />;
    case '5rem':
      return <i className={className} css={cssObject} />;
    case '6rem':
      return <i className={className} css={cssObject} />;
    default:
      return <i className={className} css={cssObject} />;
  }
}

Icon.defaultProps = {
  className: '',
  variant: theme.iconVariant.ME,
  css: emotionCss({}),
};

Icon.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(theme.iconVariant)),
  css: PropTypes.objectOf(emotionCss),
};

export default Icon;
