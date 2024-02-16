import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';

/** @jsxImportSource @emotion/react */

function Icon({ className, variant, color, css }) {
  const cssObject = emotionCss(
    {
      fontSize: variant,
      color,
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
  className: 'far fa-user-circle fa-lg',
  variant: theme.fontSize.ME,
  css: emotionCss({}),
  color: theme.color.MAFIA_WHITE,
};

Icon.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(theme.fontSize)),
  css: PropTypes.objectOf(emotionCss),
  color: PropTypes.oneOf(Object.values(theme.color)),
};

export default Icon;
