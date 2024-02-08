import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';
import Text from './Text';

/** @jsxImportSource @emotion/react */

function Button({
  children,
  className,
  variant,
  css,
  backgroundColor,
  onClick,
}) {
  const cssObject = emotionCss(
    {
      backgroundColor,
    },
    css,
  );

  const grayButtonCss = emotionCss(
    {
      backgroundColor: theme.color.MAFIA_LIGHT_GRAY,
      border: 'none',
    },
    cssObject,
  );

  const plainButtonCss = emotionCss(
    {
      backgroundColor: 'transparent',
      border: 'none',
      padding: '0',
    },
    cssObject,
  );

  switch (variant) {
    case theme.buttonVariant.NORMAL:
      return (
        <button
          type="button"
          className={`btn-group ${className}`}
          css={grayButtonCss}
          onClick={onClick}
        >
          <Text color={theme.color.MAFIA_WHITE}>GG</Text>
        </button>
      );
    case theme.buttonVariant.REGIS:
      return (
        <button
          type="button"
          className={`btn-group ${className}`}
          css={grayButtonCss}
          onClick={onClick}
        >
          <Text color={theme.color.MAFIA_WHITE}>회원가입</Text>
        </button>
      );
    default:
      return (
        <button
          type="button"
          className={className}
          css={plainButtonCss}
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
}

Button.defaultProps = {
  children: 'Default',
  className: '',
  css: emotionCss({}),
  variant: undefined,
  backgroundColor: undefined,
  onClick: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
  variant: PropTypes.oneOf(Object.values(theme.buttonVariant)),
  backgroundColor: PropTypes.oneOf(Object.values(theme.color)),
  onClick: PropTypes.func,
};

export default Button;
