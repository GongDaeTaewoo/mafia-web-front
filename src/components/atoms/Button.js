import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';
import img from '../../assets/images/mafia_icon.svg';

/** @jsxImportSource @emotion/react */

function Button({
  children,
  className,
  variant,
  css,
  color,
  backgroundColor,
  fontSize,
  onClick,
  width,
  height,
}) {
  const cssObject = emotionCss(
    {
      color,
      backgroundColor,
      fontSize,
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
    case theme.buttonVariant.IMG:
      return (
        <button
          type="button"
          className={className}
          onClick={onClick}
          css={cssObject}
        >
          <img src={img} alt="asd" width={width} height={height} />
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
  className: 'btn-group with radio border-0 px-3 py-1',
  css: emotionCss({}),
  variant: theme.buttonVariant.NORMAL,
  color: theme.color.MAFIA_WHITE,
  backgroundColor: theme.color.MAFIA_LIGHT_GRAY,
  fontSize: theme.fontSize.SM,
  onClick: () => {},
  width: '100',
  height: '100',
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
  variant: PropTypes.oneOf(Object.values(theme.buttonVariant)),
  color: PropTypes.oneOf(Object.values(theme.color)),
  backgroundColor: PropTypes.oneOf(Object.values(theme.color)),
  fontSize: PropTypes.oneOf(Object.values(theme.fontSize)),
  onClick: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Button;
