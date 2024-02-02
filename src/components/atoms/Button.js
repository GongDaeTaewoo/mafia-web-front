import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';

/** @jsxImportSource @emotion/react */

function Button({
  children,
  className,
  variant,
  css,
  color,
  backgroundColor,
  iconVariant,
  onClick,
}) {
  const cssObject = emotionCss(
    {
      color,
      backgroundColor,
      fontSize: iconVariant,
    },
    css,
  );

  switch (variant) {
    case theme.buttonVariant.NORMAL:
      return (
        <button
          type="button"
          className={className}
          css={cssObject}
          onClick={onClick}
        >
          GG
        </button>
      );
    case theme.buttonVariant.REGIS:
      return (
        <button
          type="button"
          className={className}
          css={cssObject}
          onClick={onClick}
        >
          회원가입
        </button>
      );
    default:
      return (
        <button
          type="button"
          className={className}
          css={cssObject}
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
}

Button.defaultProps = {
  children: 'Default',
  className: 'btn-group with radio border-0',
  css: emotionCss({}),
  variant: theme.buttonVariant.NORMAL,
  color: theme.color.MAFIA_RED,
  backgroundColor: theme.color.MAFIA_LIGHT_GRAY,
  iconVariant: theme.iconVariant.SM,
  onClick: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
  variant: PropTypes.oneOf(Object.values(theme.buttonVariant)),
  color: PropTypes.oneOf(Object.values(theme.color)),
  backgroundColor: PropTypes.oneOf(Object.values(theme.color)),
  iconVariant: PropTypes.oneOf(Object.values(theme.iconVariant)),
  onClick: PropTypes.func,
};

export default Button;
